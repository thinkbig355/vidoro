"use client"

import React from "react"
import { motion } from "framer-motion"

const YoutubeVideo = ({ videoId, title }) => {
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
        className="absolute top-0 left-0 w-full h-full"
      />
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