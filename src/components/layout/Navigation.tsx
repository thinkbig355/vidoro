import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  XMarkIcon,
  Bars3Icon,
  ChartPieIcon, // Import Dashboard icon
} from '@heroicons/react/24/outline';
import { auth } from '../../lib/firebase';
import Profile from './Profile'; // Keep Profile here too

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Correct type
  const [user, setUser] = useState<any>(null); // Use firebase.User | null for better type safety

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  const handleSignIn = () => {
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  // --- Click outside handler ---
   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
         setIsMobileMenuOpen(false);
       }
     };
     document.addEventListener('mousedown', handleClickOutside);
     return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);

   // --- Close mobile menu on navigation ---
   useEffect(() => {
     setIsMobileMenuOpen(false);
   }, [location]);


  const GradientButton = ({ text, onClick, isSignIn = false }: { text: string; onClick: () => void; isSignIn?: boolean }) => (
    <div className="relative group">
      {/* ... (GradientButton code remains the same) ... */}
       <motion.button
         className="relative px-4 py-2 font-bold text-white rounded-md shadow-lg overflow-hidden"
         style={{
           background: isSignIn
             ? "linear-gradient(135deg, #60A5FA, #3B82F6)"
             : "linear-gradient(135deg, #EF4444, #B91C1C)",
         }}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         onClick={onClick}
       >
         <span className="relative z-10 block text-sm">{text}</span>
         <motion.div
           className="absolute inset-0 bg-blue-500/30"
           style={{ mixBlendMode: "overlay" }}
         />
       </motion.button>
    </div>
  );

  // Define navigation items
  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon className="w-5 h-5" /> },
    { name: 'Work Samples', path: '/work', icon: <BriefcaseIcon className="w-5 h-5" /> },
    { name: 'How it works', path: '/process', icon: <Cog6ToothIcon className="w-5 h-5" /> },
    { name: 'Pricing', path: '/pricing', icon: <CurrencyDollarIcon className="w-5 h-5" /> },
    // Conditionally add Dashboard link
    ...(user ? [{ name: 'Dashboard', path: '/dashboard', icon: <ChartPieIcon className="w-5 h-5" /> }] : []),
  ];

   // Define mobile navigation items (similar logic)
   const mobileNavItems = [
     { name: 'Home', path: '/', icon: <HomeIcon className="w-5 h-5" /> },
     { name: 'Work Samples', path: '/work', icon: <BriefcaseIcon className="w-5 h-5" /> },
     { name: 'How it works', path: '/process', icon: <Cog6ToothIcon className="w-5 h-5" /> },
     { name: 'Pricing', path: '/pricing', icon: <CurrencyDollarIcon className="w-5 h-5" /> },
     ...(user ? [{ name: 'Dashboard', path: '/dashboard', icon: <ChartPieIcon className="w-5 h-5" /> }] : []),
   ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
           <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }}
             className="ml-4"
           >
             <Link to="/" className="flex items-center">
               <img src="/favicon.ico" alt="Vidoro" className="w-8 h-8" />
             </Link>
           </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full bg-gray-800/50 text-white"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-start flex-1 pl-12">
            <nav className="flex items-center">
              <ul className="flex gap-6">
                {navItems.map((item) => ( // Use the navItems array
                  <motion.li
                    key={item.name}
                    onHoverStart={() => setHoveredItem(item.name)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="relative"
                  >
                    <Link
                      to={item.path}
                      className={`py-2 px-3 rounded-lg relative flex items-center gap-2 transition-all ${
                        location.pathname === item.path ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {/* Hover background */}
                      {hoveredItem === item.name && location.pathname !== item.path && ( // Don't show hover if active
                        <motion.div
                          layoutId="navHover"
                          className="absolute inset-0 bg-gray-800/80 rounded-lg -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      {/* Active background */}
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-blue-600/50 rounded-lg -z-10" // Changed color slightly
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {/* Icon and Text */}
                      <span className="hidden sm:inline">{item.icon}</span>
                      <span className={location.pathname === item.path ? 'font-medium' : ''}>{item.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Side Actions (Contact, Profile/Sign In) */}
          <div className="hidden md:flex items-center gap-4 mr-4">
            {/* Contact Us Button */}
             <div>
               <GradientButton text="Contact Us" onClick={handleGetStarted} />
             </div>
             {/* Profile OR Sign In Button */}
            {user ? (
              <Profile /> // Keep Profile here
            ) : (
              <div>
                <GradientButton text="Sign In" onClick={handleSignIn} isSignIn={true} />
              </div>
            )}
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                ref={menuRef}
                className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800 p-6 rounded-b-2xl shadow-2xl md:hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-4 mb-8">
                  {mobileNavItems.map((item) => ( // Use mobileNavItems array
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 5 }} // Subtle hover effect
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)} // Close on click
                        className={`flex items-center gap-3 text-lg py-2 rounded-md px-2 ${ // Added padding/rounding
                          location.pathname === item.path
                           ? 'text-white font-medium bg-blue-600/30' // Highlight active
                           : 'text-gray-400 hover:text-white hover:bg-gray-700/50' // Hover effect
                        }`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                        {/* Removed the little active bar, using background instead */}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                {/* Mobile Action Buttons */}
                <div className="flex flex-col gap-4 border-t border-gray-700 pt-6">
                   {user ? (
                     // In mobile menu, maybe just show sign out? Or keep full profile?
                     // Option 1: Simpler mobile profile display if needed
                     // <div className="text-white">Logged in as {user.email}</div>
                     // Option 2: Keep full Profile (might be bulky)
                     <Profile />
                   ) : (
                     <div>
                       <GradientButton text="Sign In" onClick={handleSignIn} isSignIn={true} />
                     </div>
                   )}
                   <div>
                     <GradientButton text="Contact Us" onClick={handleGetStarted} />
                   </div>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navigation;