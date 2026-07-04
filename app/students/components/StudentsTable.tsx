"use client";

import { Trash2 } from "lucide-react";

interface Student {
  id: number;
  fullName: string;
  admissionNo: string;
  className: string;
}

interface Props {
  students: Student[];
  onDelete: (id: number) => void;
}

export default function StudentsTable({
  students,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">

      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-5">

        <h2 className="text-2xl font-bold text-white">
          Registered Students
        </h2>

        <p className="mt-1 text-green-100">
          View and manage all students in SmartLibrary.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                Full Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                Admission No.
              </th>

              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                Class
              </th>

              <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {students.length === 0 ? (

              <tr>

                <td
                  colSpan={4}
                  className="py-12 text-center text-lg text-gray-500"
                >
                  👨‍🎓 No students registered yet.
                </td>

              </tr>

            ) : (

              students.map((student) => (

                <tr
                  key={student.id}
                  className="border-b hover:bg-green-50 transition"
                >

                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {student.fullName}
                  </td>

                  <td className="px-6 py-4 text-gray-700">
                    {student.admissionNo}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      {student.className}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">

                    <button
                      onClick={() => onDelete(student.id)}
                      className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 transition"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}