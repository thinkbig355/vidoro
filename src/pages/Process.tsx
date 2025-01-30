"use client"

import { motion } from "framer-motion"
import { Upload, Languages, Palette, UploadIcon } from "lucide-react"
import FAQ from "@/components/process/FAQ"

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

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              How It Works
            </span>
          </h1>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#151520] rounded-2xl shadow-2xl border border-[#2A2A35] h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-200">{step.title}</h2>
                </div>
                <p className="text-gray-400 mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Scroll */}
          <div className="md:hidden flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex-none w-[280px] p-6 bg-[#151520] rounded-2xl shadow-2xl border border-[#2A2A35] snap-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-200">{step.title}</h2>
                </div>
                <p className="text-gray-400 mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <FAQ />
      </div>
    </div>
  )
}

export default Process