"use client";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import styles from './TrustedBy.module.css';

interface Video {
  originalId: string;
  translatedId: string;
}

interface HindiVideo {
  id: string;
  title: string;
}

interface VideoComparisonSectionProps {
  video: Video;
  index: number;
}

interface HindiVideoShowcaseProps {
  videos: HindiVideo[];
}

const Work = () => {
  const videos = [
    { originalId: "GJbUI2D3rLY", translatedId: "rovMJ49Ij_k" },
    { originalId: "kVpJ6BwG8zg", translatedId: "qKJBlTLcBKY" },
  ];
  const hindiVideos = [
    { id: "CVCbAoiNX6A", title: "Hindi Video 1" },
    { id: "dsuMPWZvX2Q", title: "Hindi Video 2" },
    { id: "NhWQE9hbT_o", title: "Hindi Video 3" },
    { id: "rq8UyDFUR7M", title: "Hindi Video 4" },
    { id: "mlAGyhBFZlU", title: "Hindi Video 5" },
    { id: "TcBvkdHn9aU", title: "Hindi Video 6" },
  ];

  const logos = [
    "https://yt3.googleusercontent.com/ytc/AIdro_mVZ4AHe826kUXrFWybMD8xewxe0jxek1j2RABjppew-A=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_nN4JNqHsIvck_6leJoMUWw3PQzNSRXL97ugjAn6_TU7mA=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_mDEsuYNLn6bo4gIiJEUwyu7BS6pxbyludi-60YjuCxMhY=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_kKGaEKaafkVObI-xJQPOipJ-B-W2vdD8fuv4oNEW7d894=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/jnNqrt1hvGxQYm91BO937kiUYw-UP68Lvmuo78vguXPCE8y7Xzp0DzBd0JSmaenOQ9t6brPNVA=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AIdro_nrZfnUxi_DwFSlJyuQvZN-JWkiZHkgwUaZJPhiIu-ZNLI=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/nTK6AFZrpjDHKNIHq0zqjkWCs3jm9ttQBAGOfIui0zlz_gQzeqAIOtQKfzbSUIA0Mu15HBDfCg=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AIdro_mRcYhzGr2q4ldpSH3WY6Mdcnzu0MvZAmUWJIPkVLHvYsc=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/Pu4tOoOIwq-MSZ1J1-GQuWbEaDppYESaE9uIMTaTXybQD8xFyRmCawPucKeOVuE4iN385CYn5g=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/SQHMMOa5EnZI4-RZaUi9HUKn5UsBvEidWwGU9dKoFchPBi3foSL_Z63X1bLOwzVpzqL48_diatw=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_k_k_rcU9yzx6bRJU5CMBjkxbrDY3V7zjxaVRSfDXJ7jB0=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/smpvbfd6kga9xo3rTSPe-wZt0VEejfcK9uUcFmZKAkBV8_CJgMBHSBnXn_MHx7_nF8Mul3jJ2Q=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_k3-YG_gFDPrcKP27S3C-XX9WkETUI2f4_hS04-IOZbwl8=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/QQdpkgefEAqn7BxTvqSLkd9UxIioHoy0Kuk_euUkZ3zJ79hoiIJGY702-XhQCX1H4kHpb7TDWfQ=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_lLS0JR3bWJDxw3HCFO45Bd3BRiPstnMavKje_qpvGea-E=s800-c-k-c0x00ffffff-no-rj",
  ];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: ["#ff0000", "#0000ff"] },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400">
              Some of Our Work
            </span>
          </h1>
        </motion.div>
        <div className="space-y-24">
          {videos.map((video, index) => (
            <VideoComparisonSection key={index} video={video} index={index} />
          ))}
          <HindiVideoShowcase videos={hindiVideos} />
        </div>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#E879F9]"></h2>
              <p className="text-lg text-gray-400">
                Vidoro is popular among creators worldwide.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />
              <div className={styles.scrollContainer}>
                <div className={styles.scrollWrapper}>
                  {[...logos, ...logos].map((logo, index) => (
                    <div
                      key={index}
                      className={`${styles.logoItem} bg-gray-800 rounded-full flex items-center justify-center shadow-md overflow-hidden w-[70px] h-[70px] shrink-0`}
                    >
                      <img
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className={`${styles.logoImage} w-full h-full object-cover`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const VideoComparisonSection = ({ video, index }: VideoComparisonSectionProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1, initialInView: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-6 max-w-5xl mx-auto"
    >
      <VideoComparisonWrapper
        originalVideoId={video.originalId}
        translatedVideoId={video.translatedId}
        inView={inView}
      />
    </motion.div>
  );
};

const VideoComparisonWrapper = ({ originalVideoId, translatedVideoId, inView }) => {
  const [isOriginalLoading, setIsOriginalLoading] = useState(true);
  const [isTranslatedLoading, setIsTranslatedLoading] = useState(true);

  const skeletonLoader = (
    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="wave-bg absolute inset-0" />
      <motion.img
        src="/favicon.ico"
        alt="Vidoro Logo"
        className="relative z-10 w-12 h-12 object-contain"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl">
      <motion.div className="relative aspect-video" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <iframe
          src={`https://www.youtube.com/embed/${originalVideoId}`}
          title="Original Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsOriginalLoading(false)}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
        {isOriginalLoading && skeletonLoader}
      </motion.div>
      <motion.div className="relative aspect-video" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <iframe
          src={`https://www.youtube.com/embed/${translatedVideoId}`}
          title="Translated Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsTranslatedLoading(false)}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
        {isTranslatedLoading && skeletonLoader}
      </motion.div>
    </div>
  );
};

const HindiVideoShowcase = ({ videos }: HindiVideoShowcaseProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1, initialInView: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          More Hindi Videos
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1, scale: 1 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="aspect-video"
          >
            <YoutubeVideoWrapper videoId={video.id} title={video.title} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const YoutubeVideoWrapper = ({ videoId, title }: { videoId: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  const skeletonLoader = (
    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="wave-bg absolute inset-0" />
      <motion.img
        src="/favicon.ico"
        alt="Vidoro Logo"
        className="relative z-10 w-12 h-12 object-contain"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );

  return (
    <motion.div
      className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        className="absolute top-0 left-0 w-full h-full"
      />
      {isLoading && skeletonLoader}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </motion.div>
    </motion.div>
  );
};

export default Work;