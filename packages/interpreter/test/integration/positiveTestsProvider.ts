export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      namskara guru
      aythu guru
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      namskara guru
      aythu guru
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      namskara guru
      ;
      aythu guru
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      namskara guru
      ;
      ;
      ;;
      aythu guru
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      namskara guru
      {};
      aythu guru
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      namskara guru
      {
        nodu guru a = 4;
      }
      aythu guru
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      namskara guru
      nodu guru a, b, c;
      aythu guru
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      namskara guru
      nodu guru a = 10, b = "crap";
      aythu guru
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      namskara guru
      nodu guru a = 10, b = 5;
      aythu guru
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      namskara guru
      nodu guru a = 7 + 90;
      aythu guru
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      namskara guru
      nodu guru a = nija;
      a = 4;
      aythu guru
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      namskara guru
      nodu guru a = 2;
      a *= 4;
      aythu guru
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      namskara guru
      nodu guru a = 2;
      (a + 4);
      aythu guru
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      namskara guru
      nodu guru a = 2;
      (a + 4) * 10 + (5 - 4);
      aythu guru
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      namskara guru
      nodu guru a = 2;
      (a * (4 + 8) + 10);
      aythu guru
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    namskara guru
    nodu guru x = 9;
    guru eega (x != 9) aadre{
      x = 5;
      helu guru x;
    } illandre guru (x >= 9);
    aythu guru;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      namskara guru;
      nodu guru a , b;
      a = b = 60;
      helu guru a, b;
      aythu guru
    `,
    output: "60 60",
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      namskara guru;
      nodu guru a = 2, b = 60;
      helu guru (a * (4 + 8) + 10), b;
      aythu guru
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      namskara guru;
      nodu guru a = 2, b = 60;

      a = b + 3;
      helu guru a, b;
      aythu guru
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      namskara guru;
      helu guru "hello", nija, sullu;
      aythu guru
    `,
    output: "hello nija sullu",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      namskara guru;
      helu guru nalla;
      aythu guru;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      namskara guru;
      helu guru 10, nalla;
      aythu guru;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      namskara guru;
      helu guru "hello" + "crap";
      aythu guru;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      namskara guru;
      nodu guru a = 70;
      helu guru 6*5, nalla, "jamtara", a;
      aythu guru;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      namskara guru;
      nodu guru a;
      helu guru a;
      aythu guru;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      namskara guru;
      helu guru "undefined";
      aythu guru;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      namskara guru;
      nodu guru a;
      helu guru a;
      aythu guru;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with nija variable, should success`,
    input: `
      namskara guru;
      nodu guru a = nija;
      helu guru a;
      aythu guru;
    `,
    output: "nija",
  },
  {
    name: `printStatement test with sullu variable, should success`,
    input: `
      namskara guru;
      nodu guru a = sullu;
      helu guru a;
      aythu guru;
    `,
    output: "sullu",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      namskara guru;
      nodu guru a;
      helu guru a = 90;
      aythu guru;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      namskara guru;
      helu guru 9 && 10;
      aythu guru;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      namskara guru;
      helu guru 9 || 10;
      aythu guru;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      namskara guru;
      helu guru sullu && nija;
      aythu guru;
    `,
    output: "sullu",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    namskara guru;
    nodu guru a = nija;
    helu guru a && sullu;
    aythu guru;
    `,
    output: "sullu",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    namskara guru;
    nodu guru a = nija;
    helu guru a && nija;
    aythu guru;
    `,
    output: "nija",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      namskara guru;
      helu guru 9 == 10;
      aythu guru;
    `,
    output: "sullu",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      namskara guru;
      helu guru 9 != 10;
      aythu guru;
    `,
    output: "nija",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      namskara guru;
      helu guru 9 || 10;
      aythu guru;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      namskara guru;
      helu guru sullu || nija;
      aythu guru;
    `,
    output: "nija",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      namskara guru;
      nodu guru a = 0;
      guru ellivargu (a < 1) {
        helu guru "bhai";
        a += 1;
      }
      aythu guru;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      namskara guru;
      guru ellivargu (nija) 
        saak bidu guru;
      helu guru "end";
      aythu guru;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      namskara guru;
      nodu guru a = 0;
      guru ellivargu (a < 2) {
        guru ellivargu (nija)
          saak bidu guru;
        helu guru "hello";
        guru eega (nija) aadre
          saak bidu guru;
      }
      aythu guru;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      namskara guru;
      nodu guru a = 0;
      guru ellivargu (a < 2) {
        helu guru "hello";
        guru eega (nija) aadre
          saak bidu guru;
        saak bidu guru;
        saak bidu guru;
      }
      aythu guru;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    namskara guru
    guru eega (nija) aadre{
      helu guru "bhai";
    }
    aythu guru;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    namskara guru
    guru eega (nija) aadre{
      helu guru "nija";
    } illandre guru {
      helu guru "sullu";
    }
    aythu guru;
    `,
    output: "nija",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    namskara guru
    nodu guru x = 9;
    guru eega (x >= 9) aadre{
      x = 5;
      helu guru x;
    } 
    aythu guru;
    `,
    output: "5",
  },
  // logical expression test
  {
    name: `logical "&&" test with nija sullu, should success`,
    input: `
        namskara guru
        guru eega (nija && sullu) aadre{
          helu guru "nija";
        } illandre guru {
          helu guru "sullu";
        }
        aythu guru;
      `,
    output: `sullu`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        namskara guru
        helu guru 90 % 9;
        aythu guru;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        namskara guru
        helu guru 27 % 5;
        aythu guru;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        namskara guru
        helu guru 5 % 20;
        aythu guru;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      namskara guru;
      nodu guru a = 5;
      nodu guru step = 0;
      guru ellivargu (a > 0) {
        step += 1;
        guru eega (a % 2 != 0) aadre{
          a -= 2;
          mundhe nodu guru;
        }
        a -= 1;
      }
      helu guru step;
      aythu guru;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      namskara guru;
      nodu guru a = 5;
      nodu guru step = 0;
      guru ellivargu (a > 0) {
        step += 1;
        guru eega (a % 2 == 0) aadre{
          a -= 2;
          mundhe nodu guru;
        }
        a -= 1;
        mundhe nodu guru;
        helu guru "oye oye oye.. yha tk nhi aana tha bhai";
      }
      helu guru step;
      aythu guru;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      namskara guru;
      nodu guru a = 10;
      nodu guru step = 0;
      guru ellivargu (a > 0) {
        guru eega (a % 2 == 0) aadre{
          a -= 3;
          mundhe nodu guru;
        }
        a -= 1;
        guru eega (step == 1) aadre mundhe nodu guru
        step += 1;
      }
      helu guru step;
      aythu guru;
    `,
    output: "1",
  },
];
