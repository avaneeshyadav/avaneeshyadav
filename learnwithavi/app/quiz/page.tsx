"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      question: "What is the correct way to declare a variable in Java?",
      options: [
        "var x = 5;",
        "int x = 5;",
        "variable x = 5;",
        "x := 5;",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which keyword is used to create a class in Java?",
      options: ["class", "Class", "new", "create"],
      correctAnswer: 0,
    },
    {
      question: "What is the output of: System.out.println(3 + 3);",
      options: ["33", "6", "3 + 3", "Error"],
      correctAnswer: 1,
    },
    {
      question: "Which method is the entry point of a Java program?",
      options: [
        "start()",
        "run()",
        "main()",
        "execute()",
      ],
      correctAnswer: 2,
    },
    {
      question: "What does JVM stand for?",
      options: [
        "Java Virtual Machine",
        "Java Variable Method",
        "Java Visual Manager",
        "Java Version Manager",
      ],
      correctAnswer: 0,
    },
  ];

  const handleAnswerClick = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Java Quiz
          </h1>

          {showScore ? (
            <div className="text-center">
              <div className="mb-6">
                <div className="text-6xl font-bold text-green-600 mb-4">
                  {score}/{questions.length}
                </div>
                <p className="text-2xl text-gray-700 mb-2">
                  {score === questions.length
                    ? "Perfect Score! 🎉"
                    : score >= questions.length * 0.7
                    ? "Great Job! 👏"
                    : score >= questions.length * 0.5
                    ? "Good Effort! 👍"
                    : "Keep Learning! 📚"}
                </p>
                <p className="text-gray-600">
                  You scored {score} out of {questions.length} questions correctly
                </p>
              </div>
              <button
                onClick={handleRestart}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-gray-600">
                    Score: {score}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        selectedAnswer === index
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <span className="font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {currentQuestion === questions.length - 1 ? "Finish" : "Next Question"}
              </button>
            </>
          )}
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Need more practice?
          </h3>
          <p className="text-gray-700">
            Check out our exercises section for hands-on coding practice.
          </p>
        </div>
      </main>
    </div>
  );
}
