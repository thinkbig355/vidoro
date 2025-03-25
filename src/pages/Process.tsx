// process.tsx
"use client";

import {
  ArrowRight,
  ChevronRight,
  MessageSquare,
  Plus,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import { useCallback } from "react";
import { motion } from "framer-motion";

export default function HowVidoroWorks() {
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
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Particle Background */}
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
        className="absolute inset-0"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 md:px-6 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-center text-3xl md:text-5xl font-bold mt-[-1rem] mb-8">
              {" "}
              {/* Adjusted mt-[-1rem] here */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400">
                How Vidoro Works
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"></p>
          </div>

          {/* Visual Core - Three Step Process */}
          {/* ... rest of the code remains the same ... */}
          <div className="relative my-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform -translate-y-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <motion.div
                className="bg-gray-900 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Your English Channel</h3>
                <p className="text-gray-400">
                  Continue creating content as usual on your original English
                  channel.
                </p>
                <div className="mt-4 w-full h-40 bg-gray-800 rounded-lg overflow-hidden relative">
                  {/* Stylized YouTube Channel UI */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-gray-700 flex items-center px-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-auto text-xs text-gray-300">
                      youtube.com
                    </div>
                  </div>
                  <div className="absolute top-8 left-0 w-full h-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center px-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold">
                      EN
                    </div>
                    <div className="ml-3">
                      <div className="h-2 w-32 bg-gray-600 rounded-full"></div>
                      <div className="h-2 w-20 bg-gray-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <div className="absolute top-28 left-0 w-full px-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-gray-700 rounded-md flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent"></div>
                        </div>
                      </div>
                      <div className="h-16 bg-gray-700 rounded-md flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full mt-2"></div>
                    <div className="h-2 w-3/4 bg-gray-700 rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Arrow pointing to next step - visible only on mobile */}
                <div className="flex justify-center mt-6 md:hidden">
                  <div className="w-10 h-10 bg-pink-500/30 rounded-full flex items-center justify-center animate-pulse">
                    <ChevronRight className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
              </motion.div>

              {/* Arrow pointing to next step - visible only on desktop */}
              <div className="absolute left-[30%] top-1/2 transform -translate-y-1/2 -translate-x-1/2 hidden md:block z-10">
                <motion.div
                  className="w-12 h-12 bg-pink-500/30 rounded-full flex items-center justify-center animate-pulse"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ChevronRight className="w-8 h-8 text-pink-400" />
                </motion.div>
              </div>

              {/* Step 2 */}
              <motion.div
                className="bg-gray-900 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-pink-500/20 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-pink-500/30 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Vidoro's Magic</h3>
                <p className="text-gray-400">
                  We translate, optimize, and prepare your content for the Hindi
                  audience.
                </p>
                <div className="mt-4 w-full h-40 bg-gray-800 rounded-lg overflow-hidden relative">
                  {/* Translation Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-pink-500/20 animate-pulse flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Zap className="w-10 h-10 text-pink-400" />
                    </motion.div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex">
                    <div className="w-1/2 border-r border-dashed border-pink-500/50 flex items-center justify-center">
                      <div className="space-y-2 px-4">
                        <div className="h-2 w-20 bg-gray-700 rounded-full"></div>
                        <div className="h-2 w-16 bg-gray-700 rounded-full"></div>
                        <div className="h-2 w-24 bg-gray-700 rounded-full"></div>
                        <div className="text-xs text-gray-400 mt-2">
                          English
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                      <div className="space-y-2 px-4">
                        <div className="h-2 w-20 bg-pink-500/40 rounded-full"></div>
                        <div className="h-2 w-16 bg-pink-500/40 rounded-full"></div>
                        <div className="h-2 w-24 bg-pink-500/40 rounded-full"></div>
                        <div className="text-xs text-gray-400 mt-2">हिन्दी</div>
                      </div>
                    </div>
                  </div>

                  {/* Animated particles */}
                  <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-pink-400 animate-ping"></div>
                  <div
                    className="absolute top-3/4 left-2/3 w-2 h-2 rounded-full bg-purple-400 animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-blue-400 animate-ping"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Arrow pointing to next step - visible only on mobile */}
                <div className="flex justify-center mt-6 md:hidden">
                  <motion.div
                    className="w-10 h-10 bg-red-500/30 rounded-full flex items-center justify-center animate-pulse"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ChevronRight className="w-6 h-6 text-red-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Arrow pointing to next step - visible only on desktop */}
              <div className="absolute left-[70%] top-1/2 transform -translate-y-1/2 -translate-x-1/2 hidden md:block z-10">
                <motion.div
                  className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center animate-pulse"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ChevronRight className="w-8 h-8 text-red-400" />
                </motion.div>
              </div>

              {/* Step 3 */}
              <motion.div
                className="bg-gray-900 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-500/20 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Your Hindi Channel</h3>
                <p className="text-gray-400">
                  Watch your Hindi channel grow with perfectly translated
                  content.
                </p>
                <div className="mt-4 w-full h-40 bg-gray-800 rounded-lg overflow-hidden relative">
                  {/* Stylized YouTube Channel UI - Hindi Version */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-gray-700 flex items-center px-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-auto text-xs text-gray-300">
                      youtube.com
                    </div>
                  </div>
                  <div className="absolute top-8 left-0 w-full h-16 bg-gradient-to-r from-red-600/20 to-orange-600/20 flex items-center px-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold">
                      HI
                    </div>
                    <div className="ml-3">
                      <div className="h-2 w-32 bg-gray-600 rounded-full"></div>
                      <div className="h-2 w-20 bg-gray-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <div className="absolute top-28 left-0 w-full px-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-gray-700 rounded-md flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent"></div>
                        </div>
                      </div>
                      <div className="h-16 bg-gray-700 rounded-md flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full mt-2"></div>
                    <div className="h-2 w-3/4 bg-gray-700 rounded-full mt-2"></div>
                  </div>

                  {/* Growth indicators */}
                  <div className="absolute bottom-2 right-2">
                    <div className="flex items-center space-x-1">
                      <div className="h-3 w-1 bg-green-500 rounded-sm"></div>
                      <div className="h-4 w-1 bg-green-500 rounded-sm"></div>
                      <div className="h-5 w-1 bg-green-500 rounded-sm"></div>
                      <div className="h-6 w-1 bg-green-500 rounded-sm"></div>
                      <div className="h-7 w-1 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-gray-300 mb-8">
              Create a new YouTube channel, grant Vidoro "Uploader" role, and
              we'll handle the rest. Your videos will be automatically
              translated and uploaded to your Hindi channel within 48 hours.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Explanation Section */}
      {/* ... rest of the code remains the same ... */}
      <section className="py-20 px-4 md:px-6 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-left">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              How It Works
            </span>
            <span className="block text-lg font-normal text-gray-400 mt-2">
              A detailed look at our simple 3-step process
            </span>
          </h2>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute left-12 top-24 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3 flex justify-center md:justify-start">
                  <div className="w-24 h-24 bg-purple-900/30 rounded-full flex items-center justify-center relative z-10">
                    <Plus className="w-10 h-10 text-purple-400" />
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 text-sm">
                      1
                    </span>
                    Create Your Hindi Channel
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Start by creating a new, dedicated YouTube channel for your
                    Hindi content. This separation allows for better audience
                    targeting and regional optimization, ensuring your content
                    reaches the right viewers.
                  </p>
                  {/* ... rest of step 1 content ... */}
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-sm text-gray-400">
                      <span className="text-purple-400 font-medium">
                        Pro Tip:
                      </span>{" "}
                      Use a similar channel name to your original channel, but
                      add "Hindi" or "हिन्दी" to make it clear to viewers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            {/* ... rest of step 2 and step 3 and onwards sections ... */}
            <div className="relative">
              <div className="absolute left-12 top-24 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-red-500 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3 flex justify-center md:justify-start">
                  <div className="w-24 h-24 bg-pink-900/30 rounded-full flex items-center justify-center relative z-10">
                    <Shield className="w-10 h-10 text-pink-400" />
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center mr-3 text-sm">
                      2
                    </span>
                    Grant Us Uploader Access
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Next, grant Vidoro the "Uploader" role on your new Hindi
                    channel. This secure permission allows us to upload
                    translated videos without requiring your password or full
                    account access.
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 mb-4">
                    <p className="text-sm text-gray-400 font-medium mb-2">
                      <span className="text-pink-400">Important:</span> Vidoro
                      will only have upload access and cannot:
                    </p>
                    <ul className="text-sm text-gray-400 space-y-1 list-disc pl-5">
                      <li>Access your account settings</li>
                      <li>View your private videos</li>
                      <li>Make changes to your original channel</li>
                      <li>Access any personal information</li>
                    </ul>
                  </div>
                  <p className="text-gray-400 text-sm">
                    You can revoke this access at any time through your YouTube
                    Studio settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute left-12 top-24 bottom-0 w-1 bg-gradient-to-b from-red-500 to-blue-500 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3 flex justify-center md:justify-start">
                  <div className="w-24 h-24 bg-red-900/30 rounded-full flex items-center justify-center relative z-10">
                    <Zap className="w-10 h-10 text-red-400" />
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 text-sm">
                      3
                    </span>
                    Sit Back and Relax!
                  </h3>
                  <p className="text-gray-300 mb-4">
                    After completing the previous steps, Vidoro automatically
                    detects new videos on your
                    <span className="font-bold text-white"> original </span>
                    channel, translates, optimizes, and uploads them to your
                    Hindi channel
                    <span className="font-bold text-white">
                      {" "}
                      within 48 hours
                    </span>
                    .
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <p className="text-sm text-gray-400">
                      Our advanced AI translation ensures your content maintains
                      its original meaning and engagement while being culturally
                      adapted for Hindi-speaking audiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stay Connected */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3 flex justify-center md:justify-start">
                <div className="w-24 h-24 bg-blue-900/30 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-10 h-10 text-blue-400" />
                </div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 text-sm">
                    4
                  </span>
                  Stay Connected Through Your Dashboard
                </h3>
                <p className="text-gray-300 mb-4">
                  Communicate directly with Vidoro through the "Messages"
                  section within your dashboard after logging in. Ask questions,
                  request changes, or discuss your project anytime.
                </p>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <p className="text-sm text-gray-400">
                    You'll also receive regular reports on your Hindi channel's
                    performance, including views, subscriber growth, and
                    engagement metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          {/* ... rest of the code remains the same ... */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Expand Your Reach?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join creators who are successfully growing their audience in the
              Hindi-speaking market without the extra work of translation and
              content adaptation.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
