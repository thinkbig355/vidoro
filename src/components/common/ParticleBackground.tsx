import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

interface ParticleBackgroundProps {
  variant?: 'default' | 'connect' | 'stars' | 'bubbles' | 'minimal';
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ variant = 'default' }) => {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  const getConfig = (variant: string) => {
    const configs = {
      default: {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#FF3B3B"
          },
          opacity: {
            value: 0.5,
            random: true
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            out_mode: "out"
          }
        }
      },
      connect: {
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#3B82F6"
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#3B82F6",
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true
          }
        }
      },
      stars: {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#E879F9"
          },
          shape: {
            type: "star"
          },
          size: {
            value: 3,
            random: true
          },
          opacity: {
            value: 0.7,
            random: true
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true
          }
        }
      },
      bubbles: {
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#FF3B3B"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.3,
            random: true
          },
          size: {
            value: 8,
            random: true
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            out_mode: "out"
          }
        }
      },
      minimal: {
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: 0.2,
            random: true
          },
          size: {
            value: 2,
            random: true
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
          }
        }
      }
    };

    const baseConfig = configs[variant] || configs.default;
    return {
      ...baseConfig,
      fps_limit: 60,
      retina_detect: false,
      detectRetina: false
    };
  };

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id={`tsparticles-${variant}`}
        init={particlesInit}
        options={getConfig(variant)}
        className="transition-opacity duration-500"
      />
    </div>
  );
};

export default ParticleBackground; 