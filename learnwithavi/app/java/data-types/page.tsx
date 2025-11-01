import CodeBlock from "@/components/CodeBlock";
import CodeEditor from "@/components/CodeEditor";
import NavigationButtons from "@/components/NavigationButtons";

export default function JavaDataTypes() {
  const dataTypesCode = `int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String`;

  const primitiveCode = `byte myNum = 100;
System.out.println(myNum);`;

  const tryCode = `public class Main {
  public static void main(String[] args) {
    int myNum = 5;
    float myFloatNum = 5.99f;
    char myLetter = 'D';
    boolean myBool = true;
    String myText = "Hello";
    
    System.out.println(myNum);
    System.out.println(myFloatNum);
    System.out.println(myLetter);
    System.out.println(myBool);
    System.out.println(myText);
  }
}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Java Data Types</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          As explained in the previous chapter, a variable in Java must be a specified data type:
        </p>

        <CodeBlock code={dataTypesCode} language="java" />

        <p className="text-gray-700 mb-6 mt-6">
          Data types are divided into two groups:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>
            <strong>Primitive data types</strong> - includes <code className="bg-gray-100 px-2 py-1 rounded">byte</code>, <code className="bg-gray-100 px-2 py-1 rounded">short</code>, <code className="bg-gray-100 px-2 py-1 rounded">int</code>, <code className="bg-gray-100 px-2 py-1 rounded">long</code>, <code className="bg-gray-100 px-2 py-1 rounded">float</code>, <code className="bg-gray-100 px-2 py-1 rounded">double</code>, <code className="bg-gray-100 px-2 py-1 rounded">boolean</code> and <code className="bg-gray-100 px-2 py-1 rounded">char</code>
          </li>
          <li>
            <strong>Non-primitive data types</strong> - such as <code className="bg-gray-100 px-2 py-1 rounded">String</code>, Arrays and Classes
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Primitive Data Types
        </h2>
        
        <p className="text-gray-700 mb-4">
          A primitive data type specifies the size and type of variable values, and it has no additional methods.
        </p>

        <p className="text-gray-700 mb-6">
          There are eight primitive data types in Java:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Data Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">byte</code>
                </td>
                <td className="border border-gray-300 px-4 py-2">1 byte</td>
                <td className="border border-gray-300 px-4 py-2">Stores whole numbers from -128 to 127</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">short</code>
                </td>
                <td className="border border-gray-300 px-4 py-2">2 bytes</td>
                <td className="border border-gray-300 px-4 py-2">Stores whole numbers from -32,768 to 32,767</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">int</code>
                </td>
                <td className="border border-gray-300 px-4 py-2">4 bytes</td>
                <td className="border border-gray-300 px-4 py-2">Stores whole numbers from -2,147,483,648 to 2,147,483,647</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">long</code>
                </td>
                <td className="border border-gray-300 px-4 py-2">8 bytes</td>
                <td className="border border-gray-300 px-4 py-2">Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">float</code>
                </td>
                <td className="border border-gray-300 px-4 py-2">4 bytes</td>
                <td className="border border-gray-300 px-4 py-2">Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">double</code>
                </td>
                <td className="border border-gray-300 px-4 py-2">8 bytes</td>
                <td className="border border-gray-300 px-4 py-2">Stores fractional numbers. Sufficient for storing 15 decimal digits</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">boolean</code>
                </td>
                <td className="border border-gray-300 px-4 py-2">1 bit</td>
                <td className="border border-gray-300 px-4 py-2">Stores true or false values</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">char</code>
                </td>
                <td className="border border-gray-300 px-4 py-2">2 bytes</td>
                <td className="border border-gray-300 px-4 py-2">Stores a single character/letter or ASCII values</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Numbers
        </h2>
        
        <p className="text-gray-700 mb-4">
          Primitive number types are divided into two groups:
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Integer types</strong> stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are <code className="bg-gray-100 px-2 py-1 rounded">byte</code>, <code className="bg-gray-100 px-2 py-1 rounded">short</code>, <code className="bg-gray-100 px-2 py-1 rounded">int</code> and <code className="bg-gray-100 px-2 py-1 rounded">long</code>. Which type you should use, depends on the numeric value.
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Floating point types</strong> represents numbers with a fractional part, containing one or more decimals. There are two types: <code className="bg-gray-100 px-2 py-1 rounded">float</code> and <code className="bg-gray-100 px-2 py-1 rounded">double</code>.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-gray-800">
            <strong>Note:</strong> Even though there are many numeric types in Java, the most used for numbers are <code className="bg-gray-100 px-2 py-1 rounded">int</code> (for whole numbers) and <code className="bg-gray-100 px-2 py-1 rounded">double</code> (for floating point numbers).
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Non-Primitive Data Types
        </h2>
        
        <p className="text-gray-700 mb-4">
          Non-primitive data types are called <strong>reference types</strong> because they refer to objects.
        </p>

        <p className="text-gray-700 mb-6">
          The main difference between <strong>primitive</strong> and <strong>non-primitive</strong> data types are:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for <code className="bg-gray-100 px-2 py-1 rounded">String</code>).</li>
          <li>Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.</li>
          <li>A primitive type has always a value, while non-primitive types can be <code className="bg-gray-100 px-2 py-1 rounded">null</code>.</li>
          <li>A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Try it Yourself
        </h2>

        <CodeEditor
          initialCode={tryCode}
          expectedOutput={`5
5.99
D
true
Hello`}
        />
      </div>

      <NavigationButtons
        prevLink="/java/variables"
        prevTitle="Java Variables"
        nextLink="/java/type-casting"
        nextTitle="Java Type Casting"
      />
    </div>
  );
}
