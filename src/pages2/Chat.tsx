import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    collection,
    query,
    where,
    orderBy,
    onSnapshot,
    addDoc,
    serverTimestamp,
    doc,
    updateDoc,
    Timestamp,
    writeBatch,
    getDocs,
    limit,
    setDoc
} from 'firebase/firestore';
import { db, auth } from '../lib/firebase'; // Assuming auth is correctly exported
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { User, onAuthStateChanged } from 'firebase/auth';
import { format } from 'date-fns'; // For formatting timestamps

// Define the structure of a message
interface Message {
    id: string;
    text: string;
    senderId: string;
    timestamp: Timestamp | null; // Firestore Timestamp object
    chatId: string;
}

const AGENCY_ID = "agency_main"; // Your agency's consistent ID

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser); // Initialize with current user if available
    const [isSending, setIsSending] = useState(false); // Prevent double sending

    const messagesEndRef = useRef<HTMLDivElement>(null); // Ref to scroll to bottom

    // --- Get Current User ---
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (!user) {
                // Handle logout scenario if necessary (e.g., redirect or clear state)
                setMessages([]);
                setError("Please log in to chat.");
                setLoading(false);
            } else {
                // Reset error if user logs in
                setError(null);
                setLoading(true); // Start loading messages for the new user
            }
        });
        return () => unsubscribe();
    }, []);


    // --- Scroll to Bottom ---
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        // Scroll down when messages change
        scrollToBottom();
    }, [messages, scrollToBottom]);


    // --- Fetch Messages & Reset Unread Count ---
    useEffect(() => {
        if (!currentUser) {
            setLoading(false);
            return; // Don't fetch if no user
        }

        setLoading(true);
        setError(null);
        const messagesCollectionRef = collection(db, 'messages');
        const q = query(
            messagesCollectionRef,
            where('chatId', '==', currentUser.uid), // Filter by chat ID (user's UID)
            orderBy('timestamp', 'asc') // Order by time
        );

        const unsubscribe = onSnapshot(q, async (querySnapshot) => { // Make async for batch write
            const fetchedMessages: Message[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                // Basic validation
                if (data.text && data.senderId && data.chatId) {
                    fetchedMessages.push({
                        id: doc.id,
                        text: data.text,
                        senderId: data.senderId,
                        // Ensure timestamp is handled correctly (null or Timestamp)
                        timestamp: data.timestamp instanceof Timestamp ? data.timestamp : null,
                        chatId: data.chatId,
                    });
                } else {
                    console.warn("Skipping malformed message:", doc.id, data);
                }
            });
            setMessages(fetchedMessages);
            setLoading(false);
            scrollToBottom(); // Scroll after initial load or update

            // --- Reset Unread Count on receiving messages ---
            // We do this here to ensure it happens after messages are loaded/updated
            // Only reset if there are messages OR if the listener is active
            const chatDocRef = doc(db, 'chats', currentUser.uid);
            try {
                // Using setDoc with merge: true is safer as it creates the doc if it doesn't exist
                await setDoc(chatDocRef, { clientUnreadCount: 0 }, { merge: true });
                // console.log('Unread count reset for user:', currentUser.uid);
            } catch (err) {
                console.error("Error resetting unread count:", err);
                // Don't set error state here as it's a non-critical background task
            }

        }, (err) => {
            console.error("Error fetching messages:", err);
            setError("Failed to load messages. Please try again later.");
            setLoading(false);
        });

        // Cleanup listener on unmount or user change
        return () => unsubscribe();

    }, [currentUser, scrollToBottom]); // Rerun when user changes


    // --- Send Message Handler ---
    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentUser || !newMessage.trim() || isSending) {
            return;
        }

        setIsSending(true);
        setError(null); // Clear previous errors

        const textToSend = newMessage.trim();
        setNewMessage(''); // Clear input immediately

        const messageData = {
            chatId: currentUser.uid,
            senderId: currentUser.uid,
            text: textToSend,
            timestamp: serverTimestamp(), // Use server timestamp for consistency
        };

        const chatDocRef = doc(db, 'chats', currentUser.uid);

        try {
            // Use a batch write to add message and update chat metadata atomically
            const batch = writeBatch(db);

            // 1. Add the new message document
            const messagesCollectionRef = collection(db, 'messages');
            batch.set(doc(messagesCollectionRef), messageData); // Auto-generates message ID

            // 2. Update the chat metadata document
            //    - Creates the chat doc if it doesn't exist
            //    - Updates last message details
            //    - We don't increment agencyUnreadCount here, as that should ideally be handled
            //      by a backend function when the AGENCY receives it. Doing it here is less reliable.
            batch.set(chatDocRef, {
                clientId: currentUser.uid,
                agencyParticipantId: AGENCY_ID,
                lastMessageTimestamp: serverTimestamp(),
                lastMessageSnippet: textToSend,
                // Optionally set clientUnreadCount: 0 here too if desired
            }, { merge: true }); // merge: true creates or updates

            await batch.commit();
            // console.log('Message sent and chat metadata updated.');
            scrollToBottom(); // Scroll after sending

        } catch (err) {
            console.error("Error sending message:", err);
            setError("Failed to send message.");
            // Optionally: Re-set the input field with the failed message
            // setNewMessage(textToSend);
        } finally {
            setIsSending(false);
        }
    };

    // --- Timestamp Formatter ---
    const formatTimestamp = (timestamp: Timestamp | null): string => {
        if (!timestamp) return '';
        try {
            // Example format: "HH:mm" (e.g., 14:35) or "MMM d, HH:mm" if different day
            return format(timestamp.toDate(), 'HH:mm'); // Adjust format as needed
        } catch (e) {
            console.error("Error formatting timestamp:", e);
            return 'Invalid date';
        }
    };


    // --- Render Logic ---
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden"> {/* Adjust height based on your layout */}

            {/* Header (Optional) */}
            <div className="p-4 border-b border-gray-700 bg-gray-900">
                <h2 className="text-xl font-semibold">Chat with Vidoro</h2>
            </div>

            {/* Message List */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4">
                {loading && (
                    <div className="flex justify-center items-center h-full">
                        <p className="text-gray-400">Loading messages...</p>
                        {/* Add a spinner here if you like */}
                    </div>
                )}
                {!loading && error && (
                    <div className="flex justify-center items-center h-full">
                        <p className="text-red-400">{error}</p>
                    </div>
                )}
                {!loading && !error && messages.length === 0 && (
                     <div className="flex justify-center items-center h-full">
                        <p className="text-gray-500">No messages yet. Say hello!</p>
                     </div>
                )}
                {!loading && !error && messages.map((msg) => {
                    const isUserMessage = msg.senderId === currentUser?.uid;
                    return (
                        <div
                            key={msg.id}
                            className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg shadow ${isUserMessage
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-700 text-gray-200'
                                    }`}
                            >
                                <p className="break-words">{msg.text}</p>
                                <span className={`text-xs mt-1 block ${isUserMessage ? 'text-blue-200' : 'text-gray-400'} text-right`}>
                                    {formatTimestamp(msg.timestamp)}
                                </span>
                            </div>
                        </div>
                    );
                })}
                {/* Dummy div to ensure scrolling works */}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-700 bg-gray-900">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow px-4 py-2 bg-gray-700 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                        disabled={!currentUser || isSending} // Disable if not logged in or sending
                    />
                    <button
                        type="submit"
                        className={`p-2 rounded-full transition-colors duration-200 ${newMessage.trim() && !isSending ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
                        disabled={!newMessage.trim() || isSending || !currentUser}
                        aria-label="Send message"
                    >
                        {isSending ? (
                           // Simple sending indicator
                           <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                           </svg>
                        ) : (
                            <PaperAirplaneIcon className="h-5 w-5" />
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;