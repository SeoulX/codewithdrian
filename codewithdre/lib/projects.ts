// This would typically fetch from MongoDB, but for simplicity we're using static data
// In a real app, you'd use MongoDB with Next.js data fetching

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

const projectsData: Project[] = [
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

export async function getProjects() {
  // In a real app, this would fetch from MongoDB
  return projectsData
}

export async function getAllProjects() {
  // In a real app, this would fetch from MongoDB
  return projectsData
}

export async function getProjectById(id: number) {
  // In a real app, this would fetch from MongoDB
  return projectsData.find((project) => project.id === id)
}

export async function getFeaturedProjects() {
  // In a real app, this would fetch from MongoDB
  return projectsData.filter((project) => project.featured)
}

