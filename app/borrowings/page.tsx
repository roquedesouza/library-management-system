"use client";

import { ArrowLeftRight, BookOpen, Calendar, User, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BorrowingsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg">

        <div className="max-w-7xl mx-auto px-8 py-8">

          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 hover:bg-white/30 transition"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <h1 className="flex items-center gap-3 text-4xl font-extrabold">
            <ArrowLeftRight size={40} />
            SmartLibrary
          </h1>

          <p className="mt-2 text-orange-100">
            Manage book borrowing and returns.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-8">

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-3xl font-bold text-slate-900">
            🔄 Borrow Books
          </h2>

          <p className="text-gray-600 mt-2">
            Record borrowed books and manage return dates.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Student
              </label>

              <div className="flex items-center border rounded-xl p-3">
                <User className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Student Name"
                  className="w-full outline-none text-gray-800"
                />
              </div>

            </div>

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Book
              </label>

              <div className="flex items-center border rounded-xl p-3">
                <BookOpen className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Book Title"
                  className="w-full outline-none text-gray-800"
                />
              </div>

            </div>

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Borrow Date
              </label>

              <div className="flex items-center border rounded-xl p-3">
                <Calendar className="text-gray-500 mr-3" />
                <input
                  type="date"
                  className="w-full outline-none text-gray-800"
                />
              </div>

            </div>

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Return Date
              </label>

              <div className="flex items-center border rounded-xl p-3">
                <Calendar className="text-gray-500 mr-3" />
                <input
                  type="date"
                  className="w-full outline-none text-gray-800"
                />
              </div>

            </div>

          </div>

          <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 py-4 text-lg font-semibold text-white hover:scale-[1.02] transition">
            📚 Record Borrowing
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-5">

            <h2 className="text-2xl font-bold text-white">
              Borrowing Records
            </h2>

            <p className="text-orange-100 mt-1">
              All borrowed books will appear here.
            </p>

          </div>

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left text-gray-700">Student</th>
                <th className="p-4 text-left text-gray-700">Book</th>
                <th className="p-4 text-left text-gray-700">Borrow Date</th>
                <th className="p-4 text-left text-gray-700">Return Date</th>
                <th className="p-4 text-center text-gray-700">Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td
                  colSpan={5}
                  className="py-12 text-center text-gray-500 text-lg"
                >
                  📚 No borrowing records yet.
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}