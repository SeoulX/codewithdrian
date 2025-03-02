import clientPromise from "./mongodb"
import { ObjectId } from "mongodb"

// Define User Interface
export interface Skills {
  _id: ObjectId
  category: string
  skills: string[]
}

export async function getAllSkills(): Promise<User[]> {
  const client = await clientPromise
  const db = client.db("Portfolio")
  return db.collection("skills").find({}).toArray() as Promise<User[]>
}
