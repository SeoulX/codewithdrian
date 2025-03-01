// import Hero from "@/components/hero"
// import About from "@/components/about"
// import Skills from "@/components/skills"
// import Projects from "@/components/projects"
// import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CodewithDrian",
  description:
    "Computer Science professional and Full-Stack Developer portfolio showcasing projects in React.js, Python, and MongoDB",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </main>
  )
}

