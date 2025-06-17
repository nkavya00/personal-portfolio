"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Palette, Server, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe Creative Suite", level: 80 },
        { name: "User Research", level: 75 },
        { name: "Prototyping", level: 80 },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 65 },
      ],
    },
  ]

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newValues: { [key: string]: number } = {}
        skillCategories.forEach((category) => {
          category.skills.forEach((skill) => {
            newValues[skill.name] = skill.level
          })
        })
        setAnimatedValues(newValues)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <motion.div
                        className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.icon}
                      </motion.div>
                      <span className="text-xl">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-base">{skill.name}</span>
                          <motion.span
                            className="text-muted-foreground font-semibold"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.4, delay: 1 + skillIndex * 0.1 }}
                          >
                            {animatedValues[skill.name] || 0}%
                          </motion.span>
                        </div>
                        <div className="relative">
                          <Progress value={animatedValues[skill.name] || 0} className="h-3 bg-muted" />
                          <motion.div
                            className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
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
