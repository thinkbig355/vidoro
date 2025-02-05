import React, { useEffect, useRef } from 'react';

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
    role: "Lead Content Strategist",
    bio: "With over 8 years in content localization, Priya drives our strategic direction—ensuring every translation captures essential cultural nuances.",
    funFact: "Can recite dialogues from over 100 Bollywood movies.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Rahul Verma",
    role: "Senior Translation Specialist",
    bio: "Specializing in Hindi-English conversions, Rahul brings an expert eye for cultural subtleties and YouTube content optimization.",
    funFact: "Started a trending Hindi meme page.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Sarah Chen",
    role: "Client Success Manager",
    bio: "Serving as the bridge between creators and our team, Sarah ensures smooth execution and top-notch client satisfaction.",
    funFact: "Fluent in 5 languages.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500"
  }
];

interface BehindScene {
  image: string;
  caption: string;
}

const btsImages = [
  {
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=500",
    caption: "Weekly content strategy session"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500",
    caption: "Cross-cultural adaptation workshop"
  },
  {
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=500",
    caption: "Celebrating 1M subscribers milestone"
  },
  {
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=500",
    caption: "Monthly team sync meeting"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500",
    caption: "Content localization workshop"
  },
  {
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=500",
    caption: "Team building event"
  }
];

export default function TeamAndScenes() {
  return (
    <section className="py-24">
      {/* Team Section */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#E879F9]">
              Our Team
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
              <div className="scroll-row scroll-left">
                <div className="flex gap-8">
                  {ourTeam.map((member, i) => (
                    <div key={i} className="flex-none w-96">
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
                <div className="flex gap-8">
                  {ourTeam.map((member, i) => (
                    <div key={`clone-${i}`} className="flex-none w-96">
                      {/* Same card content as above */}
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
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#E879F9]">
              Behind the Scenes
            </h2>
            <p className="text-lg text-gray-400">
              Get a glimpse into our creative process
            </p>
          </div>
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />
            
            <div className="overflow-hidden">
              <div className="scroll-row scroll-right">
                <div className="flex" style={{ gap: '2rem' }}>
                  {btsImages.map((scene, i) => (
                    <div key={i} className="flex-none w-[400px]">
                      <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 mx-4">
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
                <div className="flex" style={{ gap: '2rem' }}>
                  {btsImages.map((scene, i) => (
                    <div key={`clone-${i}`} className="flex-none w-[400px]">
                      <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 mx-4">
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
        </div>
      </section>
    </section>
  );
} 