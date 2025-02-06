import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';
import { IconType } from 'react-icons';
import { MdTranslate, MdTimer, MdLanguage, MdTrendingUp } from 'react-icons/md';

interface Service {
  title: string;
  desc: string;
  icon: IconType;
  gradient: string;
}

const ServiceBoxes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services: Service[] = [
    {
      title: "Expert Translators",
      desc: "Native Hindi speakers with deep cultural insight",
      icon: MdTranslate,
      gradient: "from-purple-600 to-blue-500"
    },
    {
      title: "Fast Turnaround",
      desc: "Get your translated videos within 12-72 hours",
      icon: MdTimer,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Cultural Adaptation",
      desc: "Content localized for Indian audience preferences",
      icon: MdLanguage,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Growth Focused",
      desc: "Strategic translation to maximize engagement",
      icon: MdTrendingUp,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          {/* Removed the title and subtitle */}
          {/* <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#E879F9]"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Unlock the power of professional Hindi translation
          </motion.p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Card className="relative h-full bg-[#12121A]/50 backdrop-blur-md shadow-xl border border-gray-700/50 rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 relative z-10">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out" />
                  
                  {/* Icon Container */}
                  <div className={`w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#E879F9] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E879F9] to-[#8B5CF6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;
