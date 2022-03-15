export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only namskara guru, should throw an exception",
    input: `
        namskara guru
      `,
    output: SyntaxError,
  },
  {
    name: "only aythu guru, should throw an exception",
    input: `
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "multiple namskara guru, should throw an exception",
    input: `
        namskara guru
        namskara guru
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        namskara guru
        namskara guru
        aythu guru
        aythu guru
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        namskara guru
        {
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        namskara guru
        }
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        namskara guru
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        namskara guru
        {
          naam = 4
        }
        aythu guru
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        namskara guru
        helu guru ;
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        namskara guru
        helu guru 478
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        namskara guru
        helu guru nija sullu;
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        namskara guru
        helu guru ~!*;
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        namskara guru
        helu guru a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        namskara guru
        nodu guru a b c;
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        namskara guru
        nodu guru a 
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        namskara guru
        nodu guru ;
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        namskara guru
        nodu guru a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        namskara guru
        nodu guru a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        namskara guru
        nodu guru
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    namskara guru
    guru ellivargu (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        namskara guru
        a = 4
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        namskara guru
        a *=- 4;
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        namskara guru
        "hello" = 4;
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        namskara guru
        5 = 890;
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        namskara guru
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        namskara guru
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        namskara guru
        (a + 4;
        aythu guru
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        namskara guru
        a + 4);
        aythu guru
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        namskara guru
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        namskara guru
        (a * (4 + 8 + 10);
        aythu guru
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    namskara guru
    nodu guru a = b && ;
    aythu guru;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    namskara guru
    nodu guru a = && b;
    aythu guru;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    namskara guru
    guru eega (&&) aadre;
    aythu guru;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        namskara guru
        guru eega (nija) aadre
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        namskara guru
        illandre guru {

        }
        aythu guru;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        namskara guru
       guru eega  aadre{

       }
        aythu guru;
      `,
    output: SyntaxError,
  },
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        namskara guru
          mundhe nodu guru
        aythu guru
      `,
    output: SyntaxError,
  },
]
