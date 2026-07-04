"use client";

import { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BooksTable from "./components/BooksTable";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  isbn: string;
  quantity: number;
  available: number;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  async function loadBooks() {
    const res = await fetch("/api/books");
    const data = await res.json();
    setBooks(data);
  }

  async function deleteBook(id: number) {
    const ok = confirm("Delete this book?");

    if (!ok) return;

    await fetch(`/api/books?id=${id}`, {
      method: "DELETE",
    });

    loadBooks();
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">
          📚 Books Management
        </h1>
      </div>

      <BookForm onBookAdded={loadBooks} />

      <BooksTable
        books={books}
        onDelete={deleteBook}
      />

    </div>
  );
}