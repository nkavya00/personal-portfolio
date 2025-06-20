"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Camera, Brain, Gem, Shirt, Mountain } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Passions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const passions = [
    {
      title: "Teaching",
      description: "I love to teach and mentor, and am currently an Ignite Scholar with Teach for America!",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "from-orange-400 to-pink-400",
    },
    {
      title: "Photography",
      description: "Capturing moments and stories through my iconic digi cam, especially during my travels.",
      icon: <Camera className="h-8 w-8" />,
      color: "from-orange-500 to-pink-500",
    },
    {
      title: "Armchair Psychology",
      description: "As the only psychology major out of my friends, I love to overanalyze my group chats and diagnose fictional characters for fun.",
      icon: <Brain className="h-8 w-8" />,
      color: "from-pink-500 to-orange-500",
    },
    {
      title: "Jewelry Making",
      description: "I''m an avid jewelry collector and maker, and love to make custom pieces for myself and others!",
      icon: <Gem className="h-8 w-8" />,
      color: "from-pink-400 to-orange-400",
    },
    {
      title: "Fashion / Thrifting",
      description: "I'm huge on personal style, and love to style others too!",
      icon: <Shirt className="h-8 w-8" />,
      color: "from-orange-600 to-pink-600",
    },
    {
      title: "Hiking",
      description: "I LOVE hike and recently climbed half dome -- ask me all about it!",
      icon: <Mountain className="h-8 w-8" />,
      color: "from-pink-600 to-orange-600",
    },
  ]

  return (
    <section id="passions" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            My Passions
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Beyond academics, these are the things that fuel my creativity and drive my personal growth.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passions.map((passion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <CardHeader className="text-center">
                    <motion.div
                      className={`mx-auto p-4 bg-gradient-to-r ${passion.color} rounded-2xl text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      {passion.icon}
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                      {passion.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base leading-relaxed">
                      {passion.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
