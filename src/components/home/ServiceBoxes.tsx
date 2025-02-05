import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

const ServiceBoxes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    { title: "Expert Translators", desc: "Native Hindi speakers with deep cultural insight" },
    { title: "Fast Turnaround", desc: "Get your translated videos within 12-72 hours" },
    { title: "Cultural Adaptation", desc: "Content localized for Indian audience preferences" },
    { title: "Growth Focused", desc: "Strategic translation to maximize engagement" }
  ];

  return (
    <section className="py-20 px-4 bg-black text-white" ref={ref}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <Card className="bg-white/10 backdrop-blur-md shadow-xl border border-gray-700 rounded-lg hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
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
