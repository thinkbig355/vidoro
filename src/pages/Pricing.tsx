// pricing.tsx
"use client"
import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"

const Pricing = () => {
  const [selectedPack, setSelectedPack] = useState<number | string>(5)
  const [duration, setDuration] = useState(8)
  const [thumbnail, setThumbnail] = useState(false)
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container)
  }, [])

  const packs = [
    { quantity: 1, discount: 0 },
    { quantity: 5, discount: 0.20 },
    { quantity: "10+ Videos", discount: 0.25 },
  ]

  const getDurationDiscount = (minutes: number) => {
    if (minutes <= 5) return 0
    if (minutes >= 30) return 0.2
    return ((minutes - 5) / 25) * 0.2
  }

  const basePricePerMinute = 3.5; // Changed base price to 3.5
  const selectedPackInfo = packs.find((p) => p.quantity === selectedPack) || packs[0]
  const durationDiscount = getDurationDiscount(duration)
  const packDiscount = selectedPackInfo.discount
  const totalDiscount = durationDiscount + packDiscount
  const basePriceForDuration = duration * basePricePerMinute
  const discountedPrice = basePriceForDuration * (1 - totalDiscount)
  const thumbnailPrice = thumbnail ? 10 : 0
  const finalPricePerVideo = discountedPrice + thumbnailPrice
  const originalPrice = basePriceForDuration + thumbnailPrice

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

      <div className="relative container mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400">
              Transparent Price Calculator
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-[#1C1C28] rounded-2xl shadow-xl border border-gray-800 overflow-hidden"
        >
          <div className="text-center py-6 bg-gradient-to-br from-[#2B1F4B] via-[#241B3B] to-[#1F1B2E]">
            <motion.div
              key={finalPricePerVideo}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative inline-block"
            >
              {(packDiscount > 0) && (
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-lg text-gray-400 line-through">
                  ${originalPrice.toFixed(1)}
                </div>
              )}
              <div className="text-5xl font-bold text-white mb-2">
                ${finalPricePerVideo.toFixed(1)}
              </div>
            </motion.div>
            <div className="text-gray-400">per video</div>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-[#242433] rounded-xl p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs font-medium">Accurate Translation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs font-medium">Pro Adaptation</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs font-medium">HQ Voice-Overs</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs font-medium">We'll Upload On YT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-0.5 bg-gray-800/20 p-1 rounded-xl">
              {packs.map((pack) => (
                <motion.button
                  key={pack.quantity}
                  onClick={() => setSelectedPack(pack.quantity)}
                  className={`relative py-3 rounded-lg transition-all ${
                    selectedPack === pack.quantity ? "bg-indigo-500 text-white" : "hover:bg-gray-700/50 text-gray-400"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium">
                    {typeof pack.quantity === "string"
                      ? `${pack.quantity} Pack`
                      : `${pack.quantity} ${pack.quantity === 1 ? "Video Simple" : "Videos Pack"}`} {/* Changed Line */}
                  </span>
                  {pack.discount > 0 && (
                    <span
                      className={`absolute -top-2 -right-2 bg-red-500/90 text-white text-xs px-2 py-0.5 rounded-full ${
                        pack.quantity === 5 || pack.quantity === "10+ Videos" ? "animate-pulse" : ""
                      }`}
                    >
                      {Math.round(pack.discount * 100)}% OFF
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-300">
                  Video Duration: {duration} minutes
                </label>
              </div>
              <p className="text-center text-sm text-indigo-400 animate-pulse mb-2">
                Slide to adjust duration and see price change!
              </p>
              <div className="relative pt-3 pb-5">
                <div className="absolute inset-x-0 -top-6 -bottom-6" style={{ pointerEvents: 'none' }}></div>
                <input
                  type="range"
                  min="1"
                  max="60"
                  value={duration}
                  onChange={(e) => setDuration(Number.parseInt(e.target.value))}
                  className="w-full h-6 rounded-lg appearance-none cursor-pointer touch-manipulation"
                  style={{
                    background: `linear-gradient(to right, #FF416C 0%, #FF416C ${((duration - 1) / 59) * 100}%, rgb(55, 65, 81) ${((duration - 1) / 59) * 100}%, rgb(55, 65, 81) 100%)`,
                    WebkitAppearance: "none",
                    position: "relative", // Add this
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>1 min</span>
                <span>60 min</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#242433] hover:bg-[#2A2A3A] transition-colors">
                <div>
                  <h4 className="font-medium text-sm">Custom Thumbnail</h4>
                  <p className="text-xs text-gray-400">Optimized for indian viewers</p>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={thumbnail}
                      onChange={(e) => setThumbnail(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
                  </label>
                  <span className="text-sm text-gray-400 w-16">+$10</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing