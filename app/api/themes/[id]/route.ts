import { NextRequest, NextResponse } from "next/server";
import { themes } from "../route";

// The context object type is correct for Next.js 16 API routes
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // Lookup in shared in-memory themes (simulates DB)
    const theme = themes.find((t: {
      _id: string;
      accentColor: string;
      primaryColor: string;
      savedAt: string;
    }) => t._id === id);

    if (!theme) {
      return NextResponse.json({ error: "Theme not found" }, { status: 404 });
    }

    return NextResponse.json(theme, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
