import React from "react";
import Hero from "@/components/home/Hero";
import ServiceBoxes from "@/components/home/ServiceBoxes";
import TrustedBy from "@/components/home/TrustedBy";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServiceBoxes />
      <TrustedBy />
    </div>
  );
};

export default Index;