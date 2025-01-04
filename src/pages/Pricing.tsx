import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [duration, setDuration] = useState(5);
  const [humanVoice, setHumanVoice] = useState(false);
  const [thumbnail, setThumbnail] = useState(false);

  const basePrice = duration * 6;
  const humanVoicePrice = humanVoice ? duration * 2 : 0;
  const thumbnailPrice = thumbnail ? 5 : 0;
  const totalPrice = basePrice + humanVoicePrice + thumbnailPrice;

  return (
    <div className="min-h-screen pt-16 pb-10 md:pt-20 md:pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg md:text-xl text-muted-foreground">Choose your plan and customize it to your needs</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-4 md:p-6"
        >
           <div className="text-center mb-4 md:mb-6">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="text-4xl md:text-5xl font-bold text-green-500 mb-1 md:mb-2"
            >
              ${totalPrice}
              <span className="text-lg md:text-xl text-muted-foreground"> per video</span>
            </motion.div>
            <p className="text-sm text-muted-foreground">(Unlimited revisions included)</p>
          </div>

           <div className="space-y-4 md:space-y-6">
            <div className="bg-secondary/50 rounded-lg p-2 md:p-4 mb-4 md:mb-6">
              <h3 className="font-bold text-lg mb-2 md:mb-3">Base Features</h3>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                <li className="flex items-center gap-1 md:gap-2">
                  <span className="text-green-500">✓</span>
                  Translation & Sync With Video
                </li>
                   <li className="flex items-center gap-1 md:gap-2">
                  <span className="text-green-500">✓</span>
                  Best AI Voice
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <span className="text-green-500">✓</span>
                   Fine-tuned for Indian audience
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <span className="text-green-500">✓</span>
                  Upload on YouTube with SEO
                </li>
              </ul>
            </div>


            <div>
              <label className="block text-sm font-medium mb-1 md:mb-2">
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

            <div className="space-y-2 md:space-y-4">
              <h3 className="font-bold text-lg">Additional Services</h3>

              <div className="flex items-center justify-between p-2 md:p-3 rounded-lg bg-secondary">
                <div>
                  <h4 className="font-medium text-sm md:text-base">Human Voice Over</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Upgrade from AI to human voice</p>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-xs md:text-sm text-muted-foreground">(+$2/min)</span>
                  <Switch
                    checked={humanVoice}
                    onCheckedChange={setHumanVoice}
                  />
                </div>
              </div>


              <div className="flex items-center justify-between p-2 md:p-3 rounded-lg bg-secondary">
                <div>
                  <h4 className="font-medium text-sm md:text-base">Custom Thumbnail</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Tailored for Indian audience</p>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-xs md:text-sm text-muted-foreground">(+$5)</span>
                  <Switch
                    checked={thumbnail}
                    onCheckedChange={setThumbnail}
                  />
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