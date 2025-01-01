import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  index: number;
}

const ProcessStep = ({ icon: Icon, title, description, duration, index }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-lg p-6 backdrop-blur-sm border border-blue-700/30"
      >
        <div className="flex items-start gap-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-blue-100 mb-2">{description}</p>
            <p className="text-sm text-blue-300">{duration}</p>
          </div>
        </div>
      </motion.div>
      {index < 4 && (
        <div className="absolute left-8 top-full h-12 w-px bg-gradient-to-b from-blue-600 to-transparent" />
      )}
    </motion.div>
  );
};

export default ProcessStep;