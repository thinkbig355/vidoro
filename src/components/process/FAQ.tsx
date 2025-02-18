
import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const faqItems = [
  {
    question: "How do I send you my video files?",
    answer: [
      "Send us your editing project file if possible. This lets us fine-tune everything for the best results.",
      "If not, a single exported video file (like .mp4, .mov) works too."
    ]
  },
  {
    question: "What is your turnaround time?",
    answer: ["12-72 hours"]
  },
  {
    question: "How will you upload the video on YouTube?",
    answer: ["We'll need uploader role access to your new channel to upload the video."]
  },
  {
    question: "Why create a separate channel for India?",
    answer: ["It allows for tailored content, leading to more reach, revenue, and sponsors."]
  },
  {
    question: "Which editing software do you support?",
    answer: ["All major ones: Final Cut Pro, After Effects, Premiere Pro, and DaVinci Resolve."]
  },
  {
    question: "How does adaptation work?",
    answer: ["We add, optimize on-screen text, and tweak visuals to resonate with Indian viewers."]
  }
];

export default function FAQ() {
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