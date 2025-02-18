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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative flex-none transform-gpu"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
              <div className="relative p-8 h-full bg-[#12121A] rounded-2xl border border-gray-800/50 backdrop-blur-xl transition-all duration-500 group-hover:border-gray-700/50 group-hover:translate-y-[-2px] will-change-transform">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/10 to-blue-500/10 flex items-center justify-center border border-gray-800">
                    <service.icon className="w-7 h-7 text-red-400 group-hover:text-blue-400 transition-colors duration-500" />
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-blue-400 transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;
