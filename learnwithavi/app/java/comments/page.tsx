import CodeBlock from "@/components/CodeBlock";
import CodeEditor from "@/components/CodeEditor";
import NavigationButtons from "@/components/NavigationButtons";

export default function JavaComments() {
  const singleLineCode = `// This is a comment
System.out.println("Hello World");`;

  const multiLineCode = `/* This is a multi-line comment
   It can span multiple lines
   and is useful for longer explanations */
System.out.println("Hello World");`;

  const tryCode = `public class Main {
  public static void main(String[] args) {
    // This prints Hello World
    System.out.println("Hello World");
    // This prints I am learning Java
    System.out.println("I am learning Java");
  }
}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Java Comments</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Single-line Comments
        </h2>
        
        <p className="text-gray-700 mb-4">
          Single-line comments start with two forward slashes (<code className="bg-gray-100 px-2 py-1 rounded">//</code>).
        </p>

        <p className="text-gray-700 mb-4">
          Any text between <code className="bg-gray-100 px-2 py-1 rounded">//</code> and the end of the line is ignored by Java (will not be executed).
        </p>

        <p className="text-gray-700 mb-4">
          This example uses a single-line comment before a line of code:
        </p>

        <CodeBlock code={singleLineCode} language="java" />

        <p className="text-gray-700 mb-4">
          This example uses a single-line comment at the end of a line of code:
        </p>

        <CodeBlock 
          code={`System.out.println("Hello World"); // This is a comment`}
          language="java"
        />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Multi-line Comments
        </h2>
        
        <p className="text-gray-700 mb-4">
          Multi-line comments start with <code className="bg-gray-100 px-2 py-1 rounded">/*</code> and ends with <code className="bg-gray-100 px-2 py-1 rounded">*/</code>.
        </p>

        <p className="text-gray-700 mb-4">
          Any text between <code className="bg-gray-100 px-2 py-1 rounded">/*</code> and <code className="bg-gray-100 px-2 py-1 rounded">*/</code> will be ignored by Java.
        </p>

        <p className="text-gray-700 mb-4">
          This example uses a multi-line comment (a comment block) to explain the code:
        </p>

        <CodeBlock code={multiLineCode} language="java" />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-gray-800">
            <strong>Single or multi-line comments?</strong> It is up to you which you want to use. Normally, we use <code className="bg-gray-100 px-2 py-1 rounded">//</code> for short comments, and <code className="bg-gray-100 px-2 py-1 rounded">/* */</code> for longer.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Try it Yourself
        </h2>

        <CodeEditor
          initialCode={tryCode}
          expectedOutput={`Hello World
I am learning Java`}
        />

        <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
          <p className="text-gray-800">
            <strong>Good Practice:</strong> Use comments to explain your code. This makes it easier for others (and yourself) to understand what your code does.
          </p>
        </div>
      </div>

      <NavigationButtons
        prevLink="/java/output"
        prevTitle="Java Output"
        nextLink="/java/variables"
        nextTitle="Java Variables"
      />
    </div>
  );
}
