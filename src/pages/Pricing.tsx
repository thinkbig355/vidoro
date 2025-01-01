import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const [duration, setDuration] = useState(5);
  const [humanVoice, setHumanVoice] = useState(false);
  const [culturalCustomization, setCulturalCustomization] = useState(false);
  const [thumbnail, setThumbnail] = useState(false);

  const basePrice = duration * 5;
  const humanVoicePrice = humanVoice ? duration : 0;
  const culturalPrice = culturalCustomization ? duration * 2 : 0;
  const thumbnailPrice = thumbnail ? 5 : 0;
  const totalPrice = basePrice + humanVoicePrice + culturalPrice + thumbnailPrice;

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">Choose your plan and customize it to your needs</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="text-5xl font-bold text-green-500 mb-2"
            >
              ${totalPrice}
              <span className="text-xl text-muted-foreground"> per video</span>
            </motion.div>
            <p className="text-sm text-muted-foreground">(Unlimited revisions included)</p>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-2">
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

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Customize Your Plan</h3>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                <div>
                  <h4 className="font-medium">Human Voice Over</h4>
                  <p className="text-sm text-muted-foreground">Upgrade from AI to human voice</p>
                </div>
                <Switch
                  checked={humanVoice}
                  onCheckedChange={setHumanVoice}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Cultural Customization</h4>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <ul className="text-sm space-y-1">
                          <li>• Localized on-screen text</li>
                          <li>• Indian cultural references</li>
                          <li>• Fine-tuned for Indian viewing</li>
                          <li>• Style adjustments</li>
                        </ul>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Switch
                  checked={culturalCustomization}
                  onCheckedChange={setCulturalCustomization}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                <div>
                  <h4 className="font-medium">Custom Thumbnail</h4>
                  <p className="text-sm text-muted-foreground">Professional thumbnail design</p>
                </div>
                <Switch
                  checked={thumbnail}
                  onCheckedChange={setThumbnail}
                />
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 bg-primary text-primary-foreground py-4 rounded-lg font-medium"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;