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
      <div className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-[#FF3B3B] to-[#FF0000] text-transparent bg-clip-text">
        {count}M+
      </div>
      <div className="text-xl text-gray-400">Views Generated</div>
    </div>
  )
}

const testimonials = [
  // Top row
  {
    name: "Sarah Miller",
    image: "https://www.economicliberties.us/wp-content/uploads/2022/11/SM-Headshot-2.png",
    content:
      "Our Hindi channel's bringing in new viewers and even sponsors, which is great. Vidoro's been a solid help.",
  },
  {
    name: (
      <a href="https://www.instagram.com/thevarunmayya/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
        Varun Mayya
      </a>
    ),
    image: "https://yt3.ggpht.com/ytc/AIdro_nrZfnUxi_DwFSlJyuQvZN-JWkiZHkgwUaZJPhiIu-ZNLI=s800-c-k-c0x00ffffff-no-rj",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSor30vW4SqoTpWEHKCGuF7Suvm7-TVWlb-Nw&s",
    content:
      "India's a big audience we wanted to tap into. Vidoro helped us do that, made it much easier.",
  },
  {
    name: "Nitish Rajput",
    image: "https://yt3.googleusercontent.com/Q5wDZkznd7zSD2RWT3HU9sqbwNkkkJtXgTxulaJoLAEl-U9-gbcIm6Of1rASj9RBotOedTih=s900-c-k-c0x00ffffff-no-rj",
    content:
      "Vidoro is awesome. They get it.",
  },
  // Bottom row
  {
    name: "David Thompson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_790iFGstZRyTV_G4w5Nqz-884DPh3tj39g&s",
    content: "Glad we found Vidoro. Reaching Indian viewers is way easier now for us.",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jJm8I1Y7ScxGsjHIje8S14dzWLU18hC7bA&s",
    content:
      "Cost was a concern, but it's been worth it for us. Hindi views are up. 🙂",
  },
  {
    name: "Amanda Martinez",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovH25CYLeDFwlkH_qF4_FNvhus8RcxJq0rg&s",
    content:
      "Vidoro makes the whole thing simple. Big time-saver, which I appreciate.",
  },
  {
    name: "Jason Smith",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1P8RPg3H6sbj40agtWZfkYlTars7z9Is4sQ&s",
    content:
      "Translations good. Views up. Worth it yeh.",
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
  <Card className="min-w-[320px] bg-gray-800/60 border border-gray-700 mx-4 rounded-lg shadow-lg">
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
      <p className="text-gray-300 leading-relaxed">{content}</p>
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
        }

        .scroll-left {
          animation: scrollLeft 60s linear infinite;
        }

        .scroll-right {
          animation: scrollRight 60s linear infinite;
        }
      `}</style>

      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          What Creators Are Saying
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Hear from our community of creators leveraging our services to grow their reach.
        </p>
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