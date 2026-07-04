"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, User, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Invalid username or password");
      return;
    }

    localStorage.setItem("token", data.token);
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-700 flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl hover:-translate-y-1 hover:shadow-blue-500/30 transition-all duration-500 p-10">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
            <BookOpen size={50} className="text-blue-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-4xl font-extrabold text-gray-800">
          SmartLibrary
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8 text-base">
          Manage books, students and borrowings from one place.
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          <div className="flex items-center rounded-xl border border-gray-300 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">

            <div className="px-4 py-4 bg-gray-100 border-r">
              <User size={20} className="text-gray-500" />
            </div>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 outline-none text-gray-700 placeholder:text-gray-400"
            />

          </div>

          <div className="flex items-center rounded-xl border border-gray-300 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">

            <div className="px-4 py-4 bg-gray-100 border-r">
              <Lock size={20} className="text-gray-500" />
            </div>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 outline-none text-gray-700 placeholder:text-gray-400"
            />

          </div>

          {error && (
            <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <div className="mt-8 border-t border-gray-200 pt-6">

          <p className="text-center text-gray-500 text-sm">
            © 2026 SmartLibrary
          </p>

          <p className="text-center text-gray-400 text-xs mt-2">
            A modern Library Management System.
          </p>

        </div>

      </div>

    </main>
  );
}