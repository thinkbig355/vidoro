import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string[];
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      layout
      className="border border-[#2A2A35] rounded-lg p-4 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <motion.h3 layout className="text-lg font-medium text-gray-200">
          {question}
        </motion.h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-indigo-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-2"
          >
            {answer.map((line, index) => (
              <div key={index} className="flex items-start text-gray-400">
                <div className="mr-2 mt-1"> {/* Adjust margin as needed */}
                  {/* You can replace this with any icon you prefer */}
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5" fill="#2A2A35" />
                    <circle cx="6" cy="6" r="3" fill="currentColor" />
                  </svg>
                </div>
                <p className="flex-1">{line}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;