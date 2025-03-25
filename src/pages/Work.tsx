"use client";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import {
  ArrowRight,
  Play,
  Globe,
  ImportIcon as Translate,
  Star,
  ChevronRight,
} from "lucide-react";
import styles from "./TrustedBy.module.css";

interface Video {
  originalId: string;
  translatedId: string;
  title: string;
  description: string;
}

interface HindiVideo {
  id: string;
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
    {
      originalId: "GJbUI2D3rLY",
      translatedId: "rovMJ49Ij_k",
      title: "Video Translation Example 1",
      description: "",
    },
    {
      originalId: "kVpJ6BwG8zg",
      translatedId: "qKJBlTLcBKY",
      title: "Video Translation Example 2",
      description: "",
    },
  ];

  const hindiVideos = [
    { id: "CVCbAoiNX6A" },
    { id: "dsuMPWZvX2Q" },
    { id: "NhWQE9hbT_o" },
    { id: "rq8UyDFUR7M" },
    { id: "mlAGyhBFZlU" },
    { id: "TcBvkdHn9aU" },
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

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    [],
  );

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
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="relative">
        {/* Main Content */}
        <div
          id="showcase"
          className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-5"
        >
          {" "}
          {/* Changed mt-12 to mt-6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400">
                See Our Services in Action
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
          </motion.div>
          <div className="space-y-32">
            {videos.map((video, index) => (
              <VideoComparisonSection key={index} video={video} index={index} />
            ))}
          </div>
          <HindiVideoShowcase videos={hindiVideos} />
          {/* Creators Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Trusted by Leading Creators
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Join thousands of content creators who use Vidoro to reach
                    global audiences and expand their influence.
                  </p>
                </motion.div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />
                <div className={styles.scrollContainer}>
                  <div className={styles.scrollWrapper}>
                    {[...logos, ...logos].map((logo, index) => (
                      <div
                        key={index}
                        className={`${styles.logoItem} bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg overflow-hidden w-[80px] h-[80px] shrink-0 border border-white/10 hover:border-white/30 transition-all duration-300`}
                      >
                        <img
                          src={logo || "/placeholder.svg"}
                          alt={`Creator ${index + 1}`}
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
    </div>
  );
};

const VideoComparisonSection = ({
  video,
  index,
}: VideoComparisonSectionProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="space-y-8 max-w-5xl mx-auto"
    >
      <div className="text-left mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{video.title}</h3>
        {/* The p tag here will now be empty as `video.description` is "" */}
        <p className="text-gray-400">{video.description}</p>
      </div>

      <VideoComparisonWrapper
        originalVideoId={video.originalId}
        translatedVideoId={video.translatedId}
        inView={inView}
      />

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10">
          <div className="flex items-center mb-3">
            <Globe className="text-blue-400 mr-2" size={20} />
            <h4 className="font-semibold">Original Content</h4>
          </div>
          <p className="text-sm text-gray-400">
            The original video in English.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10">
          <div className="flex items-center mb-3">
            <Translate className="text-red-400 mr-2" size={20} />
            <h4 className="font-semibold">Translated Version</h4>
          </div>
          <p className="text-sm text-gray-400">
            The video translated in hindi.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const VideoComparisonWrapper = ({
  originalVideoId,
  translatedVideoId,
  inView,
}) => {
  const [isOriginalLoading, setIsOriginalLoading] = useState(true);
  const [isTranslatedLoading, setIsTranslatedLoading] = useState(true);

  const skeletonLoader = (
    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-gray-600 border-t-white animate-spin"></div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-white/10">
      <div className="space-y-2 relative">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-t-lg font-semibold flex items-center">
          <Globe className="mr-2" size={18} />
          <span>Original</span>
        </div>
        <motion.div
          className="relative aspect-video"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${originalVideoId}`}
            title="Original Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsOriginalLoading(false)}
            className="absolute top-0 left-0 w-full h-full rounded-b-lg"
          />
          {isOriginalLoading && skeletonLoader}
        </motion.div>
      </div>
      <div className="space-y-2 relative">
        <div className="bg-gradient-to-r from-red-600 to-red-400 text-white px-4 py-3 rounded-t-lg font-semibold flex items-center">
          <Translate className="mr-2" size={18} />
          <span>Translated</span>
        </div>
        <motion.div
          className="relative aspect-video"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${translatedVideoId}`}
            title="Translated Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsTranslatedLoading(false)}
            className="absolute top-0 left-0 w-full h-full rounded-b-lg"
          />
          {isTranslatedLoading && skeletonLoader}
        </motion.div>
      </div>
    </div>
  );
};

const HindiVideoShowcase = ({ videos }: HindiVideoShowcaseProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className="space-y-12 max-w-7xl mx-auto py-24"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"></span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Examples of Hindi videos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <YoutubeVideoWrapper videoId={video.id} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const YoutubeVideoWrapper = ({ videoId }: { videoId: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  const skeletonLoader = (
    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-gray-600 border-t-white animate-spin"></div>
    </div>
  );

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-white/10"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          className="absolute top-0 left-0 w-full h-full"
        />
        {isLoading && skeletonLoader}
      </div>
      <div className="p-4">
        <div className="flex items-center mt-3 text-sm text-gray-400">
          <span>Hindi</span> {/* Changed to just "Hindi" */}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
