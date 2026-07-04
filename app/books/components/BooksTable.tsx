"use client";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  isbn: string;
  quantity: number;
  available: number;
}

interface Props {
  books: Book[];
  onDelete: (id: number) => void;
}

export default function BooksTable({
  books,
  onDelete,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-3">Title</th>
            <th className="text-left p-3">Author</th>
            <th className="text-left p-3">Category</th>
            <th className="text-left p-3">ISBN</th>
            <th className="text-left p-3">Available</th>
            <th className="text-center p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {books.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="text-center py-8 text-gray-500"
              >
                No books found.
              </td>
            </tr>
          ) : (
            books.map((book) => (
              <tr
                key={book.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">{book.title}</td>
                <td className="p-3">{book.author}</td>
                <td className="p-3">{book.category}</td>
                <td className="p-3">{book.isbn}</td>
                <td className="p-3">
                  {book.available}/{book.quantity}
                </td>

                <td className="text-center">
                  <button
                    onClick={() => onDelete(book.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}