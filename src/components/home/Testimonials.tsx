"use client"

import { motion } from "framer-motion"
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
    name: "Sarah Chen",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "This platform has revolutionized my creative process. The intuitive interface and powerful features make it a joy to use every day.",
  },
  {
    name: "Marcus Rodriguez",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The speed and efficiency are incredible. It's like having a creative partner that understands exactly what I need.",
  },
  {
    name: "Emma Thompson",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "I've tried many tools, but this one stands out. The attention to detail and user experience is unmatched.",
  },
  {
    name: "Alex Kumar",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Game-changing platform that has transformed how I approach my creative projects. Couldn't imagine working without it now.",
  },
  {
    name: "Lisa Wang",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Absolutely brilliant! The features are exactly what I needed, and the support team is incredibly responsive.",
  },
  // Bottom row
  {
    name: "James Mitchell",
    image: "/placeholder.svg?height=80&width=80",
    content: "This tool has become an essential part of my daily workflow. The AI capabilities are truly next level.",
  },
  {
    name: "Nina Patel",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Outstanding platform that consistently delivers beyond expectations. The regular updates keep making it better.",
  },
  {
    name: "David Kim",
    image: "/placeholder.svg?height=80&width=80",
    content: "The seamless integration with my existing tools makes this platform indispensable. Highly recommended!",
  },
  {
    name: "Rachel Foster",
    image: "/placeholder.svg?height=80&width=80",
    content: "Incredible attention to detail in every feature. It's clear the team really understands creators' needs.",
  },
  {
    name: "Michael Torres",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "This platform has streamlined my entire creative process. The time savings alone make it worth every penny.",
  },
]

const TestimonialCard = ({
  name,
  image,
  content,
}: {
  name: string
  image: string
  content: string
}) => (
  <Card className="min-w-[400px] bg-zinc-900/50 border-zinc-800 mx-4">
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
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
      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          Loved by Creators
        </h2>
        <p className="text-xl text-zinc-400">Vidoro is popular among creators worldwide.</p>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Top Row */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex"
          >
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
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex"
          >
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
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto mt-32">
        <CounterAnimation end={900} duration={2.5} />
      </div>
    </section>
  )
}