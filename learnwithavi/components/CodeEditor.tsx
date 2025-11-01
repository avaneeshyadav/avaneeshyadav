"use client";

import { useState } from "react";

interface CodeEditorProps {
  initialCode: string;
  expectedOutput?: string;
}

export default function CodeEditor({
  initialCode,
  expectedOutput,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    
    // Simulate code execution
    setTimeout(() => {
      // Simple simulation - in a real app, this would use a backend API
      if (expectedOutput) {
        setOutput(expectedOutput);
      } else {
        setOutput("Code executed successfully!\n(Note: This is a demo environment)");
      }
      setIsRunning(false);
    }, 500);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
  };

  return (
    <div className="my-6 border border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="bg-green-600 text-white px-4 py-2 font-medium">
        Try it Yourself »
      </div>
      
      <div className="grid md:grid-cols-2 divide-x divide-gray-300">
        <div className="bg-gray-50">
          <div className="px-4 py-2 bg-gray-200 border-b border-gray-300 text-sm font-medium text-gray-700">
            Editor
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm bg-white border-none focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            spellCheck={false}
          />
        </div>
        
        <div className="bg-gray-50">
          <div className="px-4 py-2 bg-gray-200 border-b border-gray-300 text-sm font-medium text-gray-700">
            Output
          </div>
          <div className="h-64 p-4 font-mono text-sm overflow-auto bg-white">
            {output ? (
              <pre className="whitespace-pre-wrap">{output}</pre>
            ) : (
              <span className="text-gray-400">
                Click &quot;Run&quot; to see output...
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 px-4 py-3 bg-gray-100 border-t border-gray-300">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:bg-gray-400 font-medium"
        >
          {isRunning ? "Running..." : "Run"}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
