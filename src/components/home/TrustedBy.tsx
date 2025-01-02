import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const TrustedBy = () => {
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-5xl font-bold text-red-600 mb-4">
            2000+
          </div>
          <p className="text-xl text-gray-600">Translated Videos</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;