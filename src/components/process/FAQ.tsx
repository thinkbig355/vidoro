import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQItem from './FAQItem';

const faqItems = [
  {
    question: "Why to create a separate channel for hindi only?",
    answer: [
      "• Attract new sponsors and monetization opportunities in a new market, without additional effort.",
      "• A dedicated channel optimized for the Indian audience ensures a more engaged and loyal viewership."
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
    <div className="mt-24">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <FAQItem 
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}