"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";

export default function StudentForm({
  onStudentAdded,
}: {
  onStudentAdded: () => void;
}) {
  const [form, setForm] = useState({
    fullName: "",
    admissionNo: "",
    className: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Failed to add student.");
      return;
    }

    setForm({
      fullName: "",
      admissionNo: "",
      className: "",
    });

    onStudentAdded();
  }

  return (
    <div>

      <div className="flex items-center gap-3 mb-6">

        <UserPlus className="text-green-700" size={30} />

        <h2 className="text-2xl font-bold text-slate-900">
          Add Student
        </h2>

      </div>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        <input
          type="text"
          placeholder="Full Name"
          className="rounded-xl border border-gray-300 p-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
          value={form.fullName}
          onChange={(e) =>
            setForm({ ...form, fullName: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Admission Number"
          className="rounded-xl border border-gray-300 p-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
          value={form.admissionNo}
          onChange={(e) =>
            setForm({ ...form, admissionNo: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Class"
          className="rounded-xl border border-gray-300 p-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
          value={form.className}
          onChange={(e) =>
            setForm({ ...form, className: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold p-4 hover:scale-[1.02] transition"
        >
          👨‍🎓 Save Student
        </button>

      </form>

    </div>
  );
}