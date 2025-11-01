import Link from "next/link";

interface NavigationButtonsProps {
  prevLink?: string;
  prevTitle?: string;
  nextLink?: string;
  nextTitle?: string;
}

export default function NavigationButtons({
  prevLink,
  prevTitle,
  nextLink,
  nextTitle,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
      {prevLink ? (
        <Link
          href={prevLink}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>{prevTitle || "Previous"}</span>
        </Link>
      ) : (
        <div />
      )}

      {nextLink ? (
        <Link
          href={nextLink}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          <span>{nextTitle || "Next"}</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
