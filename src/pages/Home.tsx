import React from 'react';
import HomeLayout from '../components/home/HomeLayout';
import Hero from '../components/home/Hero';
import ServiceBoxes from '../components/home/ServiceBoxes';
import HowItWorks from '../components/home/HowItWorks';
import TeamAndScenes from '../components/home/TeamAndScenes';
import Testimonials from '../components/home/Testimonials';
import TrustedBy from '../components/home/TrustedBy';

const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <ServiceBoxes />
      <TeamAndScenes />
      <Testimonials />
      <TrustedBy />
    </HomeLayout>
  );
};

export default Home; 