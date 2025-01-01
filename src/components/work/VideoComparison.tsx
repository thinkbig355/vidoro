import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';

interface VideoComparisonProps {
  originalVideoId: string;
  translatedVideoId: string;
  title: string;
}

const VideoComparison = ({ originalVideoId, translatedVideoId, title }: VideoComparisonProps) => {
  const [isHoveringOriginal, setIsHoveringOriginal] = useState(false);
  const [isHoveringTranslated, setIsHoveringTranslated] = useState(false);

  const opts = {
    height: '300',
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
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onHoverStart={() => setIsHoveringOriginal(true)}
          onHoverEnd={() => setIsHoveringOriginal(false)}
          className="relative rounded-lg overflow-hidden"
        >
          <h4 className="absolute top-4 left-4 z-10 bg-black/50 px-3 py-1 rounded-full text-white">Original</h4>
          <YouTube 
            videoId={originalVideoId} 
            opts={opts} 
            onPlay={() => setIsHoveringOriginal(true)}
            onPause={() => setIsHoveringOriginal(false)}
            className="w-full aspect-video"
          />
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onHoverStart={() => setIsHoveringTranslated(true)}
          onHoverEnd={() => setIsHoveringTranslated(false)}
          className="relative rounded-lg overflow-hidden"
        >
          <h4 className="absolute top-4 left-4 z-10 bg-black/50 px-3 py-1 rounded-full text-white">Hindi Version</h4>
          <YouTube 
            videoId={translatedVideoId} 
            opts={opts}
            onPlay={() => setIsHoveringTranslated(true)}
            onPause={() => setIsHoveringTranslated(false)}
            className="w-full aspect-video"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoComparison;