import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProjectById } from "@/lib/projects"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectById(Number.parseInt(params.id))

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectById(Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-20 md:py-24">
      <Link
        href="/#projects"
        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">{project.description}</p>
            <h2>Project Overview</h2>
            <p>
              This project was built using a combination of modern technologies including React.js, Python, and MongoDB.
              It demonstrates my ability to create full-stack applications with clean, maintainable code and intuitive
              user interfaces.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>Responsive design that works across all devices</li>
              <li>Intuitive user interface with smooth animations</li>
              <li>Secure authentication and data storage</li>
              <li>Optimized performance for fast load times</li>
              <li>Comprehensive test coverage for reliability</li>
            </ul>

            <h2>Technical Details</h2>
            <p>
              The frontend is built with React.js and Next.js, utilizing server components for improved performance. The
              backend uses Python with FastAPI to provide a robust API layer, while MongoDB serves as the database for
              storing and retrieving data efficiently.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Project Details</h3>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Type</h4>
                <p className="text-gray-900 dark:text-gray-100">Full-Stack Application</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Timeline</h4>
                <p className="text-gray-900 dark:text-gray-100">4 weeks</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</h4>
                <p className="text-gray-900 dark:text-gray-100">Full-Stack Developer</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

