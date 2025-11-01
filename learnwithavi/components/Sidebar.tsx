"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Topic {
  title: string;
  slug: string;
  subtopics?: Topic[];
}

const javaTopics: Topic[] = [
  {
    title: "Java Tutorial",
    slug: "intro",
    subtopics: [
      { title: "Java Home", slug: "intro" },
      { title: "Java Get Started", slug: "get-started" },
      { title: "Java Syntax", slug: "syntax" },
      { title: "Java Output", slug: "output" },
      { title: "Java Comments", slug: "comments" },
    ],
  },
  {
    title: "Java Variables",
    slug: "variables",
    subtopics: [
      { title: "Java Variables", slug: "variables" },
      { title: "Java Data Types", slug: "data-types" },
      { title: "Java Type Casting", slug: "type-casting" },
      { title: "Java Operators", slug: "operators" },
    ],
  },
  {
    title: "Java Strings",
    slug: "strings",
    subtopics: [
      { title: "Java Strings", slug: "strings" },
      { title: "Java String Methods", slug: "string-methods" },
    ],
  },
  {
    title: "Java Math",
    slug: "math",
  },
  {
    title: "Java Booleans",
    slug: "booleans",
  },
  {
    title: "Java If...Else",
    slug: "if-else",
  },
  {
    title: "Java Switch",
    slug: "switch",
  },
  {
    title: "Java Loops",
    slug: "loops",
    subtopics: [
      { title: "Java While Loop", slug: "while-loop" },
      { title: "Java For Loop", slug: "for-loop" },
      { title: "Java Break/Continue", slug: "break-continue" },
    ],
  },
  {
    title: "Java Arrays",
    slug: "arrays",
  },
  {
    title: "Java Methods",
    slug: "methods",
    subtopics: [
      { title: "Java Methods", slug: "methods" },
      { title: "Java Method Parameters", slug: "method-parameters" },
      { title: "Java Method Overloading", slug: "method-overloading" },
    ],
  },
  {
    title: "Java Classes",
    slug: "classes",
    subtopics: [
      { title: "Java OOP", slug: "oop" },
      { title: "Java Classes/Objects", slug: "classes" },
      { title: "Java Constructors", slug: "constructors" },
      { title: "Java Modifiers", slug: "modifiers" },
      { title: "Java Encapsulation", slug: "encapsulation" },
      { title: "Java Inheritance", slug: "inheritance" },
      { title: "Java Polymorphism", slug: "polymorphism" },
      { title: "Java Abstraction", slug: "abstraction" },
      { title: "Java Interface", slug: "interface" },
    ],
  },
  {
    title: "Java Advanced",
    slug: "advanced",
    subtopics: [
      { title: "Java Exceptions", slug: "exceptions" },
      { title: "Java Files", slug: "files" },
      { title: "Java ArrayList", slug: "arraylist" },
      { title: "Java HashMap", slug: "hashmap" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Java Tutorial",
    "Java Variables",
  ]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const isActive = (slug: string) => {
    return pathname === `/java/${slug}`;
  };

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto h-[calc(100vh-57px)] sticky top-[57px]">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Java Tutorial</h2>
        
        <nav className="space-y-1">
          {javaTopics.map((topic) => (
            <div key={topic.title}>
              {topic.subtopics ? (
                <>
                  <button
                    onClick={() => toggleSection(topic.title)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded transition-colors"
                  >
                    <span>{topic.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.includes(topic.title)
                          ? "rotate-90"
                          : ""
                      }`}
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
                  </button>
                  {expandedSections.includes(topic.title) && (
                    <div className="ml-3 mt-1 space-y-1">
                      {topic.subtopics.map((subtopic) => (
                        <Link
                          key={subtopic.slug}
                          href={`/java/${subtopic.slug}`}
                          className={`block px-3 py-2 text-sm rounded transition-colors ${
                            isActive(subtopic.slug)
                              ? "bg-green-600 text-white"
                              : "text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {subtopic.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={`/java/${topic.slug}`}
                  className={`block px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive(topic.slug)
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {topic.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
