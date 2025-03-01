"use client"

import { motion } from "framer-motion"
import { Database, Code2, Server, Cpu, LineChart, BrainCircuit, Globe, Layers } from "lucide-react"

const skills = [
  {
    category: "Frontend Development",
    icon: <Code2 className="h-6 w-6" />,
    items: ["React.js", "Next.js", "HTML5/CSS3", "JavaScript/TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    items: ["Python", "Django", "Flask", "Node.js", "Express"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    category: "Computer Science",
    icon: <Cpu className="h-6 w-6" />,
    items: ["Algorithms", "Data Structures", "System Design", "OOP", "Design Patterns"],
  },
  {
    category: "Data Science",
    icon: <LineChart className="h-6 w-6" />,
    items: ["NumPy", "Pandas", "Matplotlib", "Data Analysis", "Visualization"],
  },
  {
    category: "Machine Learning",
    icon: <BrainCircuit className="h-6 w-6" />,
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
  },
  {
    category: "DevOps",
    icon: <Globe className="h-6 w-6" />,
    items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Vercel"],
  },
  {
    category: "Tools & Others",
    icon: <Layers className="h-6 w-6" />,
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
]

export default function Skills() {
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

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Expertise</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My technical toolkit spans across various domains of computer science and software development.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-md text-white mr-3">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

