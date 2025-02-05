import React from "react";
import Hero from "@/components/home/Hero";
import ServiceBoxes from "@/components/home/ServiceBoxes";
import TrustedBy from "@/components/home/TrustedBy";
import Testimonials from "@/components/home/Testimonials";
import TeamAndScenes from "@/components/home/TeamAndScenes";
import ParticleBackground from '@/components/common/ParticleBackground';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="relative">
      {/* Hero Section with default particles */}
      <ParticleBackground variant="default" />
      <Hero />

      {/* Service Boxes with connecting particles */}
      <div className="relative">
        <ParticleBackground variant="connect" />
        <ServiceBoxes />
      </div>

      {/* Testimonials with star particles */}
      <div className="relative">
        <ParticleBackground variant="stars" />
        <Testimonials />
      </div>

      {/* Team and Scenes with bubble particles */}
      <div className="relative">
        <ParticleBackground variant="bubbles" />
        <TeamAndScenes />
      </div>

      {/* Trusted By with default particles */}
      <div className="relative">
        <ParticleBackground variant="default" />
        <TrustedBy />
      </div>

      <Footer />
    </div>
  );
};

export default Index;