"use client";

import { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 mb-8 grid grid-cols-2 gap-4"
    >
      <input
        type="text"
        placeholder="Title"
        className="border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        type="text"
        placeholder="Author"
        className="border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <input
        type="text"
        placeholder="Category"
        className="border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <input
        type="text"
        placeholder="ISBN"
        className="border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.isbn}
        onChange={(e) => setForm({ ...form, isbn: e.target.value })}
      />

      <input
        type="text"
        placeholder="Publisher"
        className="border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.publisher}
        onChange={(e) => setForm({ ...form, publisher: e.target.value })}
      />

      <input
        type="number"
        placeholder="Year"
        className="border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.publishedAt}
        onChange={(e) =>
          setForm({ ...form, publishedAt: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Quantity"
        className="border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.quantity}
        onChange={(e) =>
          setForm({ ...form, quantity: e.target.value })
        }
      />

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg p-3 transition"
      >
        Save Book
      </button>
    </form>
  );
}