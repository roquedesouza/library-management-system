import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all students
export async function GET() {
  try {
    const students = await prisma.student.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(students);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

// ADD new student
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const student = await prisma.student.create({
      data: {
        fullName: body.fullName,
        admissionNo: body.admissionNo,
        className: body.className,
      },
    });

    return NextResponse.json(student);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE student
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const id = Number(searchParams.get("id"));

    await prisma.student.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}