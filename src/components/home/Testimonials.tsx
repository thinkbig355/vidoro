"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const CounterAnimation = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 2000, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-6xl md:text-7xl font-bold text-red-600">
        {count}M+
      </div>
      <div className="text-2xl md:text-3xl text-gray-400 mt-2">
        Views Generated
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Sarah Miller",
    image:
      "https://www.economicliberties.us/wp-content/uploads/2022/11/SM-Headshot-2.png",
    content:
      "Our Hindi channel's bringing in new viewers and even sponsors, which is great. Vidoro's been a solid help.",
  },
  {
    name: (
      <a
        href="https://www.instagram.com/thevarunmayya/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:underline"
      >
        Varun Mayya
      </a>
    ),
    image:
      "https://yt3.ggpht.com/ytc/AIdro_nrZfnUxi_DwFSlJyuQvZN-JWkiZHkgwUaZJPhiIu-ZNLI=s800-c-k-c0x00ffffff-no-rj",
    content:
      "Wasn't sure at first, but Vidoro is legit. Hindi channel's growing fast now. 👍",
  },
  {
    name: "Sabin Mathew",
    image:
      "https://yt3.googleusercontent.com/uI3J9rcN5QvBD5rPMj5SaDUp41PIvTergbOWIKam39L7xxpzBT99zqcMiLrJ0qXalORqg0hKjA=s800-c-k-c0x00ffffff-no-rj",
    content:
      "Translations used to be a headache for me. Vidoro just takes care of it, and the quality is good.",
  },
  {
    name: "Chris Wilson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSor30vW4SqoTpWEHKCGuF7Suvm7-TVWlb-Nw&s",
    content:
      "India's a big audience we wanted to tap into. Vidoro helped us do that, made it much easier.",
  },
  {
    name: "Nitish Rajput",
    image:
      "https://yt3.googleusercontent.com/Q5wDZkznd7zSD2RWT3HU9sqbwNkkkJtXgTxulaJoLAEl-U9-gbcIm6Of1rASj9RBotOedTih=s900-c-k-c0x00ffffff-no-rj",
    content: "Vidoro is awesome. They get it.",
  },
  {
    name: "David Thompson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_790iFGstZRyTV_G4w5Nqz-884DPh3tj39g&s",
    content:
      "Glad we found Vidoro. Reaching Indian viewers is way easier now for us.",
  },
  {
    name: "Gaurav Thakur",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nN4JNqHsIvck_6leJoMUWw3PQzNSRXL97ugjAn6_TU7mA=s800-c-k-c0x00ffffff-no-rj",
    content:
      "Vidoro's translations are on point. They really get my content's vibe, which is key.",
  },
  {
    name: "Michael Anderson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jJm8I1Y7ScxGsjHIje8S14dzWLU18hC7bA&s",
    content:
      "Cost was a concern, but it's been worth it for us. Hindi views are up. 🙂",
  },
  {
    name: "Amanda Martinez",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovH25CYLeDFwlkH_qF4_FNvhus8RcxJq0rg&s",
    content:
      "Vidoro makes the whole thing simple. Big time-saver, which I appreciate.",
  },
  {
    name: "Jason Smith",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1P8RPg3H6sbj40agtWZfkYlTars7z9Is4sQ&s",
    content: "Translations good. Views up. Worth it yeh.",
  },
];

type TestimonialProps = {
  name: string | JSX.Element;
  image: string;
  content: string;
};

const TestimonialCard = ({ name, image, content }: TestimonialProps) => (
  <Card className="min-w-[320px] bg-[#12121A]/50 backdrop-blur-md border border-gray-700/50 mx-4 rounded-lg shadow-lg">
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={image} alt={typeof name === "string" ? name : "Creator"} />
          <AvatarFallback>
            {typeof name === "string" ? name : "C"}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-lg text-white">{name}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{content}</p>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  const firstHalf = testimonials.slice(0, 5);
  const secondHalf = testimonials.slice(5);

  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstRowRef.current) {
      const firstRowEl = firstRowRef.current;
      const firstRowWidth = firstRowEl.scrollWidth / 2;
      const speed = 50;
      const duration = firstRowWidth / speed;

      gsap.fromTo(
        firstRowEl,
        { x: 0 },
        {
          x: -firstRowWidth,
          duration: duration,
          ease: "none",
          repeat: -1,
        }
      );
    }

    if (secondRowRef.current) {
      const secondRowEl = secondRowRef.current;
      const secondRowWidth = secondRowEl.scrollWidth / 2;
      const speed = 50;
      const duration = secondRowWidth / speed;

      gsap.set(secondRowEl, { x: -secondRowWidth });

      gsap.to(secondRowEl, {
        x: 0,
        duration: duration,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-blue-400">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Hear from content creators who've transformed their reach
          </p>
        </div>

        <div className="relative scroll-container mb-24">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />

          <div className="mb-8 overflow-hidden">
            <div ref={firstRowRef} className="flex gap-6">
              {firstHalf.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
              {firstHalf.map((testimonial, index) => (
                <TestimonialCard key={`clone-${index}`} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div ref={secondRowRef} className="flex gap-6">
              {secondHalf.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
              {secondHalf.map((testimonial, index) => (
                <TestimonialCard key={`clone-${index}`} {...testimonial} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <CounterAnimation end={1700} />
        </div>
      </div>
    </section>
  );
}