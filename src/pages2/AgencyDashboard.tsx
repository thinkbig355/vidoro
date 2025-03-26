"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  getDoc,
  serverTimestamp,
  where,
  Timestamp,
  writeBatch,
  increment,
} from "firebase/firestore"
import { db, auth } from "../lib/firebase"
import { useNavigate } from "react-router-dom"
import type { User as FirebaseUser } from "firebase/auth"
import { format, formatDistanceToNow } from "date-fns"
import { PaperAirplaneIcon, ArrowLeftOnRectangleIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const AGENCY_ID = "agency_main"

interface ChatMetadata {
  id: string
  clientId: string
  agencyParticipantId?: string
  lastMessageTimestamp: Timestamp | null
  lastMessageSnippet: string
  clientUnreadCount: number
  agencyUnreadCount: number
  clientDisplayName?: string
  clientEmail?: string
}

interface Message {
  id: string
  text: string
  senderId: string
  timestamp: Timestamp | null
  chatId: string
}

const AgencyDashboard = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(auth.currentUser)
  const [chats, setChats] = useState<ChatMetadata[]>([])
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [loadingChats, setLoadingChats] = useState(true)
  const [loadingMessages, setLoadingMessages] = useState(false)
  const [sendingMessage, setSendingMessage] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // --- Authentication Check (useEffect) ---
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
        navigate("/login", { replace: true })
      }
    })
    return () => unsubscribe()
  }, [navigate])

  // --- Fetch Chat List (useEffect) ---
  useEffect(() => {
    setLoadingChats(true)
    const chatsCollectionRef = collection(db, "chats")
    const q = query(chatsCollectionRef, orderBy("lastMessageTimestamp", "desc"))

    const unsubscribe = onSnapshot(
      q,
      async (querySnapshot) => {
        const chatsData: ChatMetadata[] = []
        const userFetchPromises: Promise<void>[] = []

        querySnapshot.forEach((docSnapshot) => {
          const data = docSnapshot.data()
          const chat: ChatMetadata = {
            id: docSnapshot.id,
            clientId: data.clientId || docSnapshot.id,
            lastMessageTimestamp: data.lastMessageTimestamp || null,
            lastMessageSnippet: data.lastMessageSnippet || "",
            clientUnreadCount: data.clientUnreadCount || 0,
            agencyUnreadCount: data.agencyUnreadCount || 0,
          }

          const userDocRef = doc(db, "users", chat.clientId)
          userFetchPromises.push(
            getDoc(userDocRef)
              .then((userDoc) => {
                if (userDoc.exists()) {
                  chat.clientDisplayName = userDoc.data().displayName || chat.clientId
                  chat.clientEmail = userDoc.data().email || ""
                } else {
                  chat.clientDisplayName = chat.clientId
                  chat.clientEmail = "N/A"
                }
              })
              .catch((err) => {
                console.error(`Error fetching user ${chat.clientId}:`, err)
                chat.clientDisplayName = chat.clientId
                chat.clientEmail = "Error"
              }),
          )
          chatsData.push(chat)
        })

        await Promise.all(userFetchPromises)
        setChats(chatsData)
        setLoadingChats(false)
        setError(null)
      },
      (err) => {
        console.error("Error fetching chats:", err)
        setError("Failed to load conversations.")
        setLoadingChats(false)
      },
    )

    return () => unsubscribe()
  }, [])

  // --- Fetch Messages for Selected Chat (useEffect) ---
  useEffect(() => {
    if (!selectedChatId) {
      setMessages([])
      return
    }
    setLoadingMessages(true)
    setMessages([])
    const messagesCollectionRef = collection(db, "messages")
    const q = query(messagesCollectionRef, where("chatId", "==", selectedChatId), orderBy("timestamp", "asc"))
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchedMessages: Message[] = []
        querySnapshot.forEach((docSnapshot) => {
          const data = docSnapshot.data()
          if (data.text && data.senderId && data.chatId) {
            fetchedMessages.push({
              id: docSnapshot.id,
              text: data.text,
              senderId: data.senderId,
              timestamp: data.timestamp instanceof Timestamp ? data.timestamp : null,
              chatId: data.chatId,
            })
          } else {
            console.warn("Skipping malformed message:", docSnapshot.id, data)
          }
        })
        setMessages(fetchedMessages)
        setLoadingMessages(false)
        scrollToBottom()
      },
      (err) => {
        console.error(`Error fetching messages for chat ${selectedChatId}:`, err)
        setError(`Failed to load messages for ${selectedChatId}.`)
        setLoadingMessages(false)
      },
    )
    return () => unsubscribe()
  }, [selectedChatId])

  // --- Scroll to Bottom (useCallback & useEffect) ---
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])
  useEffect(() => {
    if (!loadingMessages) {
      scrollToBottom()
    }
  }, [messages, loadingMessages, scrollToBottom])

  // --- Select Chat Handler ---
  const handleSelectChat = (chatId: string) => {
    if (chatId === selectedChatId) return
    setSelectedChatId(chatId)
    setError(null)
    setNewMessage("")
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }

    // --- Reset Agency Unread Count on Selection ---
    const chatDocRef = doc(db, "chats", chatId)
    updateDoc(chatDocRef, { agencyUnreadCount: 0 })
      .then(() => {
        setChats((prevChats) => prevChats.map((c) => (c.id === chatId ? { ...c, agencyUnreadCount: 0 } : c)))
      })
      .catch((err) => console.error("Error resetting unread count on select:", err))
  }

  // --- Send Message Handler ---
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentUser || !selectedChatId || !newMessage.trim() || sendingMessage) return
    setSendingMessage(true)
    setError(null)
    const textToSend = newMessage.trim()
    setNewMessage("")
    const messageData = { chatId: selectedChatId, senderId: AGENCY_ID, text: textToSend, timestamp: serverTimestamp() }
    const chatDocRef = doc(db, "chats", selectedChatId)
    const messagesCollectionRef = collection(db, "messages")
    try {
      const batch = writeBatch(db)
      batch.set(doc(messagesCollectionRef), messageData)
      batch.update(chatDocRef, {
        lastMessageTimestamp: serverTimestamp(),
        lastMessageSnippet: textToSend,
        agencyUnreadCount: 0,
        clientUnreadCount: increment(1),
      })
      await batch.commit()
      scrollToBottom()
    } catch (err) {
      console.error("Error sending message:", err)
      setError("Failed to send message.")
    } finally {
      setSendingMessage(false)
    }
  }

  // --- Logout Handler ---
  const handleLogout = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      console.error("Logout failed:", error)
      setError("Logout failed.")
    }
  }

  // --- Timestamp Formatters ---
  const formatTimestamp = (timestamp: Timestamp | null): string => {
    try {
      return timestamp ? format(timestamp.toDate(), "HH:mm") : ""
    } catch (e) {
      return "Invalid date"
    }
  }
  const formatRelativeTimestamp = (timestamp: Timestamp | null): string => {
    try {
      return timestamp ? formatDistanceToNow(timestamp.toDate(), { addSuffix: true }) : ""
    } catch (e) {
      return "Invalid date"
    }
  }

  const selectedClientName = chats.find((c) => c.id === selectedChatId)?.clientDisplayName || selectedChatId || "Client"

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800/90 rounded-full text-white hover:bg-blue-600 transition-colors shadow-lg"
        aria-label="Toggle conversations list"
      >
        {isSidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar (Conversation List) */}
      <aside
        className={`
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                md:translate-x-0 fixed md:static top-0 left-0 z-40 w-72 md:w-80 lg:w-96 h-full 
                bg-gray-800/95 backdrop-blur-sm border-r border-gray-700/50 
                flex flex-col transition-all duration-300 ease-in-out shadow-xl md:shadow-none
            `}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-700/50 flex justify-between items-center flex-shrink-0 bg-gray-800/80 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-blue-400">Agency Dashboard</h2>
          <button
            onClick={handleLogout}
            title="Logout"
            className="p-2 text-gray-400 hover:text-white hover:bg-red-600/50 rounded-full transition-colors"
          >
            <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Chat List */}
        <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {loadingChats && (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          {!loadingChats && error && <p className="p-4 text-red-400 text-center">{error}</p>}
          {!loadingChats && chats.length === 0 && (
            <div className="flex flex-col items-center justify-center h-32 p-4">
              <p className="text-gray-500 text-center">No conversations yet.</p>
            </div>
          )}
          {!loadingChats &&
            chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleSelectChat(chat.id)}
                className={`
                                p-4 border-b border-gray-700/30 cursor-pointer transition-all duration-150
                                ${
                                  selectedChatId === chat.id
                                    ? "bg-blue-900/40 border-l-4 border-l-blue-500"
                                    : "hover:bg-gray-700/30 border-l-4 border-l-transparent"
                                }
                            `}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold truncate text-gray-100">
                    {chat.clientDisplayName || "Unknown Client"}
                  </span>
                  <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
                    <span className="text-xs text-gray-400">{formatRelativeTimestamp(chat.lastMessageTimestamp)}</span>
                    {chat.agencyUnreadCount > 0 && (
                      <span className="px-1.5 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full leading-none min-w-[18px] text-center">
                        {chat.agencyUnreadCount > 9 ? "9+" : chat.agencyUnreadCount}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-400 truncate pr-2">{chat.lastMessageSnippet || "No messages"}</p>
              </div>
            ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-grow flex flex-col bg-gray-900/80 backdrop-blur-sm">
        {!selectedChatId && (
          <div className="flex-grow flex flex-col items-center justify-center text-gray-500 p-6">
            <UserCircleIcon className="h-16 w-16 text-gray-600 mb-4" />
            <p className="text-lg mb-2">Select a conversation to start chatting</p>
            <p className="text-sm text-gray-600 text-center max-w-md">
              Choose a client from the sidebar to view and respond to their messages
            </p>
          </div>
        )}
        {selectedChatId && (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-700/50 bg-gray-800/90 backdrop-blur-sm flex items-center space-x-3 flex-shrink-0 sticky top-0 z-10 shadow-md">
              <div className="bg-blue-600/20 p-2 rounded-full">
                <UserCircleIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{selectedClientName}</h3>
                <p className="text-xs text-gray-400">{chats.find((c) => c.id === selectedChatId)?.clientEmail || ""}</p>
              </div>
            </div>

            {/* Message List */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {loadingMessages && (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
              {!loadingMessages && error && !messages.length && (
                <div className="flex justify-center items-center h-full">
                  <p className="text-red-400 bg-red-500/10 px-4 py-2 rounded-lg">
                    {error.includes(selectedChatId) ? error : "Error loading messages."}
                  </p>
                </div>
              )}
              {!loadingMessages && !messages.length && !error && (
                <div className="flex justify-center items-center h-full">
                  <p className="text-gray-500 bg-gray-800/50 px-4 py-2 rounded-lg">
                    No messages in this conversation yet.
                  </p>
                </div>
              )}
              {messages.map((msg) => {
                const isAgencyMessage = msg.senderId === AGENCY_ID
                return (
                  <div key={msg.id} className={`flex ${isAgencyMessage ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`
                                            max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-md
                                            ${
                                              isAgencyMessage
                                                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                                                : "bg-gray-700/90 text-gray-200 border border-gray-600/30"
                                            }
                                        `}
                    >
                      <p className="break-words">{msg.text}</p>
                      <span
                        className={`text-xs mt-1 block ${isAgencyMessage ? "text-blue-200" : "text-gray-400"} text-right`}
                      >
                        {formatTimestamp(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                )
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Reply Input */}
            <div className="p-4 border-t border-gray-700/50 bg-gray-800/90 backdrop-blur-sm flex-shrink-0 sticky bottom-0 z-10 shadow-lg">
              {error && !error.includes(selectedChatId) && (
                <p className="text-red-400 text-sm mb-2 bg-red-500/10 p-2 rounded">{error}</p>
              )}
              <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={`Reply to ${selectedClientName}...`}
                  className="flex-grow px-4 py-3 bg-gray-700/80 border border-gray-600/50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 disabled:opacity-50 shadow-inner"
                  disabled={loadingMessages || sendingMessage || !selectedChatId}
                />
                <button
                  type="submit"
                  className={`p-3 rounded-full transition-all duration-200 shadow-md ${
                    newMessage.trim() && !sendingMessage
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!newMessage.trim() || sendingMessage || loadingMessages}
                  aria-label="Send reply"
                >
                  {sendingMessage ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <PaperAirplaneIcon className="h-5 w-5" />
                  )}
                </button>
              </form>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default AgencyDashboard

