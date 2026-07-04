"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Repeat,
  BarChart3,
  LogOut,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-blue-900 to-indigo-900 text-white p-6 shadow-xl">

        <h1 className="text-3xl font-extrabold mb-10">
          📚 SmartLibrary
        </h1>

        <nav className="space-y-3">

          <Link
            href="/dashboard"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/books"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition"
          >
            <BookOpen size={20} />
            Books
          </Link>

          <Link
            href="/students"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition"
          >
            <Users size={20} />
            Students
          </Link>

          <Link
            href="/borrowings"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition"
          >
            <Repeat size={20} />
            Borrowings
          </Link>

          <Link
            href="/reports"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition"
          >
            <BarChart3 size={20} />
            Reports
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500 transition mt-8"
          >
            <LogOut size={20} />
            Logout
          </Link>

        </nav>

      </aside>

      {/* Main Content */}

      <main className="flex-1 p-10">

        <div className="mb-10">

          <h1 className="text-4xl font-extrabold text-slate-900">
            Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Welcome to SmartLibrary. Manage your library efficiently.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Books
                </p>

                <h2 className="text-4xl font-bold text-slate-900 mt-2">
                  0
                </h2>

              </div>

              <BookOpen
                size={42}
                className="text-blue-600"
              />

            </div>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Students
                </p>

                <h2 className="text-4xl font-bold text-slate-900 mt-2">
                  0
                </h2>

              </div>

              <Users
                size={42}
                className="text-green-600"
              />

            </div>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Borrowed
                </p>

                <h2 className="text-4xl font-bold text-slate-900 mt-2">
                  0
                </h2>

              </div>

              <Repeat
                size={42}
                className="text-orange-500"
              />

            </div>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Overdue
                </p>

                <h2 className="text-4xl font-bold text-slate-900 mt-2">
                  0
                </h2>

              </div>

              <BarChart3
                size={42}
                className="text-red-500"
              />

            </div>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-white rounded-2xl shadow mt-10 p-8">

          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">

              <span className="text-gray-700">
                📚 No books have been borrowed yet.
              </span>

              <span className="text-gray-400">
                Today
              </span>

            </div>

            <div className="flex justify-between border-b pb-3">

              <span className="text-gray-700">
                👨‍🎓 Student records will appear here.
              </span>

              <span className="text-gray-400">
                --
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-700">
                📊 Reports will update automatically.
              </span>

              <span className="text-gray-400">
                --
              </span>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}