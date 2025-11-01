import CodeBlock from "@/components/CodeBlock";
import CodeEditor from "@/components/CodeEditor";
import NavigationButtons from "@/components/NavigationButtons";

export default function JavaVariables() {
  const variableCode = `String name = "John";
System.out.println(name);`;

  const intCode = `int myNum = 15;
System.out.println(myNum);`;

  const reassignCode = `int myNum = 15;
myNum = 20;  // myNum is now 20
System.out.println(myNum);`;

  const finalCode = `final int myNum = 15;
myNum = 20;  // will generate an error`;

  const typesCode = `int myNum = 5;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;
String myText = "Hello";`;

  const tryCode = `public class Main {
  public static void main(String[] args) {
    int myNum = 15;
    System.out.println(myNum);
  }
}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Java Variables</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Variables are containers for storing data values.
        </p>

        <p className="text-gray-700 mb-4">
          In Java, there are different <strong>types</strong> of variables, for example:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><code className="bg-gray-100 px-2 py-1 rounded">String</code> - stores text, such as &quot;Hello&quot;. String values are surrounded by double quotes</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">int</code> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">float</code> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">char</code> - stores single characters, such as &apos;a&apos; or &apos;B&apos;. Char values are surrounded by single quotes</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">boolean</code> - stores values with two states: true or false</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Declaring (Creating) Variables
        </h2>
        
        <p className="text-gray-700 mb-4">
          To create a variable, you must specify the type and assign it a value:
        </p>

        <div className="bg-gray-100 p-4 rounded my-4">
          <code className="text-gray-800">
            <strong>type</strong> variableName = <strong>value</strong>;
          </code>
        </div>

        <p className="text-gray-700 mb-4">
          Where <strong>type</strong> is one of Java&apos;s types (such as <code className="bg-gray-100 px-2 py-1 rounded">int</code> or <code className="bg-gray-100 px-2 py-1 rounded">String</code>), and <strong>variableName</strong> is the name of the variable (such as <strong>x</strong> or <strong>name</strong>). The <strong>equal sign</strong> is used to assign values to the variable.
        </p>

        <p className="text-gray-700 mb-4">
          To create a variable that should store text, look at the following example:
        </p>

        <CodeBlock code={variableCode} language="java" />

        <p className="text-gray-700 mb-4">
          To create a variable that should store a number, look at the following example:
        </p>

        <CodeBlock code={intCode} language="java" />

        <p className="text-gray-700 mb-6">
          You can also declare a variable without assigning the value, and assign the value later:
        </p>

        <CodeBlock 
          code={`int myNum;
myNum = 15;
System.out.println(myNum);`}
          language="java"
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-gray-800">
            <strong>Note:</strong> If you assign a new value to an existing variable, it will overwrite the previous value:
          </p>
        </div>

        <CodeBlock code={reassignCode} language="java" />

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Final Variables
        </h2>
        
        <p className="text-gray-700 mb-4">
          If you don&apos;t want others (or yourself) to overwrite existing values, use the <code className="bg-gray-100 px-2 py-1 rounded">final</code> keyword (this will declare the variable as &quot;final&quot; or &quot;constant&quot;, which means unchangeable and read-only):
        </p>

        <CodeBlock code={finalCode} language="java" />

        <div className="bg-red-50 border-l-4 border-red-600 p-4 my-6">
          <p className="text-gray-800">
            The output will be something like this:
          </p>
          <CodeBlock 
            code="error: cannot assign a value to final variable myNum"
            language="text"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Other Types
        </h2>
        
        <p className="text-gray-700 mb-4">
          A demonstration of how to declare variables of other types:
        </p>

        <CodeBlock code={typesCode} language="java" />

        <p className="text-gray-700 mb-6">
          You will learn more about data types in the next chapter.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Try it Yourself
        </h2>

        <CodeEditor
          initialCode={tryCode}
          expectedOutput="15"
        />
      </div>

      <NavigationButtons
        prevLink="/java/comments"
        prevTitle="Java Comments"
        nextLink="/java/data-types"
        nextTitle="Java Data Types"
      />
    </div>
  );
}
