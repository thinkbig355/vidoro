"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function CounterAnimation({ end, duration = 3 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-7xl font-bold mb-2 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
        {count}M+
      </div>
      <div className="text-xl text-zinc-400">Views Generated</div>
    </div>
  )
}

const testimonials = [
  // Top row
  {
    name: "Sarah Miller",
    image: "https://www.economicliberties.us/wp-content/uploads/2022/11/SM-Headshot-2.png",
    content:
      "Vidoro's translation service is a lifesaver! They made it so easy to reach a whole new audience in India. I'm seeing a real boost in views.",
  },
  {
    name: (
      <a href="https://www.instagram.com/thevarunmayya/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
        Varun Mayya
      </a>
    ),
    image: "https://yt3.ggpht.com/ytc/AIdro_nrZfnUxi_DwFSlJyuQvZN-JWkiZHkgwUaZJPhiIu-ZNLI=s800-c-k-c0x00ffffff-no-rj",
    content:
      "Honestly, I was skeptical at first. But Vidoro's team really delivered. My Hindi channel is growing faster than I expected.",
  },
  {
    name: "Sabin Mathew",
    image:
      "https://yt3.googleusercontent.com/uI3J9rcN5QvBD5rPMj5SaDUp41PIvTergbOWIKam39L7xxpzBT99zqcMiLrJ0qXalORqg0hKjA=s800-c-k-c0x00ffffff-no-rj",
    content:
      "I've tried translating videos myself, but it was a headache. Vidoro takes care of everything, and the quality is top-notch.",
  },
  {
    name: "Chris Wilson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSor30vW4SqoTpWEHKCGuF7Suvm7-TVWlb-Nw&s",
    content:
      "This service is a game-changer for any YouTuber serious about growing globally. India's a huge market, and Vidoro makes it accessible.",
  },
  {
    name: "Nitish Rajput",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucysRvlhqGb7DzZDBiK01ODPEDX7auKbRmQ&s",
    content:
      "The Vidoro team is amazing! They're responsive, professional, and they truly understand the Indian audience. Highly recommend!",
  },
  // Bottom row
  {
    name: "David Thompson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_790iFGstZRyTV_G4w5Nqz-884DPh3tj39g&s",
    content: "I'm so glad I found Vidoro. They've helped me connect with my Indian audience in a way I never thought possible. And it is very easy",
  },
  {
    name: "Gaurav Thakur",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nN4JNqHsIvck_6leJoMUWw3PQzNSRXL97ugjAn6_TU7mA=s800-c-k-c0x00ffffff-no-rj",
    content:
      "Vidoro's translations are spot on. They capture the nuances of my content perfectly, which is crucial for engaging a new audience.",
  },
  {
    name: "Michael Anderson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jJm8I1Y7ScxGsjHIje8S14dzWLU18hC7bA&s",
    content:
      "I was worried about the cost, but it's been worth it. The increase in views and engagement on my Hindi channel is clear.",
  },
  {
    name: "Amanda Martinez",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovH25CYLeDFwlkH_qF4_FNvhus8RcxJq0rg&s",
    content:
      "What I love about Vidoro is how easy they make the whole process. It's like having an extension of my own team.",
  },
  {
    name: "Jason Smith",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1P8RPg3H6sbj40agtWZfkYlTars7z9Is4sQ&s",
    content:
      "My translated videos are performing really well. Vidoro's service has opened up a whole new world of opportunities for my channel.",
  },
]

const TestimonialCard = ({
  name,
  image,
  content,
}: {
  name: string | JSX.Element
  image: string
  content: string
}) => (
  <Card className="min-w-[400px] bg-zinc-1700/50 border-zinc-800 mx-4">
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={image} alt={typeof name === 'string' ? name : 'Creator'} />
          <AvatarFallback>
            {typeof name === 'string' ? name[0] : 'C'}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-lg text-white">{name}</h3>
      </div>
      <p className="text-zinc-400 leading-relaxed">{content}</p>
    </CardContent>
  </Card>
)

export default function TestimonialSection() {
  const firstHalf = testimonials.slice(0, 5)
  const secondHalf = testimonials.slice(5)

  return (
    <section className="py-24 bg-black overflow-hidden">
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .scroll-row {
          display: flex;
          width: fit-content;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        .scroll-left {
          animation: scrollLeft 60s linear infinite;
        }
        
        .scroll-right {
          animation: scrollRight 60s linear infinite;
        }
      `}</style>

      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          Loved by Creators
        </h2>
        <p className="text-xl text-zinc-400">Vidoro is popular among creators worldwide.</p>
      </div>

      <div className="relative scroll-container">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Top Row */}
        <div className="overflow-hidden mb-8">
          <div className="scroll-row scroll-left">
            <div className="flex">
              {firstHalf.map((item, i) => (
                <TestimonialCard key={i} {...item} />
              ))}
            </div>
            <div className="flex">
              {firstHalf.map((item, i) => (
                <TestimonialCard key={`clone-${i}`} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="overflow-hidden">
          <div className="scroll-row scroll-right">
            <div className="flex">
              {secondHalf.map((item, i) => (
                <TestimonialCard key={i} {...item} />
              ))}
            </div>
            <div className="flex">
              {secondHalf.map((item, i) => (
                <TestimonialCard key={`clone-${i}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-32">
        <CounterAnimation end={1700} duration={2.5} />
      </div>
    </section>
  )
}
