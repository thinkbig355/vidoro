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
      question: "How does cultural adaptation work?",
      answer: "We put extra effort to ensure your video feels natural to the Indian audience by adding cultural references, optimizing on-screen text, fine-tuning pacing, and making subtle visual adjustments to enhance engagement and appeal."
    },
    {
      question: "How will you upload the video on youtube?",
      answer: "you have to give go to the youtube studio and give us a role where we can upload the videos on your channel, then we will add a proper description, tags, titles, thumbnail optimized for indian audience."
    },
    {
      question: "What editing software file you support?",
      answer: "We support every softwae like premier pro, final cut pro, davanci resolve, after effect, etc"
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
                <AccordionContent className="text-gray-600">
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