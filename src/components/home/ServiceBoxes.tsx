import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ServiceBoxes = () => {
  const services = [
    { title: "Expert Translators", desc: "Native Hindi speakers with a deep understanding of both cultures" },
    { title: "Fast Turnaround", desc: "Get your translated videos within 12-72 hours" },
    { title: "Cultural Adaptation", desc: "Content localized for Indian audience preferences" },
    { title: "Growth Focused", desc: "Strategic translation to maximize engagement" }
  ];

  return (
    <section className="py-20 px-4 bg-black text-white"> {/* Changed background to black */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 10,
              delay: index * 0.1 
            }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceBoxes;
