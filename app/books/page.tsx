"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
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
  const router = useRouter();

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
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">

        <div className="max-w-7xl mx-auto px-8 py-8">

          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 hover:bg-white/30 transition"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <h1 className="flex items-center gap-3 text-4xl font-extrabold">
            <BookOpen size={40} />
            SmartLibrary
          </h1>

          <p className="mt-2 text-blue-100">
            Manage your library collection quickly and efficiently.
          </p>

        </div>

      </div>

      {/* Main */}

      <div className="max-w-7xl mx-auto p-8">

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            📚 Books Management
          </h2>

          <p className="text-gray-600">
            Add, update and organize all books available in your library.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <BookForm onBookAdded={loadBooks} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <BooksTable
            books={books}
            onDelete={deleteBook}
          />
        </div>

      </div>

    </div>
  );
}