import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Travels } from "@/components/travels"
import { Passions } from "@/components/passions"
import { Experiences } from "@/components/experiences"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Travels />
      <Passions />
      <Experiences />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
