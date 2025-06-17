"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Experiences() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "TechStart Inc.",
      location: "San Francisco, CA",
      period: "Summer 2023",
      description:
        "Developed user-facing features for a mental health platform, working with React and Node.js. Collaborated with UX designers to improve user engagement by 40%.",
      skills: ["React", "Node.js", "MongoDB", "Agile"],
      type: "internship",
    },
    {
      title: "Research Assistant",
      company: "UMich Psychology Department",
      location: "Ann Arbor, MI",
      period: "Sept 2022 - Present",
      description:
        "Conducting research on digital wellness and social media's impact on student mental health. Co-authored 2 papers and presented findings at undergraduate research symposium.",
      skills: ["Research", "Data Analysis", "Python", "SPSS"],
      type: "research",
    },
    {
      title: "Teaching Assistant",
      company: "EECS 183: Elementary Programming",
      location: "University of Michigan",
      period: "Jan 2023 - May 2023",
      description:
        "Mentored 30+ students in introductory programming concepts. Led lab sessions and office hours, helping students debug code and understand fundamental CS concepts.",
      skills: ["Teaching", "C++", "Mentoring", "Communication"],
      type: "academic",
    },
    {
      title: "Hackathon Winner",
      company: "MHacks 2023",
      location: "Ann Arbor, MI",
      period: "October 2023",
      description:
        "Led a team of 4 to build a campus event discovery app. Won 'Best Social Impact' award for creating a solution that helps students find community and reduce isolation.",
      skills: ["Leadership", "React Native", "Firebase", "Design"],
      type: "achievement",
    },
    {
      title: "Volunteer Coordinator",
      company: "Local Food Bank",
      location: "Ann Arbor, MI",
      period: "Sept 2021 - Present",
      description:
        "Organize weekly volunteer sessions and coordinate with 50+ student volunteers. Helped distribute over 10,000 meals to families in need during the pandemic.",
      skills: ["Leadership", "Organization", "Community Service"],
      type: "volunteer",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return "from-orange-500 to-pink-500"
      case "research":
        return "from-pink-500 to-orange-500"
      case "academic":
        return "from-orange-400 to-pink-400"
      case "achievement":
        return "from-pink-400 to-orange-400"
      case "volunteer":
        return "from-orange-600 to-pink-600"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "internship":
        return "Internship"
      case "research":
        return "Research"
      case "academic":
        return "Academic"
      case "achievement":
        return "Achievement"
      case "volunteer":
        return "Volunteer"
      default:
        return "Experience"
    }
  }

  return (
    <section id="experiences" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            My Experiences
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From internships to research projects, here's how I've been applying my skills and growing as a student and
            professional.
          </motion.p>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={`bg-gradient-to-r ${getTypeColor(experience.type)} text-white border-0`}>
                            {getTypeLabel(experience.type)}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-foreground">
                          {experience.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="hover:bg-muted-foreground/20 transition-colors">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
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
