// You can remove this file if it's not used elsewhere
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex items-center space-x-6"
    >
      <div className="flex-shrink-0">
        <Icon className="w-10 h-10 text-indigo-400" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-200 mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <p className="text-sm text-gray-500 mt-1">{duration}</p>
      </div>
      {index < 4 && (
        <div className="flex-shrink-0 self-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </motion.div>
  );
};

export default ProcessStep;