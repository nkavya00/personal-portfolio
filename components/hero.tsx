"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Hi, I'm Kavya Narayan"
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 100) // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 min-h-[1.2em]">
              {displayedText.includes("Kavya Narayan") ? (
                <>
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 bg-clip-text text-transparent">
                    Kavya Narayan
                  </span>
                </>
              ) : (
                <>
                  {displayedText}
                  <motion.span
                    className="inline-block w-1 h-[0.8em] bg-gradient-to-r from-orange-500 to-pink-500 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  />
                </>
              )}
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl text-muted-foreground mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isTypingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Computer Science and Psychology at the University of Michigan
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isTypingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I am a senior at the University of Michigan double majoring in Computer Science and Psychology with a minor in Business hoping to work in multidisciplinary tech fields. 
            Scroll to learn more about me -- it's nice to meet you!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTypingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-2 hover:bg-muted/50 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isTypingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-orange-500/10 hover:text-orange-600 transition-colors"
              >
                <a href="https://github.com/nkavya00" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-pink-500/10 hover:text-pink-600 transition-colors"
              >
                <a href="https://www.linkedin.com/in/kavya-narayan00/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-orange-500/10 hover:text-orange-600 transition-colors"
              >
                <a href="mailto:nkavya@umich.edu">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            initial={{ opacity: 0 }}
            animate={isTypingComplete ? { opacity: 1 } : { opacity: 0 }}
          >
            <Button variant="ghost" size="icon" onClick={() => scrollToSection("about")} className="hover:bg-muted/50">
              <ArrowDown className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
