"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, GraduationCap } from "lucide-react";
import StudentForm from "./components/StudentForm";
import StudentsTable from "./components/StudentsTable";

interface Student {
  id: number;
  fullName: string;
  admissionNo: string;
  className: string;
}

export default function StudentsPage() {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);

  async function loadStudents() {
    const res = await fetch("/api/students");
    const data = await res.json();
    setStudents(data);
  }

  async function deleteStudent(id: number) {
    if (!confirm("Delete this student?")) return;

    await fetch(`/api/students?id=${id}`, {
      method: "DELETE",
    });

    loadStudents();
  }

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white shadow-lg">

        <div className="max-w-7xl mx-auto px-8 py-8">

          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 hover:bg-white/30 transition"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <h1 className="flex items-center gap-3 text-4xl font-extrabold">
            <GraduationCap size={40} />
            SmartLibrary
          </h1>

          <p className="mt-2 text-green-100">
            Manage student records quickly and efficiently.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-8">

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            👨‍🎓 Students Management
          </h2>

          <p className="text-gray-600 mt-2">
            Register and manage students.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <StudentForm onStudentAdded={loadStudents} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <StudentsTable
            students={students}
            onDelete={deleteStudent}
          />
        </div>

      </div>

    </div>
  );
}