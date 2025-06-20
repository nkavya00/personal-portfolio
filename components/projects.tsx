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
      title: "Notes App",
      description:
        "A full-stack note-taking application with real-time collaboration features, built with modern web technologies. Features include markdown support, user authentication, and cloud synchronization.",
      image: "/images/download.png", // Corrected image path
      technologies: ["React", "Node.js", "MongoDB", "Express", "Authentication"],
      githubUrl: "https://github.com/nkavya00/notes-app",
      color: "from-orange-500 to-pink-500",
    },
    {
      title: "Finance PWA",
      description:
        "A progressive web app for personal finance management with offline capabilities. Tracks expenses, budgets, and financial goals with an intuitive dashboard and data visualization.",
      image: "/images/istockphoto-1296117554-612x612.jpg", // Corrected image path
      technologies: ["PWA", "React", "Service Workers", "Chart.js", "Local Storage"],
      githubUrl: "https://github.com/nkavya00/finance-pwa",
      color: "from-pink-500 to-orange-500",
    },
    {
      title: "Research Scraping Tool",
      description:
        "An automated web scraping tool designed for academic research, collecting and analyzing data from various sources. Built for psychology research projects and data collection.",
      image: "/images/8132413.png", // Corrected image path
      technologies: ["Python", "Selenium", "Beautiful Soup", "Pandas", "Data Analysis"],
      githubUrl: "https://github.com/nkavya00/research-scraping",
      color: "from-orange-400 to-pink-400",
    },
    {
      title: "Attentional Focus Study",
      description:
        "A cognitive psychology experiment platform studying attentional focus and its impact on task performance. Features real-time data collection and analysis for research purposes. Basis of my honors thesis in Psychology.",
      image: "/images/662-6625093_psychology-clipart-cognitive-psychology-cognitive-psychology-png-transparent.png", // Corrected image path
      technologies: ["Psychopy", "Python", "JavaScript", "Psychology Research", "Data Collection", "Statistical Analysis"],
      githubUrl: "https://github.com/nkavya00/attentional-focus",
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
            I code to make my life easier!
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            These are just some of my favorite coding projects I've done to make my life a bit easier! I love using coding as a tool to automate parts of my life for my own personal learning and convenience. Check out my <a href="https://github.com/nkavya00" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline hover:text-pink-500 transition-colors">Github</a> to see more projects I've worked on!
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
