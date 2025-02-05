import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: "Submit Your Content", description: "Quick and easy submission process to get started.", icon: "📝" },
  { title: "Expert Translation", description: "Our native experts ensure cultural nuance and quality.", icon: "🔍" },
  { title: "Reach a Global Audience", description: "Localized content that captivates viewers worldwide.", icon: "🌎" }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-900 text-white px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          How It Works
        </h2>
        <p className="text-lg text-gray-300">
          Our streamlined process transforms your content into engaging localized masterpieces.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            className="p-6 bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-6xl mb-4">{step.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 