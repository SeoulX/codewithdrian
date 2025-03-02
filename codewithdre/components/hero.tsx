"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { User } from "@/lib/user"

export default function Hero() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("/api/user")
      const data = await response.json()
      console.log("API Response:", data)
      setUser(data[0])
    }
    fetchUser()
  }, [])

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20" />

      {/* Content */}
      <div className="container px-4 md:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            {user ? user.name : "Loading..."}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Computer Science Student & Full-Stack Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#projects">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                View Projects
              </Button>
            </Link>
            <a href="/CV_Biñas_Andrian.pdf" download="Andrian_Binas_Resume.pdf">
              <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </Link>
      </motion.div>
    </section>
  )
}

