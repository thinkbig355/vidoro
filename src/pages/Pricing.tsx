import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  const [selectedPack, setSelectedPack] = useState<number | string>(1);
  const [duration, setDuration] = useState(5);
  const [thumbnail, setThumbnail] = useState(false);

  const packs = [
    { quantity: 1, discount: 0 },
    { quantity: 5, discount: 0.15 },
    { quantity: "15+ Videos", discount: 0.3 },
  ];

  const getDurationDiscount = (minutes: number) => {
    if (minutes <= 5) return 0;
    if (minutes >= 30) return 0.2;
    return ((minutes - 5) / 25) * 0.2;
  };

  const basePricePerMinute = 5;
  const selectedPackInfo =
    packs.find((p) => p.quantity === selectedPack) || packs[0];
  const durationDiscount = getDurationDiscount(duration);
  const packDiscount = selectedPackInfo.discount;
  const totalDiscount = durationDiscount + packDiscount;

  // Calculate base price for the duration
  const basePriceForDuration = duration * basePricePerMinute;
  // Apply total discount
  const discountedPrice = basePriceForDuration * (1 - totalDiscount);
  // Add additional services
  const thumbnailPrice = thumbnail ? 15 : 0;
  const finalPricePerVideo = discountedPrice + thumbnailPrice;

  // for showing original price on discount
  const originalPrice = basePriceForDuration + thumbnailPrice;

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white pt-16 pb-10 md:pt-20 md:pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
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
          {/* Base Price Display */}
          <div className="text-center py-6 bg-gradient-to-br from-[#2B1F4B] via-[#241B3B] to-[#1F1B2E]">
            <motion.div
              key={finalPricePerVideo}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative inline-block"
            >
              {totalDiscount > 0 && (
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-lg text-gray-400 line-through">
                  ${originalPrice.toFixed(0)}
                </div>
              )}
              <div className="text-5xl font-bold text-white mb-2">
                ${finalPricePerVideo.toFixed(0)}
              </div>
            </motion.div>
            <div className="text-gray-400">per video</div>
            {totalDiscount > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-sm mt-2"
              >
                Total Discount: {Math.round(totalDiscount * 100)}%
              </motion.div>
            )}
          </div>

          <div className="p-6 space-y-6">
            {/* Included Features - 2x2 Grid */}
            <div className="bg-[#242433] rounded-xl p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {/* Left Column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs font-medium">
                      Accurate Translation
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs font-medium">
                      Pro Editing & Adaptation
                    </span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs font-medium">
                      HQ Voice-Overs
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs font-medium">
                      We Handle YouTube Upload
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pack Selection */}
            <div className="grid grid-cols-3 gap-0.5 bg-gray-800/20 p-1 rounded-xl">
              {packs.map((pack) => (
                <motion.button
                  key={pack.quantity}
                  onClick={() => setSelectedPack(pack.quantity)}
                  className={`relative py-3 rounded-lg transition-all ${
                    selectedPack === pack.quantity
                      ? "bg-indigo-500 text-white"
                      : "hover:bg-gray-700/50 text-gray-400"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium">
                    {typeof pack.quantity === "string"
                      ? pack.quantity
                      : `${pack.quantity} ${
                          pack.quantity === 1 ? "Video" : "Videos"
                        }`}
                  </span>
                  {pack.discount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500/90 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                      +{Math.round(pack.discount * 100)}% OFF
                    </span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Duration Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-300">
                  Video Duration:{" "}
                  <span className="text-white">{duration} minutes</span>
                </label>
                {durationDiscount > 0 && (
                  <span className="text-green-400 text-sm">
                    +{Math.round(durationDiscount * 100)}% OFF
                  </span>
                )}
              </div>
              <input
                type="range"
                min="1"
                max="60"
                value={duration}
                onChange={(e) => setDuration(Number.parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                style={{
                  background: `linear-gradient(to right, #5046e5 ${
                    (duration / 60) * 100
                  }%, #3f3f46 ${(duration / 60) * 100}%)`,
                }}
              />

              <div className="flex justify-between text-xs text-gray-500">
                <span>1 min</span>
                <span>60 min</span>
              </div>
            </div>

            {/* Add-ons */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#242433] hover:bg-[#2A2A3A] transition-colors">
                <div>
                  <h4 className="font-medium text-sm">Custom Thumbnail</h4>
                  <p className="text-xs text-gray-400">
                    Optimized for your audience
                  </p>
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
                  <span className="text-sm text-gray-400 w-16">+$15</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;