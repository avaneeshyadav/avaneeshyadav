"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            <span className="text-green-600">Learn</span>withAvi
            <span className="text-green-600">.com</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/java"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              Tutorials
            </Link>
            <Link
              href="/exercises"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              Exercises
            </Link>
            <Link
              href="/quiz"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              Quiz
            </Link>
            <Link
              href="/reference"
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              Reference
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium">
            Get Certified
          </button>
          
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <Link
            href="/java"
            className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Tutorials
          </Link>
          <Link
            href="/exercises"
            className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Exercises
          </Link>
          <Link
            href="/quiz"
            className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Quiz
          </Link>
          <Link
            href="/reference"
            className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Reference
          </Link>
        </nav>
      )}
    </header>
  );
}
