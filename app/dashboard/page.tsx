"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">📚 Library LMS</h1>

        <nav className="space-y-4">
          <Link href="/dashboard" className="block hover:text-yellow-300">
            🏠 Dashboard
          </Link>

          <Link href="/books" className="block hover:text-yellow-300">
            📚 Books
          </Link>

          <Link href="/students" className="block hover:text-yellow-300">
            👨‍🎓 Students
          </Link>

          <Link href="/borrowings" className="block hover:text-yellow-300">
            🔄 Borrowings
          </Link>

          <Link href="/reports" className="block hover:text-yellow-300">
            📊 Reports
          </Link>

          <Link href="/login" className="block hover:text-red-300">
            🚪 Logout
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Library Dashboard
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Books</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Students</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Borrowed</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Overdue</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

        </div>

        <div className="bg-white mt-10 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Recent Activity
          </h2>

          <p>No borrowing records yet.</p>
        </div>
      </main>
    </div>
  );
}