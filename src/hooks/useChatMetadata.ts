import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, onSnapshot, DocumentData } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

interface ChatMetadata {
  clientUnreadCount: number;
  // Add other metadata fields if needed in the future
}

export const useChatMetadata = () => {
  const [chatMetadata, setChatMetadata] = useState<ChatMetadata>({ clientUnreadCount: 0 });
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Listen for auth changes to get the current user
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (!user) {
        // Reset state if user logs out
        setChatMetadata({ clientUnreadCount: 0 });
        setLoading(false);
      }
      // Loading state will be updated by the Firestore listener if user exists
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    let unsubscribeSnapshot: (() => void) | null = null;

    if (currentUser) {
      setLoading(true); // Set loading true when user is available and we start fetching
      const chatDocRef = doc(db, 'chats', currentUser.uid);

      unsubscribeSnapshot = onSnapshot(chatDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data() as DocumentData;
          setChatMetadata({
            clientUnreadCount: data.clientUnreadCount || 0,
          });
        } else {
          // Document doesn't exist, assume 0 unread
          setChatMetadata({ clientUnreadCount: 0 });
          console.log("Chat metadata document doesn't exist for user:", currentUser.uid);
          // Optionally: You could create the doc here if needed,
          // but often it's better created when the first message occurs.
        }
        setLoading(false);
      }, (error) => {
        console.error("Error fetching chat metadata:", error);
        setChatMetadata({ clientUnreadCount: 0 }); // Reset on error
        setLoading(false);
      });

    } else {
      // No user logged in
      setLoading(false);
    }

    // Cleanup listener on component unmount or user change
    return () => {
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
      }
    };
  }, [currentUser]); // Re-run effect if currentUser changes

  // Provide the raw user object as well, might be useful
  return { chatMetadata, loading, currentUser };
};