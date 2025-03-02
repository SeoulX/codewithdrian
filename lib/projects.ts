import clientPromise from "./mongodb"
import { ObjectId } from "mongodb"

export interface Project {
  _id: ObjectId
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

export async function getProjects(): Promise<Project[]> {
  const client = await clientPromise
  const db = client.db("Portfolio")
  return db.collection("projects").find({}).toArray() as Promise<Project[]>
}

export async function getAllProjects(): Promise<Project[]> {
  return getProjects()
}

export async function getProjectById(id: string): Promise<Project | null> {
  const client = await clientPromise
  const db = client.db("portfolio")
  return db.collection("projects").findOne({ _id: new ObjectId(id) }) as Promise<Project | null>
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const client = await clientPromise
  const db = client.db("portfolio")
  return db.collection("projects").find({ featured: true }).toArray() as Promise<Project[]>
}

