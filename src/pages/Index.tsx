import React from "react";
import Hero from "@/components/home/Hero";
import ServiceBoxes from "@/components/home/ServiceBoxes";
import TrustedBy from "@/components/home/TrustedBy";
import Testimonials from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer"; // Import Footer

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <ServiceBoxes />
      <Testimonials />
      <TrustedBy />
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Index;