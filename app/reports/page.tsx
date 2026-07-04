"use client";

import {
  BarChart3,
  BookOpen,
  Users,
  ArrowLeftRight,
  TriangleAlert,
  ArrowLeft,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function ReportsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg">

        <div className="max-w-7xl mx-auto px-8 py-8">

          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 hover:bg-white/30 transition"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <h1 className="flex items-center gap-3 text-4xl font-extrabold">
            <BarChart3 size={40} />
            SmartLibrary
          </h1>

          <p className="mt-2 text-purple-100">
            Library reports and statistics.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-8">

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-3xl font-bold text-slate-900">
            📊 Reports Dashboard
          </h2>

          <p className="text-gray-600 mt-2">
            A quick overview of your library performance.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          {[
            ["Total Books", "0", <BookOpen key="1" size={40} className="text-blue-600" />],
            ["Students", "0", <Users key="2" size={40} className="text-green-600" />],
            ["Borrowed", "0", <ArrowLeftRight key="3" size={40} className="text-orange-600" />],
            ["Overdue", "0", <TriangleAlert key="4" size={40} className="text-red-600" />],
          ].map(([title, value, icon]) => (
            <div
              key={title as string}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">{title}</p>
                  <h2 className="text-4xl font-bold text-slate-900 mt-2">
                    {value}
                  </h2>
                </div>

                {icon}
              </div>
            </div>
          ))}

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            📋 Report Summary
          </h2>

          <p className="text-gray-600">
            Reports and analytics will automatically appear here as books,
            students and borrowings are added to SmartLibrary.
          </p>

        </div>

      </div>

    </div>
  );
}