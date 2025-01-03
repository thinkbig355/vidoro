import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';


interface FAQItemProps {
    question: string;
    answer: string[];
}


const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-gray-50 rounded-lg p-4 border border-gray-200 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      layout
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <motion.span
        animate={{ rotate: isOpen ? 180 : 0}}
        >
          {isOpen ? <ChevronUpIcon className="w-5 h-5 text-gray-700" /> : <ChevronDownIcon className="w-5 h-5 text-gray-700"/>}
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="mt-2 pl-4"
          >
            {answer.map((line, index) => (
              <motion.li
                key={index}
                className="text-gray-600 list-disc ml-4 mb-1"
              >
                {line}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;