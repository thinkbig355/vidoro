"use client"

import { Check, X } from "lucide-react"
import { useState, useCallback } from "react"
import { Slider } from "@/components/ui/slider"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"
import { motion } from "framer-motion";
import PricingFAQ from "@/components/pricing/FAQ"; // Import the FAQ component

export default function PricingPage() {
  const [minutes, setMinutes] = useState(8)
  const basePrice = 3.5
  const singleVideoPrice = (minutes * basePrice).toFixed(2)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container)
  }, [])

  return (
    <div className="bg-[#0A0A0F] text-white p-4 min-h-screen">
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
      <div className="flex flex-col items-center justify-start">
        {/* Title with increased margin-top */}
        {/* Added margin-top to push the title down */}
        <h1 className="text-center text-3xl md:text-5xl font-bold mt-24 mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400">
            Transparent Pricing
          </span>
        </h1>
        {/* Gap between title and pricing sections */}
        <div className="mb-16"></div>
        <div className="max-w-5xl w-full flex flex-col gap-6 relative">
          <div className="md:flex-row flex flex-col gap-4">
            {/* 1 Video Sample */}
            <div className="bg-[#2a2a2a] rounded-xl p-6 flex-1 overflow-hidden">
              <h2 className="text-xl font-medium mb-2">1 Video Sample</h2>
              <div className="mb-6">
                <div className="text-5xl font-bold">${singleVideoPrice}</div>
                <div className="text-sm">one-time fee</div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start py-3 border-t border-[#3a3a3a]">
                  <div className="font-medium">Number of Minutes</div>
                  <div className="text-right">
                    <div className="mb-1">{minutes} Minutes</div>
                    <div className="w-32 relative">
                      <Slider
                        defaultValue={[8]}
                        min={1}
                        max={30}
                        step={1}
                        value={[minutes]}
                        onValueChange={(value) => setMinutes(value[0])}
                        className="w-full"
                        style={{
                          background: `linear-gradient(to right, #FF416C 0%, #FF416C ${((minutes - 1) / 29) * 100}%, rgb(55, 65, 81) ${((minutes - 1) / 29) * 100}%, rgb(55, 65, 81) 100%)`,
                          WebkitAppearance: "none",
                          position: "relative",
                        }}
                      />
                      <div className="flex justify-between text-xs mt-1">
                        <span>1</span>
                        <span>30</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                  <div className="font-medium">Automatic Upload On YT</div>
                  <div>
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                </div>

                <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                  <div className="font-medium">HQ Voice-Overs</div>
                  <div>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </div>

                <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                  <div className="font-medium">Indian Viewers Adaptation</div>
                  <div>
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pro and Plus Pack Container */}
            <div className="flex-[2] flex flex-col md:flex-row gap-4 relative">
              {/* Pro Pack */}
              <div className="relative flex-1">
                <div className="absolute top-0 left-0 right-0 -translate-y-full bg-[#5997e2] text-white py-1 text-center font-medium rounded-t-xl z-10">
                  Most Popular
                </div>
                <div className="bg-[#2a2a2a] rounded-b-xl p-6 border border-[#5997e2] h-full">
                  <h2 className="text-xl font-medium mb-2">Pro pack</h2>
                  <div className="mb-6">
                    <div className="text-5xl font-bold">$378</div>
                    <div className="text-sm flex items-center">
                      <span className="line-through text-gray-400 mr-2">$630</span>
                      <motion.span
                        className="bg-red-500 text-white text-xs px-1 rounded-xl"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      >
                        -40%
                      </motion.span>
                      <span className="ml-1">one-time fee</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                      <div className="font-medium">Number of Minutes</div>
                      <div>180 Minutes</div>
                    </div>

                    <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                      <div className="font-medium">Automatic Upload On YT</div>
                      <div>
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                    </div>

                    <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                      <div className="font-medium">HQ Voice-Overs</div>
                      <div>
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                    </div>

                    <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                      <div className="font-medium">Indian Viewers Adaptation</div>
                      <div>
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plus Pack */}
              <div className="bg-[#2a2a2a] rounded-xl p-6 flex-1 md:border-l-0 md:rounded-l-none">
                <h2 className="text-xl font-medium mb-2">Plus pack</h2>
                <div className="mb-6">
                  <div className="text-5xl font-bold">$147</div>
                  <div className="text-sm flex items-center">
                    <span className="line-through text-gray-400 mr-2">$210</span>
                    <motion.span
                      className="bg-red-500 text-white text-xs px-1 rounded-xl"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      -30%
                    </motion.span>
                    <span className="ml-1">one-time fee</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                    <div className="font-medium">Number of Minutes</div>
                    <div>60 Minutes</div>
                  </div>

                  <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                    <div className="font-medium">Automatic Upload On YT</div>
                    <div>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  </div>

                  <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                    <div className="font-medium">HQ Voice-Overs</div>
                    <div>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  </div>

                  <div className="flex justify-between py-3 border-t border-[#3a3a3a]">
                    <div className="font-medium">Indian Viewers Adaptation</div>
                    <div>
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section Below Pricing */}
          <div className="mt-20">
            <PricingFAQ />
          </div>
        </div>
      </div>
    </div>
  )
}