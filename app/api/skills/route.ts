import { NextResponse } from "next/server"
import { getAllSkills } from "@/lib/skills"

export async function GET() {
  try {
    const skills = await getAllSkills()
    return NextResponse.json(skills)
  } catch (error) {
    console.error("Error fetching skills:", error)
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 })
  }
}