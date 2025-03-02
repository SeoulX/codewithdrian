"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/projects"

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/api/projects")
      const data = await response.json()
      console.log("API Response PRoject:", data)
      setProjects(data)
    }
    fetchProjects()
  }, [])

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    if (filter === "featured") return project.featured
    return project.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
  })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Explore my portfolio of projects showcasing my skills in React.js, Python, and MongoDB.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "featured", "react", "python", "mongodb", "machine learning"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-gradient-to-r from-purple-600 to-pink-600" : ""}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project._id.toString()}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Link href={`/projects/${project.id}`}>
                    <Button size="sm" className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600">
                      <ExternalLink className="h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-gray-300 dark:border-gray-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

