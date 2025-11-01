import { type NextRequest, NextResponse } from "next/server"

// In-memory storage (replace with MongoDB in production)
export const themes: Array<{
  _id: string
  accentColor: string
  primaryColor: string
  savedAt: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { accentColor, primaryColor } = body

    if (!accentColor || !primaryColor) {
      return NextResponse.json({ error: "Missing required fields: accentColor, primaryColor" }, { status: 400 })
    }

    const newTheme = {
      _id: Math.random().toString(36).substring(7),
      accentColor,
      primaryColor,
      savedAt: new Date().toISOString(),
    }

    themes.push(newTheme)

    return NextResponse.json(newTheme, { status: 201 })
  } catch (error) {
    console.error("Error in POST /api/themes:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    return NextResponse.json(themes, { status: 200 })
  } catch (error) {
    console.error("Error in GET /api/themes:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
