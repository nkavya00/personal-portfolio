"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Travels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const travels = [
    {
      location: "Tokyo, Japan",
      caption: "Cherry blossoms and incredible ramen",
      image: "https://your-image-url.com/tokyo.jpg", // Replace with your actual URL
      size: "large",
    },
    {
      location: "Paris, France",
      caption: "Art, croissants, and endless museums",
      image: "https://your-image-url.com/paris.jpg", // Replace with your actual URL
      size: "medium",
    },
    {
      location: "Bali, Indonesia",
      caption: "Stunning temples and peaceful beaches",
      image: "/placeholder.svg?height=300&width=300",
      size: "medium",
    },
    {
      location: "New York City",
      caption: "The city that never sleeps",
      image: "/placeholder.svg?height=200&width=300",
      size: "small",
    },
    {
      location: "Iceland",
      caption: "Northern lights and hot springs",
      image: "/placeholder.svg?height=200&width=300",
      size: "small",
    },
    {
      location: "Morocco",
      caption: "Vibrant markets and desert adventures",
      image: "/placeholder.svg?height=300&width=400",
      size: "wide", // spans 2x1
    },
    {
      location: "Thailand",
      caption: "Tropical paradise and amazing food",
      image: "/placeholder.svg?height=200&width=200",
      size: "small",
    },
    {
      location: "Greece",
      caption: "Ancient history and beautiful islands",
      image: "/placeholder.svg?height=300&width=300",
      size: "medium",
    },
  ]

  const getGridClass = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2"
      case "wide":
        return "col-span-2 row-span-1"
      case "medium":
        return "col-span-1 row-span-2"
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
    <section id="travels" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            My Travels
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exploring the world has taught me so much about different cultures, perspectives, and myself. Here are some
            of my favorite adventures.
          </motion.p>

          <div className="grid grid-cols-4 auto-rows-[200px] gap-4">
            {travels.map((travel, index) => (
              <motion.div
                key={index}
                className={`${getGridClass(travel.size)} relative overflow-hidden rounded-2xl cursor-pointer group`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={travel.image || "/placeholder.svg"}
                  alt={travel.location}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredIndex === index ? "blur-sm scale-110" : "blur-0 scale-100"
                  }`}
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Content overlay */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    {travel.location}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{travel.caption}</p>
                </motion.div>

                {/* Subtle border glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                    hoveredIndex === index ? "ring-2 ring-orange-500/50 ring-offset-2 ring-offset-background" : ""
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
