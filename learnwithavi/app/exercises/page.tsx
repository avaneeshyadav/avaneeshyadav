import Header from "@/components/Header";
import Link from "next/link";

export default function Exercises() {
  const exercises = [
    {
      title: "Variables Exercise",
      description: "Practice creating and using variables in Java",
      difficulty: "Beginner",
      questions: 10,
    },
    {
      title: "Data Types Exercise",
      description: "Test your knowledge of Java data types",
      difficulty: "Beginner",
      questions: 8,
    },
    {
      title: "Operators Exercise",
      description: "Practice using Java operators",
      difficulty: "Beginner",
      questions: 12,
    },
    {
      title: "Control Flow Exercise",
      description: "Master if-else statements and loops",
      difficulty: "Intermediate",
      questions: 15,
    },
    {
      title: "Methods Exercise",
      description: "Practice creating and calling methods",
      difficulty: "Intermediate",
      questions: 10,
    },
    {
      title: "OOP Exercise",
      description: "Test your object-oriented programming skills",
      difficulty: "Advanced",
      questions: 20,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Java Exercises
          </h1>
          <p className="text-lg text-gray-600">
            Practice your Java skills with our interactive exercises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {exercise.title}
                </h3>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    exercise.difficulty === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : exercise.difficulty === "Intermediate"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {exercise.difficulty}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{exercise.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {exercise.questions} questions
                </span>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium">
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Want more practice?
          </h3>
          <p className="text-gray-700 mb-4">
            Check out our comprehensive quiz section to test your overall Java knowledge.
          </p>
          <Link
            href="/quiz"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
          >
            Take a Quiz
          </Link>
        </div>
      </main>
    </div>
  );
}
