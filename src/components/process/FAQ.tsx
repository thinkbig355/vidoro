import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "Why should you create a separate channel?",
      answer: "• Attract new sponsors and monetization opportunities in a new market, without additional effort.\n• Access YouTube's largest user base to exponentially increase your reach and views.\n• A dedicated channel optimized for the Indian audience ensures a more engaged and loyal viewership."
    },
    {
      question: "How does cultural adaptation work?",
      answer: "We put extra effort to ensure your video feels natural to the Indian audience by adding cultural references, optimizing on-screen text, fine-tuning pacing, and making subtle visual adjustments to enhance engagement and appeal."
    },
    {
      question: "How will you upload the video on YouTube?",
      answer: "To upload your optimized video to YouTube, we'll need you to grant us channel permissions as an editor or manager on your channel. This will allow us to upload your video and apply our SEO settings"
    },
    {
      question: "Which editing software project files do you support?",
      answer: "We support project files from all major video editing software, including Premiere Pro, Final Cut Pro, DaVinci Resolve, and After Effect"
    },
    {
      question: "What is your turnaround time?",
      answer: "Typically, translations are completed within 24-72 hours."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border border-gray-100"
              >
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;