import React from 'react';
import VideoComparison from '@/components/work/VideoComparison';
import { motion } from 'framer-motion';

const Work = () => {
  const videos = [
    {
      originalId: "dQw4w9WgXcQ",
      translatedId: "dQw4w9WgXcQ"
    },
    {
      originalId: "dQw4w9WgXcQ",
      translatedId: "dQw4w9WgXcQ"
    },
    {
      originalId: "dQw4w9WgXcQ",
      translatedId: "dQw4w9WgXcQ"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 text-center"
        >
          Some of Our Work
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Watch how we transform English content into engaging Hindi videos that resonate with the Indian audience
        </motion.p>
        
        <div className="space-y-16">
          {videos.map((video, index) => (
            <VideoComparison
              key={index}
              originalVideoId={video.originalId}
              translatedVideoId={video.translatedId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;