"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

const VideoComparison = ({ originalVideoId, translatedVideoId, className = "", inView }) => {
  const [originalLoading, setOriginalLoading] = useState(true)
  const [translatedLoading, setTranslatedLoading] = useState(true)

  const skeletonLoader = (
    <div className="absolute inset-0 bg-gray-800 animate-pulse">
      <div className="h-full w-full flex items-center justify-center">
        <div className="space-y-4 w-3/4">
          {/* YouTube-like loading animation */}
          <div className="h-3 bg-gray-700 rounded-full w-1/2"></div>
          <div className="h-3 bg-gray-700 rounded-full w-3/4"></div>
          <div className="h-3 bg-gray-700 rounded-full w-2/3"></div>
          <div className="absolute bottom-4 left-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-700 rounded-full w-24"></div>
              <div className="h-2 bg-gray-700 rounded-full w-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-2 relative">
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
        <div className="aspect-video relative">
          <iframe
            src={`https://www.youtube.com/embed/${originalVideoId}`}
            title="Original Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setOriginalLoading(false)}
            className="w-full h-full rounded-b-lg"
          />
          {originalLoading && skeletonLoader}
        </div>
      </div>
      <div className="space-y-2 relative">
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
        <div className="aspect-video relative">
          <iframe
            src={`https://www.youtube.com/embed/${translatedVideoId}`}
            title="Translated Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setTranslatedLoading(false)}
            className="w-full h-full rounded-b-lg"
          />
          {translatedLoading && skeletonLoader}
        </div>
      </div>
    </motion.div>
  )
}

export default VideoComparison