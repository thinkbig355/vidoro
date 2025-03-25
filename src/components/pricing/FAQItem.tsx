import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: { content: React.ReactNode; hasDot: boolean }[];
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="group cursor-pointer"
    >
      <motion.div 
        layout 
        className="p-4 rounded-xl bg-gradient-to-r hover:from-red-500/5 hover:to-blue-500/5 transition-colors duration-300"
      >
        <div className="flex justify-between items-center">
          <motion.h3 
            layout 
            className="text-lg font-medium text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-blue-400 transition-colors duration-300"
          >
            {question}
          </motion.h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-5 h-5"
          >
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-3"
            >
              {answer.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-400"
                >
                  {item.hasDot && (
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-blue-400 mt-2" />
                  )}
                  <div className="text-sm leading-relaxed">{item.content}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default FAQItem;