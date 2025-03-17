import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const links = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Work Samples', path: '/work', icon: '🎬' },
    { name: 'How it works', path: '/process', icon: '⚙️' },
    { name: 'Pricing', path: '/pricing', icon: '💰' },
  ];

  const handleGetStarted = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const GradientButton = () => {
    return (
      <div className="relative group">
        <motion.button
          className="relative px-4 py-2 font-bold text-white rounded-md shadow-lg overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #60A5FA, #F87171)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 block text-sm">
            Contact Us
          </span>
          <motion.div
            className="absolute inset-0 bg-blue-500/30"
            style={{
              mixBlendMode: "overlay",
            }}
          />
        </motion.button>
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center">
              <img src="/favicon.ico" alt="Vidoro" className="w-8 h-8" />
            </Link>
          </motion.div>

          <motion.button 
            className="md:hidden p-2 rounded-full bg-gray-800/50 text-white"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </motion.button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="flex items-center">
              <ul className="flex gap-6">
                {links.map((item) => (
                  <motion.li 
                    key={item.name}
                    onHoverStart={() => setHoveredItem(item.name)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="relative"
                  >
                    <Link 
                      to={item.path} 
                      className={`py-2 px-3 rounded-lg relative flex items-center gap-2 transition-all ${
                        location.pathname === item.path 
                          ? 'text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {hoveredItem === item.name && (
                        <motion.div
                          layoutId="navHover"
                          className="absolute inset-0 bg-gray-800/80 rounded-lg -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}

                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gray-700/50 rounded-lg -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      <span className="hidden sm:inline">{item.icon}</span>
                      <span className={location.pathname === item.path ? 'font-medium' : ''}>{item.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Us button on the right */}
          <div className="hidden md:flex items-center">
            <div onClick={handleGetStarted}>
              <GradientButton />
            </div>
          </div>

          {/* Mobile Menu */}
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
                <nav className="flex flex-col gap-4 mb-8">
                  {links.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 text-lg py-2 ${
                          location.pathname === item.path
                            ? 'text-white font-medium'
                            : 'text-gray-400'
                        }`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>

                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="mobileActive"
                            className="w-1 h-6 bg-red-500 rounded-full ml-auto"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div onClick={handleGetStarted}>
                  <GradientButton />
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