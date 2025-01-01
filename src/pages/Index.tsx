import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";
import { Globe } from "lucide-react";

const Index = () => {
  const countRef = useRef(null);
  const isInView = useInView(countRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-white">
            Vidorro
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-white hover:text-blue-300 transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Unlock the Massive Indian YouTube Audience of
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mt-2">
              1.4 Billion
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-12"
          >
            We Translate Your Videos into Hindi, Expanding Your Reach & Impact
          </motion.p>
        </div>
      </section>

      {/* Service Boxes */}
      <section className="py-20 px-4 bg-black/40">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-900 to-blue-950 border-blue-700">
            <CardContent className="p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Expert Translators</h3>
              <p>Native Hindi speakers with a deep understanding of both cultures</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-900 to-blue-950 border-blue-700">
            <CardContent className="p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Fast Turnaround</h3>
              <p>Get your translated videos within 24-72 hours</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-900 to-blue-950 border-blue-700">
            <CardContent className="p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Cultural Adaptation</h3>
              <p>Content localized for Indian audience preferences</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-900 to-blue-950 border-blue-700">
            <CardContent className="p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Growth Focused</h3>
              <p>Strategic translation to maximize engagement</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Trusted by Content Creators</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 aspect-video flex items-center justify-center">
                <Globe className="w-12 h-12 text-blue-400" />
              </div>
            ))}
          </div>
          <div ref={countRef} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="text-5xl font-bold text-blue-400 mb-4"
            >
              2000+
            </motion.div>
            <p className="text-xl text-blue-100">Translated Videos</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/40">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Expand Your Reach?</h2>
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-6 text-xl rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 animate-pulse"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;