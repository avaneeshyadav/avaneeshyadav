import CodeBlock from "@/components/CodeBlock";
import NavigationButtons from "@/components/NavigationButtons";

export default function JavaGetStarted() {
  const installCode = `java -version`;
  
  const helloWorldCode = `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`;

  const compileCode = `javac Main.java`;
  const runCode = `java Main`;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Java Get Started</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Java Install
        </h2>
        
        <p className="text-gray-700 mb-6">
          Some PCs might have Java already installed.
        </p>
        
        <p className="text-gray-700 mb-4">
          To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):
        </p>

        <CodeBlock code={installCode} language="bash" />

        <p className="text-gray-700 mb-6">
          If Java is installed, you will see something like this (depending on version):
        </p>

        <CodeBlock 
          code={`java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)`}
          language="text"
        />

        <p className="text-gray-700 mb-6">
          If you do not have Java installed on your computer, you can download it for free at{" "}
          <a href="https://www.oracle.com/java/technologies/downloads/" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
            oracle.com
          </a>.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-gray-800">
            <strong>Note:</strong> In this tutorial, we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development Environment, such as IntelliJ IDEA, NetBeans or Eclipse, which are particularly useful when managing larger collections of Java files.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Setup for Windows
        </h2>
        
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li>Go to &quot;System Properties&quot; (Can be found on Control Panel &gt; System and Security &gt; System &gt; Advanced System Settings)</li>
          <li>Click on the &quot;Environment variables&quot; button under the &quot;Advanced&quot; tab</li>
          <li>Then, select the &quot;Path&quot; variable in System variables and click on the &quot;Edit&quot; button</li>
          <li>Click on the &quot;New&quot; button and add the path where Java is installed, followed by <strong>\bin</strong>. By default, Java is installed in C:\Program Files\Java\jdk-17\bin</li>
          <li>Click &quot;OK&quot; and save the settings</li>
          <li>At last, open Command Prompt (cmd.exe) and type <strong>java -version</strong> to see if Java is running on your machine</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Write Your First Java Program
        </h2>
        
        <p className="text-gray-700 mb-4">
          Open any text editor and create a file named <code className="bg-gray-100 px-2 py-1 rounded">Main.java</code>:
        </p>

        <CodeBlock code={helloWorldCode} language="java" />

        <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
          <p className="text-gray-800">
            <strong>Don&apos;t worry</strong> if you don&apos;t understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code.
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          Save the code in your text editor as <strong>Main.java</strong>. Open Command Prompt (cmd.exe), navigate to the directory where you saved your file, and type:
        </p>

        <CodeBlock code={compileCode} language="bash" />

        <p className="text-gray-700 mb-4">
          This will compile your code. If there are no errors in the code, the command prompt will take you to the next line. Now, type:
        </p>

        <CodeBlock code={runCode} language="bash" />

        <p className="text-gray-700 mb-6">
          The output should be:
        </p>

        <CodeBlock code="Hello World" language="text" />

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
          <p className="text-gray-800">
            <strong>Congratulations!</strong> You have written and executed your first Java program.
          </p>
        </div>
      </div>

      <NavigationButtons
        prevLink="/java/intro"
        prevTitle="Java Home"
        nextLink="/java/syntax"
        nextTitle="Java Syntax"
      />
    </div>
  );
}
