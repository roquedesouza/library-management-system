import { NextRequest, NextResponse } from "next/server";

// Simple hard-coded admin for reliability when DB is down.
// Username: admin  |  Password: admin1234
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin1234";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const username = String(body.username || "").trim();
    const password = String(body.password || "");

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      return NextResponse.json({
        success: true,
        token: "smartlibrary-admin-token",
        user: { username: ADMIN_USER },
      });
    }

    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: "Login failed. Please try again." },
      { status: 500 }
    );
  }
}
