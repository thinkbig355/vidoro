"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Upload, Languages, Palette, UploadIcon } from "lucide-react"

interface ProcessStepProps {
  icon: LucideIcon
  title: string
  description: string
  duration: string
  index: number
  isLast?: boolean
}

const ProcessStep = ({ icon: Icon, title, description, duration, index, isLast }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={cn(
        "flex md:flex-col items-start gap-6 md:gap-4 min-w-[280px] md:w-[280px]",
        "p-6 rounded-xl bg-zinc-900/50 backdrop-blur-sm relative"
      )}
    >
      <div className="flex-shrink-0 p-3 rounded-xl bg-violet-500/10">
        <Icon className="w-8 h-8 text-violet-400" />
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-xl font-bold text-gray-200 mb-2">{title}</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-2">{description}</p>
        <p className="text-sm text-gray-500">{duration}</p>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </motion.div>
  )
}

const steps = [
  {
    icon: Upload,
    title: "Upload Your Video",
    description: "Easily send us your video file through our secure file transfer.",
    duration: "Secure & Fast",
  },
  {
    icon: Languages,
    title: "Translate & Narrate",
    description: "Our experts convert your content into captivating Hindi narration.",
    duration: "Expertly Handled",
  },
  {
    icon: Palette,
    title: "Tailored Editing",
    description: "We refine your video to engage your target audience effortlessly.",
    duration: "Refined to Perfection",
  },
  {
    icon: UploadIcon,
    title: "Upload & Amplify",
    description: "We manage the complete YouTube upload, so you enjoy effortless growth.",
    duration: "Watch It Go Live!",
  },
]

export default function ProcessSteps() {
  return (
    <div className="w-full py-12 px-4 bg-gradient-to-br from-gray-900 to-black">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">
        Process
      </h1>
      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-x-auto pb-8 md:pb-0 -mx-4 px-4 scrollbar-hide">
          <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 w-max md:w-full">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}