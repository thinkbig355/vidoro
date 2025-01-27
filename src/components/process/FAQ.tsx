import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const faqItems = [
  {
    question: "Why to create a separate channel?",
    answer: [
      "A dedicated channel optimized for the Indian audience ensures a more engaged and loyal viewership.",
      "Attract new sponsors and monetization opportunities in a new market, without additional effort."
    ]
  },
  {
    question: "How does cultural adaptation work?",
    answer: ["We put extra effort to ensure your video feels natural to the Indian audience by adding cultural references, optimizing on-screen text, fine-tuning pacing, and making subtle visual adjustments to enhance engagement and appeal."]
  },
  {
    question: "Which editing software project files do you support?",
    answer: ["We support project files from all major video editing software, including Final Cut Pro, After Effect, Premiere Pro, and DaVinci Resolve."]
  },
  {
    question: "How will you upload the video on YouTube?",
    answer: ["To upload your optimized video to YouTube, we'll need you to grant us channel permissions as an editor or manager on your channel. This will allow us to upload your video and apply our SEO settings"]
  },
  {
    question: "What is your turnaround time?",
    answer: ["Typically, translations are completed within 24-72 hours."]
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