import React from 'react';
import VideoComparison from '@/components/work/VideoComparison';
import { motion } from 'framer-motion';
import YoutubeVideo from '@/components/work/YoutubeVideo';

const Work = () => {
  const videos = [
    {
      originalId: "GJbUI2D3rLY",
      translatedId: "rovMJ49Ij_k"
    },
    {
      originalId: "kVpJ6BwG8zg",
      translatedId: "qKJBlTLcBKY"
    },
  ];

  const hindiVideos = [
    "CVCbAoiNX6A",
    "dsuMPWZvX2Q",
    "NhWQE9hbT_o",
    "rq8UyDFUR7M",
    "mlAGyhBFZlU",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black px-8 py-24 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
            Some of Our Work
          </span>
        </h1>
        <p 
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 md:mb-24"
          style={{transitionDelay: '0.2s'}}
        >
          Watch how we transform English content into engaging Hindi videos that resonate with the Indian audience
        </p>
      </motion.div>

      <div className="space-y-16">
        {videos.map((video, index) => (
          <VideoComparison
            key={index}
            originalVideoId={video.originalId}
            translatedVideoId={video.translatedId}
            className="bg-gray-800"
          />
        ))}

        <div className='flex gap-4 overflow-x-auto pb-4'>
          {hindiVideos.map((videoId,index) =>(
            <YoutubeVideo key={index} videoId={videoId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;