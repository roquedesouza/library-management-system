import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all books
export async function GET() {
  try {
    const books = await prisma.book.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch books." },
      { status: 500 }
    );
  }
}

// ADD a new book
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const book = await prisma.book.create({
      data: {
        title: body.title,
        author: body.author,
        category: body.category,
        isbn: body.isbn,
        publisher: body.publisher || null,
        publishedAt: body.publishedAt
          ? Number(body.publishedAt)
          : null,
        quantity: Number(body.quantity),
        available: Number(body.quantity),
      },
    });

    return NextResponse.json(book);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message || "Failed to create book.",
      },
      { status: 500 }
    );
  }
}

// DELETE a book
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const id = Number(searchParams.get("id"));

    await prisma.book.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message || "Failed to delete book.",
      },
      { status: 500 }
    );
  }
} 