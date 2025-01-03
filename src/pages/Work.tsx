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
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
      >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Some of Our Work
          </h1>
          <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{transitionDelay: '0.2s'}}
          >
             Watch how we transform English content into engaging Hindi videos that resonate with the Indian audience
          </p>
      </motion.div>

      <div className="space-y-16 mt-12">
        {videos.map((video, index) => (
          <VideoComparison
            key={index}
            originalVideoId={video.originalId}
            translatedVideoId={video.translatedId}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;