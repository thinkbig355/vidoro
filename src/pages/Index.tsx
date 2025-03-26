import React from "react";
import Hero from "@/components/home/Hero";
import ServiceBoxes from "@/components/home/ServiceBoxes";
import Testimonials from "@/components/home/Testimonials";
import TeamAndScenes from "@/components/home/TeamAndScenes";
// REMOVE: import { Footer } from '@/components/layout/Footer'; // No longer needed here
import HomeLayout from "@/components/home/HomeLayout";
import { motion } from "framer-motion";

const Index = () => {
  const componentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    // HomeLayout provides the particle background and structure specific to the index page
    <HomeLayout>
      {/* These sections are rendered inside HomeLayout */}
      <motion.div
        variants={componentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>
      <motion.div
        variants={componentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ServiceBoxes />
      </motion.div>
      <motion.div
        variants={componentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        variants={componentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <TeamAndScenes />
      </motion.div>
      {/* REMOVE THIS motion.div containing the Footer */}
      {/*
      <motion.div
        variants={componentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
      */}
    </HomeLayout>
    // The actual Footer component will be rendered by the parent Layout component
    // which wraps this Index component via <Outlet /> in App.tsx
  );
};

export default Index;