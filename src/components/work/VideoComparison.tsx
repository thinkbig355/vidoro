"use client"

import React from "react"
import { motion } from "framer-motion"

const VideoComparison = ({ originalVideoId, translatedVideoId, className = "", inView }) => {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-2">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-2 rounded-t-lg font-semibold"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          Original
        </motion.div>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${originalVideoId}`}
            title="Original Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-b-lg"
          />
        </div>
      </div>
      <div className="space-y-2">
        <motion.div
          className="bg-gradient-to-r from-red-600 to-red-400 text-white text-center py-2 rounded-t-lg font-semibold"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          Translated
        </motion.div>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${translatedVideoId}`}
            title="Translated Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-b-lg"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default VideoComparison