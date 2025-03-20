import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const [user, setUser] = useState<any>(null);
  const [credits, setCredits] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const unsubscribeSnapshot = onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            setCredits(data.credits || 0);
          }
        });
        return () => unsubscribeSnapshot();
      } else {
        setCredits(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !(profileRef.current as any).contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
      setIsProfileOpen(false);
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  if (!user) return null;

  const firstLetter = user.displayName ? user.displayName[0] : user.email[0];

  return (
    <div className="flex items-center gap-4">
      {/* Credits Display */}
      <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2 shadow-md">
        <span className="text-yellow-400 font-semibold">⌛ Minutes:</span>
        <span className="text-white font-medium">
          {credits !== null ? credits : 'Loading...'}
        </span>
      </div>

      {/* Profile Icon and Dropdown */}
      <div ref={profileRef} className="relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg cursor-pointer shadow-lg"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          {firstLetter.toUpperCase()}
        </motion.div>
        <AnimatePresence>
          {isProfileOpen && (
            <motion.div
              className="absolute right-0 mt-3 w-72 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl shadow-2xl p-5 z-50" // Increased dropdown width to w-72
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl" style={{ aspectRatio: '1/1' }}> {/* Increased to w-14 h-14 and added aspect-ratio */}
                  {firstLetter.toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">
                    {user.displayName || user.email.split('@')[0]}
                  </p>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Profile;