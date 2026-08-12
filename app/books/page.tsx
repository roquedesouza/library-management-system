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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadBooks() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/books");
      const data = await res.json();

      if (!res.ok) {
        setBooks([]);
        setError(
          data?.error ||
            "Could not load books. Database may be unavailable."
        );
        return;
      }

      if (Array.isArray(data)) {
        setBooks(data);
      } else {
        setBooks([]);
        setError("Unexpected response from server.");
      }
    } catch {
      setBooks([]);
      setError("Network error while loading books.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteBook(id: number) {
    const ok = confirm("Delete this book?");
    if (!ok) return;

    try {
      const res = await fetch(`/api/books?id=${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data?.error || "Failed to delete book.");
        return;
      }
      loadBooks();
    } catch {
      alert("Network error while deleting book.");
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
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

      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            📚 Books Management
          </h2>
          <p className="text-gray-600">
            Add, update and organize all books available in your library.
          </p>
        </div>

        {error && (
          <div className="mb-8 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-900">
            <p className="font-semibold">Database connection issue</p>
            <p className="mt-1 text-sm">{error}</p>
            <p className="mt-2 text-sm text-amber-800">
              The page still loads. Fix <code>DATABASE_URL</code> in Vercel
              (point it to a running Postgres) and redeploy, then data will work.
            </p>
            <button
              onClick={loadBooks}
              className="mt-3 rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
            >
              Retry
            </button>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <BookForm onBookAdded={loadBooks} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {loading ? (
            <p className="text-center text-gray-500 py-8">Loading books…</p>
          ) : (
            <BooksTable books={books} onDelete={deleteBook} />
          )}
        </div>
      </div>
    </div>
  );
}
