import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { HiOutlineHome, HiOutlineChartBar, HiOutlineChatAlt, HiOutlineDocumentText } from 'react-icons/hi'; // Import icons

const NavigationLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: 'Dashboard', path: '/dashboard/home', icon: <HiOutlineHome className="w-6 h-6" /> },
    { name: 'Chat', path: '/dashboard/chat', icon: <HiOutlineChatAlt className="w-6 h-6" /> },
    { name: 'Analytics', path: '/dashboard/analytics', icon: <HiOutlineChartBar className="w-6 h-6" /> },
  ];

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-black/90 backdrop-blur-md flex flex-col justify-between p-6">
      <div>
        <div className="mb-8">
          <Link to="/dashboard/home" className="flex items-center">
            <img src="/favicon.ico" alt="Vidoro" className="w-8 h-8" />
          </Link>
        </div>
        <ul className="space-y-4">
          {links.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Link
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  location.pathname === item.path ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSignOut}
        className="flex items-center gap-3 p-3 rounded-lg text-gray-400 hover:text-white"
      >
        <HiOutlineDocumentText className="w-6 h-6" />
        <span>Sign Out</span>
      </motion.button>
    </nav>
  );
};

export default NavigationLogin;