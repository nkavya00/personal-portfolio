"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Mental Health Tracker App",
      description:
        "A React Native app that helps students track their mental health and connect with campus resources. Built for my Psychology research project.",
      image: "https://your-image-url.com/project1.jpg", // Replace with your project screenshot
      technologies: ["React Native", "Firebase", "Node.js", "Psychology Research"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      color: "from-orange-500 to-pink-500",
    },
    {
      title: "Campus Event Finder",
      description:
        "A web platform that aggregates campus events and helps students discover activities based on their interests. Winner of UMich Hackathon 2023.",
      image: "https://your-image-url.com/project1.jpg", // Replace with your project screenshot
      technologies: ["React", "Express.js", "MongoDB", "Web Scraping"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      color: "from-pink-500 to-orange-500",
    },
    {
      title: "Study Group Matcher",
      description:
        "An algorithm that matches students for study groups based on learning styles, schedules, and course performance data.",
      image: "https://your-image-url.com/project1.jpg", // Replace with your project screenshot
      technologies: ["Python", "Machine Learning", "Django", "Data Analysis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      color: "from-orange-400 to-pink-400",
    },
    {
      title: "Personal Finance Dashboard",
      description:
        "A budgeting app designed specifically for college students, with features for tracking expenses, splitting bills, and saving goals.",
      image: "https://your-image-url.com/project1.jpg", // Replace with your project screenshot
      technologies: ["Vue.js", "Chart.js", "Firebase", "Plaid API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      color: "from-pink-400 to-orange-400",
    },
  ]

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are some projects I've worked on during my studies, combining my interests in technology and
            psychology.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg h-full">
                  <motion.div
                    className="aspect-video overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </motion.div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div key={techIndex} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                          <Badge
                            variant="secondary"
                            className="hover:bg-muted-foreground/20 transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          asChild
                          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild className="border-2 hover:bg-muted/50">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    </div>
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
