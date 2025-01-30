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
    answer: ["Usually 12-72 hours for translations and voice-overs."]
  },
  {
    question: "How will you upload the video on YouTube?",
    answer: ["We'll need uploader role access to your channel to upload the video."]
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
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-[#151520] rounded-2xl shadow-2xl p-8 border border-[#2A2A35]"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}