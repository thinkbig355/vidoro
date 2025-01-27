import React, { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [duration, setDuration] = useState(5);
  const [humanVoice, setHumanVoice] = useState(false);
  const [thumbnail, setThumbnail] = useState(false);

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
    <div className="min-h-screen bg-[#0A0A0F] pt-16 pb-10 md:pt-20 md:pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Get the Perfect Video for You
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-[#151520] rounded-2xl shadow-2xl p-6 md:p-8 border border-[#2A2A35]"
        >
          <div className="text-center mb-6 md:mb-8 relative">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="text-4xl md:text-5xl font-bold text-green-400 mb-2 relative z-10"
            >
              ${totalPrice.toFixed(2)}
              <span className="text-lg md:text-xl text-gray-400"> per video</span>
            </motion.div>

            {discount > 0 && (
              <div className="text-sm flex items-center justify-center gap-3">
                <span className="text-gray-500 line-through">
                  ${originalPrice}
                </span>
                <span className="text-emerald-400 font-semibold">
                  You save ${amountSaved}!
                </span>
              </div>
            )}
          </div>

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#1C1C28] rounded-xl p-4 md:p-6"
            >
              <h3 className="font-bold text-lg mb-4 text-gray-200">
                Included Features
              </h3>
              <ul className="space-y-3">
                {[
                  "Professional Video Translation",
                  "Best-Quality AI Voice-Over",
                  "Expert Editing & Indian Market Adaptation",
                  "Strategic YouTube Optimization & Upload",
                  "Unlimited Revisions"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-indigo-400 text-lg">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-gray-200">
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

                {duration > 5 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <span className="text-emerald-400 text-sm font-semibold">
                      {formattedDiscount}% Off
                    </span>
                  </motion.div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-gray-200">
                  Additional Services
                </h3>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#1C1C28]"
                >
                  <div>
                    <h4 className="font-medium text-gray-200">
                      Human Voice Over
                    </h4>
                    <p className="text-sm text-gray-400">
                      Upgrade from AI to human voice
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">(+$2/min)</span>
                    <Switch
                      checked={humanVoice}
                      onCheckedChange={setHumanVoice}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#1C1C28]"
                >
                  <div>
                    <h4 className="font-medium text-gray-200">
                      Custom Thumbnail
                    </h4>
                    <p className="text-sm text-gray-400">
                      Tailored for Indian audience
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">(+$15)</span>
                    <Switch 
                      checked={thumbnail} 
                      onCheckedChange={setThumbnail} 
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;