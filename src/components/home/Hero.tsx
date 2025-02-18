"use client"

import React from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative pt-32 pb-20 px-4 text-white overflow-hidden min-h-screen">
        <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                Unlock the Massive
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 block mt-2">
                Indian YouTube Audience
              </span>
              <span className="block text-5xl md:text-7xl text-red-600 mt-4 font-extrabold">
                500 Million+
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-2xl text-gray-300 mb-10 font-medium max-w-lg"
            >
              We Translate Your Videos into Hindi, Expanding Your Reach & Impact
            </motion.p>
            <motion.button
              onClick={() => navigate('/pricing')}
              className="relative inline-flex items-center overflow-hidden px-8 py-4 rounded-full text-white font-bold text-xl shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              style={{
                background: "linear-gradient(45deg, #4f46e5, #9333ea, #ec4899, #4f46e5)",
                backgroundSize: "300% 300%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "200% 50%", "0% 50%"],
                y: [0, -4, 0],
              }}
              transition={{
                backgroundPosition: { duration: 3, ease: "linear", repeat: Infinity },
                y: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Pricing</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-20 rounded-full"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.button>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[1300px]">
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-2xl"
                style={{ aspectRatio: '1080/1080' }}
                animate={{ scale: [1, 1.02, 1], rotate: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <video
                  src="/india-map-animation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  width="1300"
                  height="1080"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Hero;