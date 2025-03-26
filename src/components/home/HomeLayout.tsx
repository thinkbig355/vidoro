import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container); // Keep for debugging if needed
  }, []);

  return (
    // ****** CHANGED from <main> to <div> ******
    <div className="relative min-h-screen bg-[#0A0A0F]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#ff0000", "#0000ff"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        // Ensure particles are behind the content
        className="fixed inset-0 z-0"
      />
      {/* This div holds the actual page content above the particles */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
    // ****** END OF CHANGE ******
  );
};

export default HomeLayout;