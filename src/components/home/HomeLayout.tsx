import React from 'react';
import ParticleBackground from '../common/ParticleBackground';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0">
        <ParticleBackground />
      </div>
      <div className="relative z-10 bg-black">
        {children}
      </div>
    </>
  );
};

export default HomeLayout; 