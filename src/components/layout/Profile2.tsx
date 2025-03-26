// src/components/layout/Profile2.tsx
// (Accepts isCollapsed prop, conditionally renders credits, centers icon when collapsed)

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';

// --- Define Props Interface ---
interface Profile2Props {
  isCollapsed: boolean;
}
// --- --- --- --- --- --- --- ---

// --- Accept props in component signature ---
const Profile2: React.FC<Profile2Props> = ({ isCollapsed }) => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<any>(null);
  const [credits, setCredits] = useState<number | null>(null);

  // --- Data Fetching Effect --- (No changes needed)
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const unsubscribeSnapshot = onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            setCredits(data.credits ?? 0);
          } else {
            setCredits(0);
          }
        }, (error) => {
            console.error("Error fetching user data:", error);
            setCredits(null);
        });
        return () => unsubscribeSnapshot();
      } else {
        setCredits(null);
        setUser(null);
      }
    });
    return () => unsubscribeAuth();
  }, []);


  // --- Click Outside Effect --- (No changes needed)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- Sign Out Handler --- (No changes needed)
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
      setIsProfileOpen(false);
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  // --- Render Logic ---
  if (!user) return null;

  const firstLetter = user.displayName?.[0] || user.email?.[0] || '?';

  return (
    // --- Adjust outer container based on isCollapsed ---
    <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'}`}>

      {/* --- Conditionally render Credits Display --- */}
      {!isCollapsed && (
        <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2 shadow-md flex-shrink-0"> {/* Added flex-shrink-0 */}
          <span className="text-yellow-400 font-semibold whitespace-nowrap">⌛ Minutes:</span> {/* Added whitespace-nowrap */}
          <span className="text-white font-medium">
            {credits !== null ? credits : '...' /* Shortened Loading */}
          </span>
        </div>
      )}
      {/* --- End Conditional Rendering --- */}


      {/* Profile Icon and Dropdown Container */}
      {/* Add flex-shrink-0 to prevent icon container from shrinking unexpectedly */}
      <div ref={profileRef} className="relative flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg cursor-pointer shadow-lg"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          aria-haspopup="true"
          aria-expanded={isProfileOpen}
        >
          {firstLetter.toUpperCase()}
        </motion.div>

        {/* Dropdown Menu (Positioned UPWARDS and aligned LEFT) */}
        <AnimatePresence>
          {isProfileOpen && (
            <motion.div
              className="absolute bottom-full left-0 mb-2 w-72 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl shadow-2xl p-5 z-50" // left-0 remains correct
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2 }}
            >
              {/* Content remains the same */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0" style={{ aspectRatio: '1/1' }}>
                  {firstLetter.toUpperCase()}
                </div>
                <div className="overflow-hidden">
                  <p className="text-white font-semibold text-lg truncate">
                    {user.displayName || user.email.split('@')[0]}
                  </p>
                  <p className="text-gray-400 text-sm truncate">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Sign Out
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div> // End outer flex container
  );
};

export default Profile2;