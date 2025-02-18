"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
// Remove the import styles from "./TeamAndScenes.module.css";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  funFact: string;
  image: string;
}

const ourTeam: TeamMember[] = [
  {
    name: "Priya Sharma",
    role: "Senior Translation Specialist",
    bio: "Priya is a linguistic expert, meticulously ensuring accurate and culturally resonant Hindi translations, capturing the nuances of the original English content.",
    funFact: "Has translated scripts for several award-winning documentaries.",
    image: "https://www.vidzy.in/assets/images/about/founders/nisha.webp",
  },
  {
    name: "Rahul Verma",
    role: "YouTube Growth Strategist",
    bio: "Rahul specializes in optimizing translated content for the Hindi-speaking YouTube audience, focusing on discoverability, engagement, and channel growth.",
    funFact: "Grew a personal YouTube channel from 0 to 100K subscribers in six months.",
    image: "https://www.vidzy.in/assets/images/about/founders/washib.webp",
  },
  {
    name: "Aditi Gupta",
    role: "Client Success Manager",
    bio: "Aditi is the dedicated point of contact for our creators, ensuring a seamless experience and maximizing the impact of their translated content.",
    funFact: "Has lived in both the US and India, providing a unique cross-cultural perspective.",
    image: "https://shutterstock.com/shutterstock/videos/3505725819/thumb/1.jpg?ip=x480",
  },
  {
    name: "Dhruv Patel",
    role: "Head of Video Editing",
    bio: "Dhruv leads our editing team, ensuring translated videos maintain the highest production quality, pacing, and visual appeal for the Hindi audience.",
    funFact: "An avid gamer, Dhruv often incorporates subtle gaming references into his editing work.",
    image: "https://www.vidzy.in/assets/images/about/founders/ravi.webp",
  },
  {
    name: "Ishan Reddy",
    role: "CEO & Founder",
    bio: "Ishan drives the vision and strategy of the company, combining his passion for content creation with a deep understanding of the Indian market.",
    funFact: "Started his career as a video creator, giving him firsthand insight into the needs of YouTubers.",
    image: "https://heliumedits.com/wp-content/uploads/2025/01/jhgg.png",
  },
];

interface BehindScene {
  image: string;
  caption: string;
}

// Updated Behind the Scenes data
const btsImages: BehindScene[] = [
  {
    image: "/Images/1.jpg",
    caption: "Collaborative brainstorming session: Refining translation strategies.",
  },
  {
    image: "/Images/3.webp",
    caption: "Fine-tuning the visuals: Our editing team at work.",
  },
  {
    image: "/Images/4.webp",
    caption: "Capturing the perfect Hindi voice-over: Quality audio is key.",
  },
  {
    image: "/Images/2.jpg",
    caption: "Team sync: Aligning on project goals and client feedback.",
  },
];

export default function TeamAndScenes() {
  const teamRowRef = useRef<HTMLDivElement>(null);
  const btsRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for Our Team
    if (teamRowRef.current) {
      const teamEl = teamRowRef.current;
      const teamWidth = teamEl.scrollWidth / 2;
      const speed = 50; // pixels per second - adjust as needed
      const duration = teamWidth / speed;

      gsap.to(teamEl, {
        x: -teamWidth,
        duration: duration,
        ease: "none",
        repeat: -1,
      });
    }

    // Animation for Behind the Scenes
    if (btsRowRef.current) {
      const btsEl = btsRowRef.current;
      const btsWidth = btsEl.scrollWidth / 2;
      const speed = 50; // pixels per second - adjust as needed
      const duration = btsWidth / speed;

      gsap.fromTo(
        btsEl,
        { x: -btsWidth },
        {
          x: 0,
          duration: duration,
          ease: "none",
          repeat: -1,
        }
      );
    }
  }, []);

  return (
    <section className="py-24">
      {/* Team Section */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400">
                Our Team
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              Meet the experts behind your content transformation
            </p>
          </div>
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />

            <div className="overflow-hidden">
              <div ref={teamRowRef} className="flex gap-8">
                {ourTeam.map((member, i) => (
                  <div key={i} className="flex-none w-96">
                    {/* Team card content */}
                    <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <div className="h-72 w-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-sm text-[#FF3B3B] font-medium mb-4">{member.role}</p>
                        <p className="text-gray-400 mb-6 leading-relaxed">{member.bio}</p>
                        <div className="border-t border-gray-800 pt-4">
                          <p className="text-sm text-gray-400">
                            <span className="font-medium text-[#3B82F6]">Fun fact:</span> {member.funFact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate team members for seamless loop */}
                {ourTeam.map((member, i) => (
                  <div key={`clone-${i}`} className="flex-none w-96">
                    {/* Duplicate team card content */}
                    <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <div className="h-72 w-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-sm text-[#FF3B3B] font-medium mb-4">{member.role}</p>
                        <p className="text-gray-400 mb-6 leading-relaxed">{member.bio}</p>
                        <div className="border-t border-gray-800 pt-4">
                          <p className="text-sm text-gray-400">
                            <span className="font-medium text-[#3B82F6]">Fun fact:</span> {member.funFact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {/* New Title and Styling */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400">
                Behind the Scenes
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              Get a glimpse into our creative process {/* Subtitle remains, but is different */}
            </p>
          </div>
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />
            <div className="overflow-hidden">
              <div ref={btsRowRef} className="flex gap-8">
                {btsImages.map((scene, i) => (
                  <div key={i} className="flex-none w-[400px]">
                    <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <div className="relative">
                        <img
                          src={scene.image}
                          alt={scene.caption}
                          className="w-full h-72 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-gray-300 font-medium text-center">{scene.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless scrolling */}
                {btsImages.map((scene, i) => (
                  <div key={`clone-${i}`} className="flex-none w-[400px]">
                    <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <div className="relative">
                        <img
                          src={scene.image}
                          alt={scene.caption}
                          className="w-full h-72 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-gray-300 font-medium text-center">{scene.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
