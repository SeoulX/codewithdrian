import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

// This would connect to your MongoDB instance
// In a real application, you would use environment variables for the connection string
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio"
const client = new MongoClient(uri)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the request body
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Connect to MongoDB
    await client.connect()
    const database = client.db("portfolio")
    const messages = database.collection("messages")

    // Insert the message into the database
    const result = await messages.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true, messageId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error saving message:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  } finally {
    // Close the connection
    await client.close()
  }
}

