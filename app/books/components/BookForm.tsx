"use client";

import { useState } from "react";
import { BookPlus } from "lucide-react";

export default function BookForm({
  onBookAdded,
}: {
  onBookAdded: () => void;
}) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
    publisher: "",
    publishedAt: "",
    quantity: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setForm({
      title: "",
      author: "",
      category: "",
      isbn: "",
      publisher: "",
      publishedAt: "",
      quantity: "",
    });

    onBookAdded();
  }

  return (
    <div>

      <div className="flex items-center gap-3 mb-6">

        <BookPlus className="text-blue-700" size={32} />

        <h2 className="text-2xl font-bold text-slate-900">
          Add New Book
        </h2>

      </div>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        {[
          ["Title", "title"],
          ["Author", "author"],
          ["Category", "category"],
          ["ISBN", "isbn"],
          ["Publisher", "publisher"],
        ].map(([label, key]) => (
          <input
            key={key}
            type="text"
            placeholder={label}
            value={(form as any)[key]}
            onChange={(e) =>
              setForm({
                ...form,
                [key]: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition"
          />
        ))}

        <input
          type="number"
          placeholder="Published Year"
          value={form.publishedAt}
          onChange={(e) =>
            setForm({
              ...form,
              publishedAt: e.target.value,
            })
          }
          className="rounded-xl border border-gray-300 bg-white p-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) =>
            setForm({
              ...form,
              quantity: e.target.value,
            })
          }
          className="rounded-xl border border-gray-300 bg-white p-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <button
          type="submit"
          className="md:col-span-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 py-4 text-lg font-semibold text-white shadow-lg hover:scale-[1.02] transition"
        >
          📚 Save Book
        </button>

      </form>

    </div>
  );
}