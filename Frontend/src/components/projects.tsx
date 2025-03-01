"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/projects"

// This would typically come from a server component or API route
const projectsData = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A task management application with AI capabilities to prioritize and categorize tasks automatically.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Python", "MongoDB", "Machine Learning"],
    githubUrl: "https://github.com/johndoe/ai-task-manager",
    liveUrl: "https://ai-task-manager.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with filtering and export capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "D3.js", "Python", "Flask"],
    githubUrl: "https://github.com/johndoe/data-viz-dashboard",
    liveUrl: "https://data-viz-dashboard.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Social Media Analytics Tool",
    description: "Tool for tracking and analyzing social media engagement across multiple platforms.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/johndoe/social-analytics",
    liveUrl: "https://social-analytics.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Real-time Collaboration App",
    description: "Application enabling real-time document editing and collaboration between multiple users.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/johndoe/collab-app",
    liveUrl: "https://collab-app.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description: "Application for tracking personal finances, expenses, and generating insights on spending habits.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Python", "MongoDB", "Pandas"],
    githubUrl: "https://github.com/johndoe/finance-tracker",
    liveUrl: "https://finance-tracker.vercel.app",
    featured: false,
  },
]

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(projectsData)
  const [filter, setFilter] = useState("all")

  // Filter projects based on selected category
  useEffect(() => {
    if (filter === "all") {
      setProjects(projectsData)
    } else if (filter === "featured") {
      setProjects(projectsData.filter((project) => project.featured))
    } else {
      setProjects(
        projectsData.filter((project) => project.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))),
      )
    }
  }, [filter])

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
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
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

