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
      title: "Product & Research Intern",
      company: "Lawrence AI",
      location: "Remote",
      period: "Apr 2025 – Present",
      description:
        "Building the backend of an AI tool for lawyers, integrating NLP features to streamline legal workflows and document review. Collaborating with legal professionals to ensure product-market fit and ethical alignment through user interviews and competitive analysis.",
      skills: ["Python", "NLP", "Backend", "User Research", "Legal Tech"],
      type: "internship",
    },
    {
      title: "Product Manager Intern",
      company: "Wootera Digital Technologies",
      location: "Prague, Czech Republic",
      period: "Jan 2025 – May 2025",
      description:
        "Led end-to-end development of an interactive healthcare app, coordinating design, engineering, and marketing teams. Conducted 25+ user interviews, developed go-to-market strategy, and defined KPIs to measure engagement and cost reduction.",
      skills: ["Product Management", "Healthcare", "User Interviews", "Go-to-Market", "KPIs"],
      type: "internship",
    },
    {
      title: "Research Assistant",
      company: "UofM School of Information",
      location: "Ann Arbor, MI",
      period: "May 2024 – Present",
      description:
        "Researched deepfake sexual abuse content and takedown speed disparities across major platforms. Deployed 50+ deepfake images using AWS Lambda & EC2 to measure takedown latency. Conducting independent research on adolescent mental health harms driven by algorithmic content.",
      skills: ["AWS", "Research", "Data Analysis", "Policy", "Algorithmic Accountability"],
      type: "research",
    },
    {
      title: "Research Assistant",
      company: "Cognition, Control and Action (CoCoA) Lab",
      location: "Ann Arbor, MI",
      period: "May 2024 – Present",
      description:
        "Piloting a cognitive experiment with 50+ participants to analyze how internal vs. external focus impacts accuracy. Conducted extensive literature review and revised experimental design for methodological rigor.",
      skills: ["Research", "Experiment Design", "Cognitive Science"],
      type: "research",
    },
    {
      title: "Product Research Intern",
      company: "The Weil Institute at UofM",
      location: "Ann Arbor, MI",
      period: "Jan 2024 – May 2024",
      description:
        "Conducted 15+ user interviews with doctors and patients to define key features for a health tracker dashboard. Designed interactive mockups in Figma, React, and HTML, improving usability and provider-patient workflow.",
      skills: ["User Research", "Figma", "React", "Healthcare", "UI/UX"],
      type: "internship",
    },
    {
      title: "Lead, Marriage Pact University of Michigan",
      company: "Marriage Pact",
      location: "Ann Arbor, MI",
      period: "Nov 2024 – Present",
      description:
        "Launched Marriage Pact at UofM, a science-based matchmaking algorithm, driving 15,000+ sign-ups through outreach, marketing, and campus promotion. Designed matching questions to optimize pairings.",
      skills: ["Leadership", "Marketing", "Algorithm Design", "Community Building"],
      type: "leadership",
    },
    {
      title: "Ignite Scholar",
      company: "Teach for America",
      location: "Remote",
      period: "Jan 2025 – Present",
      description:
        "Selected from 1,000+ applicants to teach 7th-grade geometry 4x/week to underprivileged students, developing curriculum and mentoring to improve math skills and academic confidence.",
      skills: ["Teaching", "Mentoring", "Curriculum Development"],
      type: "teaching",
    },
    {
      title: "Director of Women's Empowerment & DEI",
      company: "Kappa Theta Pi",
      location: "Ann Arbor, MI",
      period: "Jan 2023 – Jan 2024",
      description:
        "Organized DEI panels for 100+, fostering diversity in tech.",
      skills: ["DEI", "Event Planning", "Leadership"],
      type: "leadership",
    },
    {
      title: "VP of Social Engagement",
      company: "Atlas Digital Consulting",
      location: "Ann Arbor, MI",
      period: "Jan 2024 – Dec 2024",
      description:
        "Planned 15+ events, including a 55-person Chicago trek. Built relationships with Google & Caxy reps to secure office visits, Q&A sessions, and networking events.",
      skills: ["Event Planning", "Networking", "Leadership"],
      type: "leadership",
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
