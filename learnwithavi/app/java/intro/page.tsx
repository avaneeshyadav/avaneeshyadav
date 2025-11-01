import CodeBlock from "@/components/CodeBlock";
import CodeEditor from "@/components/CodeEditor";
import NavigationButtons from "@/components/NavigationButtons";

export default function JavaIntro() {
  const helloWorldCode = `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Java Tutorial</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Java is a popular programming language, created in 1995.
        </p>
        
        <p className="text-gray-700 mb-6">
          It is owned by Oracle, and more than <strong>3 billion devices</strong> run Java.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          What is Java used for?
        </h2>
        
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Mobile applications (especially Android apps)</li>
          <li>Desktop applications</li>
          <li>Web applications</li>
          <li>Web servers and application servers</li>
          <li>Games</li>
          <li>Database connection</li>
          <li>And much, much more!</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Why Use Java?
        </h2>
        
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
          <li>It is one of the most popular programming languages in the world</li>
          <li>It has a large demand in the current job market</li>
          <li>It is easy to learn and simple to use</li>
          <li>It is open-source and free</li>
          <li>It is secure, fast and powerful</li>
          <li>It has huge community support (tens of millions of developers)</li>
          <li>Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
          <p className="text-gray-800">
            <strong>Tip:</strong> Java is close to C++ and C#, and it makes it easy for programmers to switch to Java or vice versa.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Get Started
        </h2>
        
        <p className="text-gray-700 mb-4">
          This tutorial will teach you the basics of Java. It is not necessary to have any prior programming experience.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Java Example
        </h2>
        
        <CodeBlock code={helloWorldCode} language="java" />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-gray-800">
            <strong>Don&apos;t worry</strong> if you don&apos;t understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Try it Yourself
        </h2>
        
        <p className="text-gray-700 mb-4">
          Click on the &quot;Run&quot; button to see how it works.
        </p>

        <CodeEditor
          initialCode={helloWorldCode}
          expectedOutput="Hello World"
        />

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
          <p className="text-gray-800">
            We recommend reading this tutorial, in the sequence listed in the left menu.
          </p>
        </div>
      </div>

      <NavigationButtons
        nextLink="/java/get-started"
        nextTitle="Get Started"
      />
    </div>
  );
}
