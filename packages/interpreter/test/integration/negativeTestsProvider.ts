import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          namskara guru;
          a = 4;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          namskara guru;
          a += 4;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          namskara guru;
          a -= 4;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          namskara guru;
          a -= 4;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          namskara guru;
          a /= 4;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          namskara guru;
          a;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          namskara guru;
          a + b;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          namskara guru;
          a + 4;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          namskara guru;
          a - 4;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          namskara guru;
          a - b;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          namskara guru;
          a * 4;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          namskara guru;
          a * b;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          namskara guru;
          a / 4;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          namskara guru;
          a / b;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          namskara guru;
          helu guru a;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          namskara guru;
          helu guru a, b;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          namskara guru;
          nodu guru a = 8;
          helu guru a, b;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          namskara guru;
          nodu guru a = b = 8;
          aythu guru;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        namskara guru;
        nodu guru a;
        a = 9;
        nodu guru a = 0;
        aythu guru;
      `,
    exception: RuntimeException,
  },
  // cases with nalla
  {
    name: "interpreter use nalla variable in expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a;
      helu guru a + 9;
      aythu guru;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in expression - 2, should throw an exception",
    input: `
      namskara guru;
      nodu guru a = nalla;
      helu guru a + 9;
      aythu guru;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a = nalla + 80;
      aythu guru;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression - 2, should throw an exception",
    input: `
      namskara guru;
      nodu guru a = nalla + "jam";
      aythu guru;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in another variable initialisation expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a;
      nodu guru b = a + "hello";
      aythu guru;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in complex expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a;
      nodu guru b = ((a*9) * a + "hello");
      aythu guru;
    `,
    exception: NallaPointerException,
  },
  // nija - sullu case
  {
    name: "interpreter use nija variable in expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a = nija;
      helu guru a + 9;
      aythu guru;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sullu variable in expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a = sullu;
      helu guru a + 9;
      aythu guru;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use nija in variable initialisation expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a = nija + 80;
      aythu guru;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sullu in variable initialisation expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a = sullu + 80;
      aythu guru;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use nija variable in another variable initialisation expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a = nija;
      nodu guru b = a + "hello";
      aythu guru;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sullu variable in complex expression, should throw an exception",
    input: `
      namskara guru;
      nodu guru a = sullu;
      nodu guru b = ((a*9) * a + "hello");
      aythu guru;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nalla operand, should throw an exception",
    input: `
        namskara guru
        (nalla * (4 + 8 + 10));
        aythu guru
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand, should throw an exception",
    input: `
        namskara guru
        (nalla * (nija + 8 + 10));
        aythu guru
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 2, should throw nalla pointer exception",
    input: `
        namskara guru
        (nija * (nalla + 8 + 10));
        aythu guru
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 3, should throw nalla pointer exception",
    input: `
        namskara guru
        (nalla + nija);
        aythu guru
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        namskara guru
        (nija * (4 + 8 + 10));
        aythu guru
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        namskara guru
        nija + sullu;
        aythu guru
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        namskara guru
        nodu guru a = nija, b = sullu;
        a + b;
        aythu guru
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        namskara guru
        nija * sullu;
        aythu guru
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        namskara guru
        nodu guru a = nija, b = sullu;
        a * b;
        aythu guru
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        namskara guru
        nija / sullu;
        aythu guru
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        namskara guru
        nodu guru a = nija, b = sullu;
        a / b;
        aythu guru
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nalla, should throw an exception",
    input: `
        namskara guru
        helu guru nalla + 5;
        aythu guru;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla, should throw an exception",
    input: `
        namskara guru
        nodu guru a;
        a *= 5;
        aythu guru;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nija, should throw an exception",
    input: `
        namskara guru
        nodu guru a = nija;
        a *= 5;
        aythu guru;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla - 2, should throw an exception",
    input: `
        namskara guru
        nodu guru a = nalla;
        a /= 5;
        aythu guru;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        namskara guru
        guru ellivargu (nija) {

        }
        aythu guru;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        namskara guru
        nodu guru a = 0;
        guru ellivargu (a < 2) {
          helu guru "bhai";
        }
        aythu guru;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        namskara guru
        nodu guru a = 0;
        guru eega (nija) aadre
          saak bidu guru;
        aythu guru;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nalla with &&, should throw an exception",
    input: `
        namskara guru
        helu guru nalla && 90;
        aythu guru;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nalla variable with &&, should throw an exception",
    input: `
        namskara guru
        nodu guru a;
        helu guru a && 90;
        aythu guru;
      `,
    output: NallaPointerException,
  },
  {
    name: `printStatement test with boolean nija sullu and logical, should throw an exception`,
    input: `
      namskara guru;
      helu guru nija != 10;
      aythu guru;
    `,
    output: RuntimeException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      namskara guru;
      helu guru "nija" % 9;
      aythu guru;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        namskara guru
        nodu guru a = 0;
        guru ellivargu (a < 2) {
          mundhe nodu guru;
          a = 5;
        }
        aythu guru;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        namskara guru
        nodu guru a = 0;
        guru eega (nija) aadre
          mundhe nodu guru
        aythu guru;
      `,
    output: RuntimeException,
  },
];
