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
    <div className="min-h-screen bg-[#0A0A0F] px-8 pt-32 pb-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Some of Our Work
          </span>
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16 md:mb-24">
          Watch how we transform English content into engaging Hindi videos that resonate with the Indian audience
        </p>
      </motion.div>

      <div className="space-y-16">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <VideoComparison
              originalVideoId={video.originalId}
              translatedVideoId={video.translatedId}
              className="bg-[#151520] border border-[#2A2A35]"
            />
          </motion.div>
        ))}

        <div className='flex gap-4 overflow-x-auto pb-4'>
          {hindiVideos.map((videoId, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <YoutubeVideo key={index} videoId={videoId} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;