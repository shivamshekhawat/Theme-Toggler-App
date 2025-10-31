import { type NextRequest, NextResponse } from "next/server"

// Mock data - in production this would be from MongoDB
const themes: Record<string, { _id: string; accentColor: string; primaryColor: string; savedAt: string }> = {}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    const theme = themes[id]

    if (!theme) {
      return NextResponse.json({ error: "Theme not found" }, { status: 404 })
    }

    return NextResponse.json(theme, { status: 200 })
  } catch (error) {
    console.error("Error in GET /api/themes/[id]:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
