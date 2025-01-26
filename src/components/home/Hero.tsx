import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/contact');
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
              Unlock the Massive
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 block">
              Indian YouTube Audience
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 block">
              of
            </span>
            <span className="block text-5xl md:text-7xl text-red-500 mt-2">
              500 Million+
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            We Translate Your Videos into Hindi, Expanding Your Reach & Impact
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-xl rounded-full transition-all duration-300 relative group"
              onClick={handleGetStartedClick}
            >
              Get Started
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="relative aspect-square rounded-lg overflow-hidden"
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://cdn.leonardo.ai/users/2098a0d6-9a93-480a-b952-0840092314da/generations/07884269-3038-4231-9ad0-35ae4b6a9c4a/Leonardo_Phoenix_10_A_intricate_and_detailed_map_of_India_comp_2.jpg"
            alt="India Map Visualization"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;