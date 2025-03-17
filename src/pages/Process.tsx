"use client"

import { useCallback } from "react"
import { motion } from "framer-motion"
import { Upload, Languages, Palette, UploadIcon } from "lucide-react"
import FAQ from "@/components/process/FAQ"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"

interface FormData {
  name: string;
  email: string;
  channelLink: string;
  message: string;
}

const Process = () => {
  const steps = [
    {
      icon: Upload,
      title: "Send Your Video File",
      description: "Simply share your video file through Cloud",
    },
    {
      icon: Languages,
      title: "Translate and Voice Over",
      description: "We will do Accurate translation and HQ voice over",
    },
    {
      icon: Palette,
      title: "Adaptation",
      description: "Video Adaptation to resonate with the Indian audience through Editing",
    },
    {
      icon: UploadIcon,
      title: "Optimized Upload for Reach",
      description: "We optimize and upload your video for maximum reach",
    },
  ]

  const taglineText = "You get more reach, revenue, and sponsors without lifting your finger!"

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
      
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400"
            >
              Quick & Easy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-center max-w-2xl mb-8"
            >
              Smart steps to boost your reach.
            </motion.p>
          </div>

          {/* Horizontal Scrollable Steps - Simple solution that works */}
          <div className="relative pb-8 -mx-4 px-4 overflow-x-auto no-scrollbar">
            <div className="flex gap-6 min-w-max">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group relative flex-none w-[300px] transform-gpu"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <div className="relative p-8 h-full bg-[#12121A] rounded-2xl border border-gray-800/50 backdrop-blur-xl transition-all duration-500 group-hover:border-gray-700/50 group-hover:translate-y-[-2px] will-change-transform">
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/10 to-blue-500/10 flex items-center justify-center border border-gray-800">
                        <step.icon className="w-7 h-7 text-red-400 group-hover:text-blue-400 transition-colors duration-500" />
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-blue-400 transition-all duration-500">
                      {step.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-xl" />
              <h2 className="relative px-8 py-4 text-lg md:text-xl font-medium rounded-2xl bg-[#12121A] border border-gray-800/50 backdrop-blur-xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400">
                  {taglineText}
                </span>
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mt-20">
        <FAQ />
      </div>
    </div>
  )
}

export default Process