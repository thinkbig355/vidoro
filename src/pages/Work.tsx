"use client"
import React, { useCallback } from "react"
import VideoComparison from "@/components/work/VideoComparison"
import { motion } from "framer-motion"
import YoutubeVideo from "@/components/work/YoutubeVideo"
import { useInView } from "react-intersection-observer"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"

interface Video {
  originalId: string;
  translatedId: string;
}

interface HindiVideo {
  id: string;
  title: string;
}

interface VideoComparisonSectionProps {
  video: Video;
  index: number;
}

interface HindiVideoShowcaseProps {
  videos: HindiVideo[];
}

const Work = () => {
  const videos = [
    {
      originalId: "GJbUI2D3rLY",
      translatedId: "rovMJ49Ij_k",
    },
    {
      originalId: "kVpJ6BwG8zg",
      translatedId: "qKJBlTLcBKY",
    },
  ]
  const hindiVideos = [
    { id: "CVCbAoiNX6A", title: "Hindi Video 1" },
    { id: "dsuMPWZvX2Q", title: "Hindi Video 2" },
    { id: "NhWQE9hbT_o", title: "Hindi Video 3" },
    { id: "rq8UyDFUR7M", title: "Hindi Video 4" },
    { id: "mlAGyhBFZlU", title: "Hindi Video 5" },
    { id: "TcBvkdHn9aU", title: "Hindi Video 6" },
  ]
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container)
  }, [])
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#ff0000", "#0000ff"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400">
              Some of Our Work
            </span>
          </h1>
        </motion.div>
        <div className="space-y-24">
          {videos.map((video, index) => (
            <VideoComparisonSection key={index} video={video} index={index} />
          ))}
          <HindiVideoShowcase videos={hindiVideos} />
        </div>
      </div>
    </div>
  )
}
const VideoComparisonSection = ({ video, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: true,
  })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-6 max-w-5xl mx-auto"
    >
      <VideoComparison
        originalVideoId={video.originalId}
        translatedVideoId={video.translatedId}
        className="bg-gray-900 border border-gray-800 rounded-lg shadow-2xl"
        inView={inView}
      />
    </motion.div>
  )
}
const HindiVideoShowcase = ({ videos }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: true,
  })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          More Hindi Videos
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1, scale: 1 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="aspect-video"
          >
            <YoutubeVideo videoId={video.id} title={video.title} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
export default Work