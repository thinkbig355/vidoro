import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Samples', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black  "> {/* Changed the background color to black and removed the shadow*/}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="text-2xl font-bold text-red-600">
              Vidoro
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links and Get Started Button */}
          <div className={`md:flex ${isMobileMenuOpen ? 'flex' : 'hidden'} items-center gap-8`}>
            <nav className="flex flex-col md:flex-row gap-8 md:items-center">
              {links.map(item => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }} className="relative">
                  <Link
                    to={item.path}
                    className={`text-gray-300 hover:text-white transition-colors ${
                      location.pathname === item.path ? 'text-white font-semibold' : ''
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button variant="default" className="bg-red-600 hover:bg-red-700" onClick={handleGetStarted}>
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col gap-4">
              {links.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-300 hover:text-white transition-colors ${
                    location.pathname === item.path ? 'text-white font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;