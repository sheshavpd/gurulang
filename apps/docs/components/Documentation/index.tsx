import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">namskara guru</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">aythu guru</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

namskara guru
  // Write code here
aythu guru

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">nodu guru</code>.
      </>
    ),
    code: `namskara guru
      nodu guru a = 10;
      nodu guru b = "two";
      nodu guru c = 15;
      a = a + 1;
      b = 21;
      c *= 2;
aythu guru
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nalla</code>.{" "}
        <code className="language-cpp">nija</code> and{" "}
        <code className="language-cpp">sullu</code> are the boolean values.
      </>
    ),
    code: `namskara guru
    nodu guru a = 10;
    nodu guru b = 10 + (15*20);
    nodu guru c = "two";
    nodu guru d = 'ok';
    nodu guru e = nalla;
    nodu guru f = nija;
    nodu guru g = sullu;
aythu guru
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">helu guru</code> to print anything to
        console.
      </>
    ),
    code: `namskara guru
    helu guru "Hello World";
    nodu guru a = 10;
    {
       nodu guru b = 20;
       helu guru a + b;
    }
    helu guru 5, 'ok', nalla , nija , sullu;
aythu guru
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        GuruLang supports simple if else construct , <code className="language-cpp">guru eega</code> block will execute if condition is <code className="language-cpp">nija</code> and <code className="language-cpp">illandre guru</code> block will execute if condition is <code className="language-cpp">sullu</code>.
      </>
    ),
    code: `namskara guru
    nodu guru a = 10;
    guru eega (a < 25) aadre{
      helu guru "a is less than 25";
    } illandre guru {
      helu guru "a is greater than or equal to 25";
    }
aythu guru
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">guru ellivargu</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">nija</code>. If the condition becomes <code className="language-cpp">sullu</code>, statement within the loop stops executing and control passes to the statement following the loop.
        Use <code className="language-cpp">saak bidu guru</code> to break the loop and <code className="language-cpp">mundhe nodu guru</code> to continue within loop.
      </>
    ),
    code: `namskara guru
    nodu guru a = 0;
    guru ellivargu (a < 10) {
      a += 1;
      guru eega (a == 5) aadre{
        helu guru "andar se helu guru ", a;
        mundhe nodu guru;
      }
      guru eega (a == 6) aadre{
        saak bidu guru;
      }
      helu guru a;
    }
    helu guru "done";
aythu guru
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            GuruLang is a fun programming language, forked from BhaiLang.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
