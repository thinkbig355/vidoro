import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe } from 'lucide-react';

const TrustedBy = () => {
  const [count, setCount] = useState(100);
  const countRef = useRef(null);
  const isInView = useInView(countRef);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const duration = 5000; // 5 seconds
      const increment = Math.floor((2000 - 100) / (duration / 50)); // Update every 50ms
      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + increment;
          if (next >= 2000) {
            clearInterval(timer);
            return 2000;
          }
          return next;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Content Creators</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {[1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 10,
                delay: index * 0.1 
              }}
              className="bg-gray-50 rounded-full aspect-square flex items-center justify-center shadow-md"
            >
              <Globe className="w-12 h-12 text-red-600" />
            </motion.div>
          ))}
        </div>
        <motion.div 
          ref={countRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div className="text-5xl font-bold text-red-600 mb-4">
            {count}+
          </motion.div>
          <p className="text-xl text-gray-600">Translated Videos</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;