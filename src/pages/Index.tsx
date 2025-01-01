import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation, animate } from "framer-motion";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const countRef = useRef(null);
  const isInView = useInView(countRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
      
      // Animate the counter
      const counter = document.querySelector(".counter");
      if (counter) {
        animate(100, 2000, {
          duration: 5,
          onUpdate: (value) => {
            counter.textContent = Math.round(value).toLocaleString() + "+";
          },
        });
      }
    }
  }, [isInView, controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a 
            href="/" 
            className="text-3xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Vidorro
          </motion.a>
          <nav className="hidden md:flex gap-8">
            {[
              { name: "Our Work", path: "/work" },
              { name: "Process", path: "/process" }
            ].map((item) => (
              <motion.div key={item.name}>
                <Link
                  to={item.path}
                  className="text-white hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.1, color: "#93C5FD" }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
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
              className="text-xl md:text-2xl text-blue-100 mb-8"
            >
              We Translate Your Videos into Hindi, Expanding Your Reach & Impact
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-6 text-xl rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 relative group"
              >
                Get Started
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="relative aspect-square rounded-lg overflow-hidden"
            animate={{ 
              scale: [1, 1.02, 1],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="https://cdn.leonardo.ai/users/2098a0d6-9a93-480a-b952-0840092314da/generations/07884269-3038-4231-9ad0-35ae4b6a9c4a/Leonardo_Phoenix_10_A_intricate_and_detailed_map_of_India_comp_2.jpg"
              alt="India Map Visualization"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Service Boxes */}
      <section className="py-20 px-4 bg-black/40">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Expert Translators", desc: "Native Hindi speakers with a deep understanding of both cultures" },
            { title: "Fast Turnaround", desc: "Get your translated videos within 24-72 hours" },
            { title: "Cultural Adaptation", desc: "Content localized for Indian audience preferences" },
            { title: "Growth Focused", desc: "Strategic translation to maximize engagement" }
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="bg-gradient-to-br from-blue-900 to-blue-950 border-blue-700">
                <CardContent className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p>{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Trusted by Content Creators</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {[1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="bg-white/10 rounded-full aspect-square flex items-center justify-center"
              >
                <Globe className="w-12 h-12 text-blue-400" />
              </motion.div>
            ))}
          </div>
          <div ref={countRef} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="counter text-5xl font-bold text-blue-400 mb-4"
            >
              100+
            </motion.div>
            <p className="text-xl text-blue-100">Translated Videos</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/40">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Expand Your Reach?</h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-6 text-xl rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 relative group"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;