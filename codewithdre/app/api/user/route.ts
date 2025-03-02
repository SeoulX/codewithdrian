import { NextResponse } from "next/server"
import { getAllUsers } from "@/lib/user"

export async function GET() {
  try {
    const user = await getAllUsers()
    return NextResponse.json(user)
  } catch (error) {
    console.error("Error fetching user:", error)
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 })
  }
}