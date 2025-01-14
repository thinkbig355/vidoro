import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';

interface YoutubeVideoProps {
  videoId: string;
}

const YoutubeVideo = ({ videoId }: YoutubeVideoProps) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
             transition={{ type: "spring", stiffness: 300, damping: 15 }}
             className="w-[300px] min-w-[300px] shadow-lg rounded-lg overflow-hidden"
        >
            <div className="relative aspect-video">
                 <YouTube
                    videoId={videoId}
                    opts={opts}
                    className="absolute top-0 left-0 w-full h-full"
                />
           </div>
      </motion.div>
  );
};

export default YoutubeVideo;