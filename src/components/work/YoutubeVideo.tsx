"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

const YoutubeVideo = ({ videoId, title }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <motion.div
      className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        className="absolute top-0 left-0 w-full h-full"
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <svg
            className="animate-spin h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l-3 3H4z"
            ></path>
          </svg>
        </div>
      )}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </motion.div>
    </motion.div>
  )
}

export default YoutubeVideo