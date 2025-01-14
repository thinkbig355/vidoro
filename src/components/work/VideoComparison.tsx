import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';

interface VideoComparisonProps {
  originalVideoId: string;
  translatedVideoId: string;
}

const VideoComparison = ({ originalVideoId, translatedVideoId }: VideoComparisonProps) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-center font-medium text-gray-700 mb-2">Original</h4>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative aspect-video">
              <YouTube
                videoId={originalVideoId}
                opts={opts}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        <div>
          <h4 className="text-center font-medium text-gray-700 mb-2">Hindi Version</h4>
          <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
            <div className="relative aspect-video">
              <YouTube
                videoId={translatedVideoId}
                opts={opts}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoComparison;