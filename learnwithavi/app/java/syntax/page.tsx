import CodeBlock from "@/components/CodeBlock";
import CodeEditor from "@/components/CodeEditor";
import NavigationButtons from "@/components/NavigationButtons";

export default function JavaSyntax() {
  const mainCode = `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`;

  const methodCode = `public static void main(String[] args)`;
  const printCode = `System.out.println("Hello World");`;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Java Syntax</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          In the previous chapter, we created a Java file called <code className="bg-gray-100 px-2 py-1 rounded">Main.java</code>, and we used the following code to print &quot;Hello World&quot; to the screen:
        </p>

        <CodeBlock code={mainCode} language="java" />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Example explained
        </h2>
        
        <p className="text-gray-700 mb-4">
          Every line of code that runs in Java must be inside a <code className="bg-gray-100 px-2 py-1 rounded">class</code>. In our example, we named the class <strong>Main</strong>. A class should always start with an uppercase first letter.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-gray-800">
            <strong>Note:</strong> Java is case-sensitive: &quot;MyClass&quot; and &quot;myclass&quot; has different meaning.
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          The name of the java file <strong>must match</strong> the class name. When saving the file, save it using the class name and add &quot;.java&quot; to the end of the filename. To run the example above on your computer, make sure that Java is properly installed: Go to the{" "}
          <a href="/java/get-started" className="text-green-600 hover:underline">
            Get Started Chapter
          </a>{" "}
          for how to install Java. The output should be:
        </p>

        <CodeBlock code="Hello World" language="text" />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          The main Method
        </h2>
        
        <p className="text-gray-700 mb-4">
          The <code className="bg-gray-100 px-2 py-1 rounded">main()</code> method is required and you will see it in every Java program:
        </p>

        <CodeBlock code={methodCode} language="java" />

        <p className="text-gray-700 mb-6">
          Any code inside the <code className="bg-gray-100 px-2 py-1 rounded">main()</code> method will be executed. Don&apos;t worry about the keywords before and after main. You will get to know them bit by bit while reading this tutorial.
        </p>

        <p className="text-gray-700 mb-6">
          For now, just remember that every Java program has a <code className="bg-gray-100 px-2 py-1 rounded">class</code> name which must match the filename, and that every program must contain the <code className="bg-gray-100 px-2 py-1 rounded">main()</code> method.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          System.out.println()
        </h2>
        
        <p className="text-gray-700 mb-4">
          Inside the <code className="bg-gray-100 px-2 py-1 rounded">main()</code> method, we can use the <code className="bg-gray-100 px-2 py-1 rounded">println()</code> method to print a line of text to the screen:
        </p>

        <CodeBlock code={printCode} language="java" />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-gray-800">
            <strong>Note:</strong> The curly braces <code className="bg-gray-100 px-1 rounded">{`{}`}</code> marks the beginning and the end of a block of code.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-gray-800">
            <strong>Note:</strong> Each code statement must end with a semicolon (<code className="bg-gray-100 px-1 rounded">;</code>).
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Try it Yourself
        </h2>

        <CodeEditor
          initialCode={mainCode}
          expectedOutput="Hello World"
        />

        <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
          <p className="text-gray-800">
            <strong>Tip:</strong> You can modify the code in the editor above and click &quot;Run&quot; to see the changes!
          </p>
        </div>
      </div>

      <NavigationButtons
        prevLink="/java/get-started"
        prevTitle="Get Started"
        nextLink="/java/output"
        nextTitle="Java Output"
      />
    </div>
  );
}
