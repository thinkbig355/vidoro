import React, { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [duration, setDuration] = useState(5);
  const [humanVoice, setHumanVoice] = useState(false);
  const [thumbnail, setThumbnail] = useState(false);

  // Discount Calculation
  const calculateDiscount = (duration) => {
    if (duration <= 5) return 0;
    if (duration >= 30) return 0.2;
    if (duration > 5 && duration < 30) return duration * 0.00667;
    return 0.2;
  };

  const discount = calculateDiscount(duration);
  const basePricePerMinute = 5;
  const discountedBasePricePerMinute = basePricePerMinute * (1 - discount);
  const basePrice = duration * discountedBasePricePerMinute;
  const humanVoicePrice = humanVoice ? duration * 2 : 0;
  const thumbnailPrice = thumbnail ? 15 : 0;
  const totalPrice = basePrice + humanVoicePrice + thumbnailPrice;

  const formattedDiscount = (discount * 100).toFixed(2);
  const amountSaved = (duration * basePricePerMinute - basePrice).toFixed(2);
  const originalPrice = (
    duration * basePricePerMinute +
    humanVoicePrice +
    thumbnailPrice
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-16 pb-10 md:pt-20 md:pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white">
            Get the Perfect Video for You
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-4 md:p-6"
        >
          <div className="text-center mb-4 md:mb-6 relative">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="text-4xl md:text-5xl font-bold text-green-500 mb-1 md:mb-2 relative z-10"
            >
              ${totalPrice.toFixed(2)}
              <span className="text-lg md:text-xl text-gray-400">
                {" "}
                per video
              </span>
            </motion.div>
            {/* Original Price and Savings Display */}
            {discount > 0 && (
              <div className="text-sm text-center flex items-center justify-center gap-3 relative z-10">
                <span className="text-gray-400 line-through">
                  ${originalPrice} {/* Original Price */}
                </span>
                <span className="text-red-500 font-bold">
                  You save ${amountSaved}!
                </span>
              </div>
            )}
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-700/50 rounded-lg p-2 md:p-4 mb-4 md:mb-6">
              <h3 className="font-bold text-lg mb-2 md:mb-3 text-white">
                Included Features
              </h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li className="flex items-center gap-1 md:gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-gray-300">
                    Professional Video Translation
                  </span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-gray-300">
                    Best-Quality AI Voice-Over
                  </span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-gray-300">
                    Expert Editing & Indian Market Adaptation
                  </span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-gray-300">
                    Strategic YouTube Optimization & Upload
                  </span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-gray-300">Unlimited Revisions</span>
                </li>
              </ul>
            </div>

            {/* Slider Section */}
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1 md:mb-2 text-white">
                  Video Duration: {duration} minutes
                </label>
                <Slider
                  value={[duration]}
                  onValueChange={(value) => setDuration(value[0])}
                  max={60}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Discount Indicator */}
              {duration > 5 && (
                <div className="text-xs px-2 py-1 rounded-md text-red-500 border border-red-500">
                  <span className="font-bold">
                    {formattedDiscount}% Off
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-2 md:space-y-4">
              <h3 className="font-bold text-lg text-white">
                Additional Services
              </h3>

              <div className="flex items-center justify-between p-2 md:p-3 rounded-lg bg-gray-800">
                <div>
                  <h4 className="font-medium text-sm md:text-base text-gray-300">
                    Human Voice Over
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400">
                    Upgrade from AI to human voice
                  </p>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-xs md:text-sm text-gray-400">
                    (+$2/min)
                  </span>
                  <Switch
                    checked={humanVoice}
                    onCheckedChange={setHumanVoice}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-2 md:p-3 rounded-lg bg-gray-800">
                <div>
                  <h4 className="font-medium text-sm md:text-base text-gray-300">
                    Custom Thumbnail
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400">
                    Tailored for Indian audience
                  </p>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-xs md:text-sm text-gray-400">
                    (+$15)
                  </span>
                  <Switch checked={thumbnail} onCheckedChange={setThumbnail} />
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