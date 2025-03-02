import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the request body
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db("Portfolio")
    const messages = db.collection("messages")

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
  }
}

