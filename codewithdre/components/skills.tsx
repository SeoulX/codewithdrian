"use client"

import { motion } from "framer-motion"
import { Database, Code2, Server, Cpu, LineChart, BrainCircuit, Globe, Layers } from "lucide-react"
import React, { JSX, useEffect, useState } from "react"
import type { Skills } from "@/lib/skills"



export default function Skills() {
  const [skills, setSkills] = useState<Skills[] | null>(null)

  useEffect(() => {
    async function fetchSkills() {
      const response = await fetch("/api/skills")
      const data = await response.json()
      console.log("API Response:", data)
      setSkills(data)
    }
    fetchSkills()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const skillIcons: Record<string, JSX.Element> = {
    "Cloud Computing": <Server size={20} />,
    Programming: <Code2 size={20} />,
    "AI & ML": <BrainCircuit size={20} />,
    "Web Development": <Globe size={20} />,
    "Data Annotation": <Layers size={20} />,
    Databases: <Database size={20} />,
    "Development Tools": <Cpu size={20} />,
    "Data Visualization": <LineChart size={20} />,
  };

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Expertise</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My technical toolkit spans across various domains of computer science and software development.
          </p>
        </div>
        {!skills ? (
          <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            {...({} as any)}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
                {...({} as any)}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-md text-white mr-3">
                    {skillIcons[skill.category] || <Cpu size={20} />} {/* Fallback icon */}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.skills.map((item, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

