"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-4 bg-black text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
              Unlock the Massive
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 block mt-2">
              Indian YouTube Audience
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 block mt-2">
              of
            </span>
            <span className="block text-5xl md:text-7xl text-red-500 mt-4 font-extrabold">
              500 Million+
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-medium"
          >
            We Translate Your Videos into Hindi, Expanding Your Reach & Impact
          </motion.p>

          {/* Updated button text and navigation */}
          <motion.button
            onClick={() => navigate('/pricing')} // Navigate to /pricing
            className="relative overflow-hidden px-8 py-4 rounded-full text-white font-bold text-xl shadow-lg"
            style={{
              background: "linear-gradient(45deg, #4f46e5, #9333ea, #ec4899, #4f46e5)",
              backgroundSize: "300% 300%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "200% 50%", "0% 50%"],
              y: [0, -5, 0],
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              },
              y: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Pricing</span> {/* Button text changed to Pricing */}
            <motion.div
              className="absolute inset-0 bg-white opacity-25"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.button>
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