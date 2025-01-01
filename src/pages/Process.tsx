import React from 'react';
import ProcessStep from '@/components/process/ProcessStep';
import { motion } from 'framer-motion';
import { Upload, Languages, Video, MessageSquare, Check } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Content",
      description: "Simply share your YouTube video link or upload your content directly to our platform.",
      duration: "Takes 5 minutes"
    },
    {
      icon: Languages,
      title: "Professional Translation",
      description: "Our expert translators adapt your content for the Indian audience, maintaining your message and style.",
      duration: "24-48 hours"
    },
    {
      icon: Video,
      title: "Voice Recording",
      description: "Native Hindi voice artists record your content with perfect pronunciation and natural flow.",
      duration: "24-48 hours"
    },
    {
      icon: MessageSquare,
      title: "Review & Feedback",
      description: "Review the translated content and provide feedback for any adjustments needed.",
      duration: "24 hours"
    },
    {
      icon: Check,
      title: "Final Delivery",
      description: "Receive your professionally translated video ready for your Indian audience.",
      duration: "Within 72 hours total"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
        >
          Our Process
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-blue-100 text-center mb-16 max-w-3xl mx-auto"
        >
          A streamlined journey from English to Hindi, designed for efficiency and quality
        </motion.p>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              duration={step.duration}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;