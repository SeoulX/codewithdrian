"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
      <div className="container px-8 md:px-12 lg:px-0 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-3"></div>
            <Image
              src="/img/profile.png"
              alt="Andrian Biñas"
              width={400}
              height={400}
              className="relative rounded-2xl object-cover z-10 transform -rotate-3 transition-transform duration-300 hover:rotate-0"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate Computer Science professional with expertise in full-stack development. With a strong
              foundation in algorithms, data structures, and software architecture, I create elegant solutions to
              complex problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in tech began at [University Name], where I earned my degree in Computer Science. Since then,
              I've worked with various technologies including React.js, Python, and MongoDB to build scalable and
              efficient applications.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

