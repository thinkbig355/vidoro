import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const links = [
    { name: "Our Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "Pricing", path: "/pricing" }
  ];

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="text-2xl font-bold text-red-600">
              Vidoro
            </Link>
          </motion.div>
          
          <nav className="flex justify-center gap-8">
            {links.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`text-gray-600 hover:text-gray-900 transition-colors ${
                    location.pathname === item.path ? 'text-gray-900 font-semibold' : ''
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button 
              variant="default" 
              className="bg-red-600 hover:bg-red-700"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;