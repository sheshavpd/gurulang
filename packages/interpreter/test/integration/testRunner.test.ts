import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`namskara guru;
    nodu guru a = 4;
    {
      nodu guru a = 90;
      helu guru a;
    }
    helu guru a;
    aythu guru;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`namskara guru;
    nodu guru a = 4;
    {
      a = 90;
      helu guru a;
    }
    helu guru a;
    aythu guru;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`namskara guru;
    nodu guru a = 4;
    {
      helu guru a;
    }
    helu guru a;
    aythu guru;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namskara guru;
    nodu guru a = 0;
    guru ellivargu (a < 2) {
      helu guru "bhai";
      a += 1;
    }
    aythu guru;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namskara guru;
    nodu guru a = 0, b = 0;
    guru ellivargu (a < 2) {
      guru ellivargu (b < 1) {
        helu guru "bhai";
        b += 1;
      }
      a += 1;
    }
    aythu guru;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namskara guru;
    nodu guru a = 0;
    guru ellivargu (a < 2) {
      nodu guru b = 0;
      guru ellivargu (b < 2) {
        helu guru "bhai";
        b += 1;
        guru eega (b == 1) aadre
          saak bidu guru;
      }
      a += 1;
    }
    aythu guru;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namskara guru
    nodu guru a = 0;
    guru ellivargu (a < 10) {
      helu guru a;
      a += 1;
      guru eega (a == 6) aadre {
        saak bidu guru;
      }
    }
    helu guru "done";
    aythu guru
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namskara guru
    nodu guru a = 0;
    guru ellivargu (a < 10) {
      helu guru a;
      a += 1;
      guru eega (a == 6) aadre
        saak bidu guru;
    }
    helu guru "done";
    aythu guru
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namskara guru
    nodu guru a = 0;
    guru ellivargu (a < 10) {
      helu guru a;
      a += 1;
      guru eega (a == 3) aadre {
        saak bidu guru;
      }
      helu guru "2 baar hi chapunga";
    }
    helu guru "done";
    aythu guru
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

// test("jest", () => {
//     interpreter.interpret(`
//     namskara guru
//     nodu guru a = 0;
//     guru ellivargu (a < 10) {
//       helu guru a;
//       a += 1;
//       guru eega (a == 3) aadre{
//         saak bidu guru;
//       }
//       helu guru "2 baar hi chapunga";
//     }
//     helu guru "done";
//     aythu guru
//     `);
// });
