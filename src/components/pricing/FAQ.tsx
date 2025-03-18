import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from '@/components/process/FAQItem';

const faqItems = [
  {
    question: "What is \"Indian Viewers Adaptation\"?",
    answer: [
      "Indian Viewers Adaptation means we make very minor and rare changes to the content if something isn’t relevant to an Indian audience, adjusting it slightly to fit their context. Most of the time, no changes are needed as the content is already broadly suitable."
    ]
  },
  {
    question: "What exactly are \"minutes\" in these packages, and how do they work?",
    answer: [
      "\"Minutes\" refer to the total duration of video content you can have translated and adapted. For example, if you buy a package with 60 minutes, you can process up to 60 minutes of video content. There’s no time limit like a month or a specific period to use these minutes—they stay available until you’ve used them all. You can also increase your minutes anytime by purchasing another package."
    ]
  },
  {
    question: "Are there any additional costs or hidden fees?",
    answer: [
      "No, there are no hidden fees. The price you see for each package is the full cost for the services included."
    ]
  },
  {
    question: "How long does it take to deliver the videos for each package?",
    answer: [
      "For all packages, including the 1 Video Sample, Plus Pack, and Pro Pack, delivery typically takes between 12 to 24 hours."
    ]
  },
  {
    question: "Can I purchase more minutes if I use up my allocated minutes?",
    answer: [
      "Yes, you can buy any package again to add more minutes to your account. Right now, we don’t have a system on the website to store or show your minutes, but we’re planning to add a feature later that will let you track your usage and see how many minutes you have left."
    ]
  }
];

export default function PricingFAQ() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 text-red-400 mb-6 inline-block"
          >
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-2xl blur-xl" />
          <motion.div 
            className="relative bg-[#12121A] rounded-2xl border border-gray-800/50 backdrop-blur-xl p-8"
          >
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}