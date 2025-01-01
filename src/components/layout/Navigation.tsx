import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { name: "Our Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "Pricing", path: "/pricing" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-1"
        >
          <Link to="/" className="text-2xl font-bold text-primary">
            Vidorro
          </Link>
        </motion.div>
        
        <nav className="flex-1 flex justify-center gap-8">
          {links.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Link
                to={item.path}
                className={`text-foreground/80 hover:text-foreground transition-colors ${
                  location.pathname === item.path ? 'text-foreground font-semibold' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <div className="flex-1 flex justify-end">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;