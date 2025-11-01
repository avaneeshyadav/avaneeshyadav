import CodeBlock from "@/components/CodeBlock";
import CodeEditor from "@/components/CodeEditor";
import NavigationButtons from "@/components/NavigationButtons";

export default function JavaOutput() {
  const printlnCode = `System.out.println("Hello World!");
System.out.println("I am learning Java.");
System.out.println("It is awesome!");`;

  const printCode = `System.out.print("Hello World! ");
System.out.print("I will print on the same line.");`;

  const numbersCode = `System.out.println(3);
System.out.println(358);
System.out.println(50000);`;

  const calculationCode = `System.out.println(3 + 3);`;

  const tryCode = `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World!");
    System.out.println("I am learning Java.");
  }
}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Java Output</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Print Text
        </h2>
        
        <p className="text-gray-700 mb-4">
          You learned from the previous chapter that you can use <code className="bg-gray-100 px-2 py-1 rounded">println()</code> method to output values or print text in Java:
        </p>

        <CodeBlock code={printlnCode} language="java" />

        <p className="text-gray-700 mb-6">
          Output:
        </p>

        <CodeBlock 
          code={`Hello World!
I am learning Java.
It is awesome!`}
          language="text"
        />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Double Quotes
        </h2>
        
        <p className="text-gray-700 mb-6">
          When you are working with text, it must be wrapped inside double quotations marks <code className="bg-gray-100 px-2 py-1 rounded">&quot;&quot;</code>.
        </p>

        <div className="bg-red-50 border-l-4 border-red-600 p-4 my-6">
          <p className="text-gray-800">
            If you forget the double quotes, an error occurs:
          </p>
          <CodeBlock 
            code={`System.out.println(This sentence will produce an error);`}
            language="java"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          The Print() Method
        </h2>
        
        <p className="text-gray-700 mb-4">
          There is also a <code className="bg-gray-100 px-2 py-1 rounded">print()</code> method, which is similar to <code className="bg-gray-100 px-2 py-1 rounded">println()</code>.
        </p>

        <p className="text-gray-700 mb-4">
          The only difference is that it does not insert a new line at the end of the output:
        </p>

        <CodeBlock code={printCode} language="java" />

        <p className="text-gray-700 mb-6">
          Output:
        </p>

        <CodeBlock 
          code="Hello World! I will print on the same line."
          language="text"
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-gray-800">
            <strong>Note:</strong> We use <code className="bg-gray-100 px-2 py-1 rounded">println()</code> when we want to add a new line after each output, and <code className="bg-gray-100 px-2 py-1 rounded">print()</code> when we want to print on the same line.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Print Numbers
        </h2>
        
        <p className="text-gray-700 mb-4">
          You can also use the <code className="bg-gray-100 px-2 py-1 rounded">println()</code> method to print numbers.
        </p>

        <p className="text-gray-700 mb-4">
          However, unlike text, we don&apos;t put numbers inside double quotes:
        </p>

        <CodeBlock code={numbersCode} language="java" />

        <p className="text-gray-700 mb-6">
          Output:
        </p>

        <CodeBlock 
          code={`3
358
50000`}
          language="text"
        />

        <p className="text-gray-700 mb-4">
          You can also perform mathematical calculations inside the <code className="bg-gray-100 px-2 py-1 rounded">println()</code> method:
        </p>

        <CodeBlock code={calculationCode} language="java" />

        <p className="text-gray-700 mb-6">
          Output:
        </p>

        <CodeBlock code="6" language="text" />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Try it Yourself
        </h2>

        <CodeEditor
          initialCode={tryCode}
          expectedOutput={`Hello World!
I am learning Java.`}
        />
      </div>

      <NavigationButtons
        prevLink="/java/syntax"
        prevTitle="Java Syntax"
        nextLink="/java/comments"
        nextTitle="Java Comments"
      />
    </div>
  );
}
