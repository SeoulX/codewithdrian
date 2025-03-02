import clientPromise from "./mongodb"
import { ObjectId } from "mongodb"

// Define User Interface
export interface User {
  _id: ObjectId
  name: string
  nickname: string
  email: string
  contact: string
  location: string
}

// Fetch all users
export async function getAllUsers(): Promise<User[]> {
  const client = await clientPromise
  const db = client.db("Portfolio")
  return db.collection("user").find({}).toArray() as Promise<User[]>
}

// Fetch user by ID
export async function getUserById(id: string): Promise<User | null> {
  const client = await clientPromise
  const db = client.db("Portfolio")

  return db.collection("user").findOne({ _id: new ObjectId(id) }) as Promise<User | null>
}

// Fetch user by Email
export async function getUserByEmail(email: string): Promise<User | null> {
  const client = await clientPromise
  const db = client.db("Portfolio")

  return db.collection("user").findOne({ email }) as Promise<User | null>
}
