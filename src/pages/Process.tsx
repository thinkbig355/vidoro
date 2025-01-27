import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Languages, Palette, Upload as UploadIcon } from 'lucide-react';
import FAQ from '@/components/process/FAQ';

const Process = () => {
  const steps = [
    {
      icon: Upload,
      title: "Send Your Video File",
      description: "Simply share your video editing software's project file through Cloud"
    },
    {
      icon: Languages,
      title: "Translate and Voice Over",
      description: "Professional translation and Hindi voice over"
    },
    {
      icon: Palette,
      title: "Cultural Adaptation",
      description: "Video optimization and cultural adaptation to resonate with the Indian audience"
    },
    {
      icon: UploadIcon,
      title: "Optimized Upload for Reach",
      description: "We upload and optimize your video for maximum reach"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0A0A0F] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Our Process
            </span>
          </h1>
          <div className="flex gap-6 overflow-x-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex-none w-64 p-6 bg-[#151520] rounded-2xl shadow-2xl border border-[#2A2A35]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-200">{step.title}</h2>
                </div>
                <p className="text-gray-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <hr className="w-full border-dashed border-[#2A2A35] my-6" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <FAQ />
      </div>
    </div>
  );
};

export default Process;