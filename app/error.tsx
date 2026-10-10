"use client"; // এটি অবশ্যই ক্লায়েন্ট কম্পোনেন্ট হতে হবে

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // আপনি চাইলে এখানে কনসোলে এরর লগ করতে পারেন
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-xl font-bold text-red-600">Something went wrong!</h2>
      <p className="text-sm text-gray-500 mt-2">
        {error.message || "An unexpected error occurred."}
      </p>

      {/* error এবং error.digest দুটিই সাবধানে চেক করা হচ্ছে */}
      {error?.digest && (
        <p className="mt-6 text-xs text-muted-foreground bg-gray-100 p-2 rounded">
          Error ID: {error.digest}
        </p>
      )}

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Try again
      </button>
    </div>
  );
}
