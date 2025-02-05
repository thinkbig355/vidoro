import React from "react";
import Hero from "@/components/home/Hero";
import ServiceBoxes from "@/components/home/ServiceBoxes";
import TrustedBy from "@/components/home/TrustedBy";
import Testimonials from "@/components/home/Testimonials";
import TeamAndScenes from "@/components/home/TeamAndScenes";
import { Footer } from '@/components/layout/Footer';
import HomeLayout from "@/components/home/HomeLayout";

const Index = () => {
  return (
    <HomeLayout>
      <div className="relative">
        <Hero />
        <ServiceBoxes />
        <Testimonials />
        <TeamAndScenes />
        <TrustedBy />
        <Footer />
      </div>
    </HomeLayout>
  );
};

export default Index;