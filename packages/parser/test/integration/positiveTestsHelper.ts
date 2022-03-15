export const StatementTests = [
  // init statement tests
  {
    name: "empty init statement test, should success",
    input: `
      namskara guru
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "init statement test with semi colon, should success",
    input: `
      namskara guru;
      aythu guru;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "init statement test with semi colon - 2, should success",
    input: `
      namskara guru;
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      namskara guru
      aythu guru;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  // empty statement tests
  {
    name: "multiple empty statements test, should success",
    input: `
      namskara guru
      ;
      ;
      ;;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"EmptyStatement\"},{\"type\":\"EmptyStatement\"},{\"type\":\"EmptyStatement\"}]}}`,
  },
  // block statement tests
  {
    name: "block statement test with empty block, should success",
    input: `
      namskara guru
      {}
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[]}]}}`,
  },
  {
    name: "block statement test with empty block and semi colon, should success",
    input: `
      namskara guru;
      {};
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[]}]}}`,
  },
  {
    name: "block statement test with assignment expression inside, should success",
    input: `
      namskara guru;
      {
        naam = 4;
      }
      aythu guru;
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"naam\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}]}}`,
  },
  {
    name: "block statement test with variable statement inside, should success",
    input: `
      namskara guru
      {
        nodu guru a = 4;
      }
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":4}}]}]}]}}`,
  },
  // print statement test
  {
    name: "print statement test with string printing, should success",
    input: `
      namskara guru
      helu guru "puff...";
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"StringLiteral\",\"value\":\"puff...\"}]}]}}`,
  },
  {
    name: "print statement test with number printing, should success",
    input: `
      namskara guru
      helu guru 478;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"NumericLiteral\",\"value\":478}]}]}}`,
  },
  {
    name: "print statement test with boolean printing, should success",
    input: `
      namskara guru
      helu guru nija, sullu;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"BooleanLiteral\",\"value\":\"nija\"},{\"type\":\"BooleanLiteral\",\"value\":\"sullu\"}]}]}}`,
  },
  {
    name: "print statement test with identifier printing, should success",
    input: `
      namskara guru
      helu guru a, b, c;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"IdentifierExpression\",\"name\":\"a\"},{\"type\":\"IdentifierExpression\",\"name\":\"b\"},{\"type\":\"IdentifierExpression\",\"name\":\"c\"}]}]}}`,
  },
  {
    name: "print statement test with nalla printing, should success",
    input: `
      namskara guru
      helu guru nalla;
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"NullLiteral","value":"nalla"}]}]}}`,
  },
  {
    name: "print statement test with variable nalla printing, should success",
    input: `
      namskara guru
      nodu guru a = nalla;
      helu guru a;
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"nalla"}}]},{"type":"PrintStatement","expressions":[{"type":"IdentifierExpression","name":"a"}]}]}}`,
  },
  {
    name: "print statement test with logical AND, should success",
    input: `
      namskara guru
      helu guru a && b;
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"LogicalExpression","operator":"&&","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}}]}]}}`,
  },
  {
    name: "print statement test with assignment, should success",
    input: `
      namskara guru
      helu guru a = 9;
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"NumericLiteral","value":9}}]}]}}`,
  },
  {
    name: "print statement test with logical OR, should success",
    input: `
      namskara guru
      helu guru 9 || 90;
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"LogicalExpression","operator":"||","left":{"type":"NumericLiteral","value":9},"right":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "print statement test with equality operator, should success",
    input: `
      namskara guru
      helu guru 9 == 90;
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"BinaryExpression","operator":"==","left":{"type":"NumericLiteral","value":9},"right":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  // variable statement test
  {
    name: "variable statement test with basic variable declaration, should success",
    input: `
      namskara guru
      nodu guru a, b, c;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"nalla\"}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"nalla\"}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"c\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"nalla\"}}]}]}}`,
  },
  {
    name: "variable statement test with basic variable declaration and initialisation, should success",
    input: `
      namskara guru
      nodu guru a = 10, b;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":10}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"nalla\"}}]}]}}`,
  },
  {
    name: "variable statement test with multiple variable initialisation, should success",
    input: `
      namskara guru
      nodu guru a = 10, b = 5;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":10}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":5}}]}]}}`,
  },
  {
    name: "variable statement test with multiple variable initialisation with same value, should success",
    input: `
      namskara guru
      nodu guru a = b = 5;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":5}}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with some expression, should success",
    input: `
      namskara guru
      nodu guru a = 7 + 90;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"NumericLiteral\",\"value\":7},\"right\":{\"type\":\"NumericLiteral\",\"value\":90}}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with nalla literal, should success",
    input: `
      namskara guru
      nodu guru a = nalla;
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"nalla"}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with nalla literal, should success",
    input: `
      namskara guru
      nodu guru a = nalla;
      aythu guru
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"nalla"}}]}]}}`,
  },
];

export const ExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      namskara guru
      a = 4;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      namskara guru
      a *= 4;
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"*=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      namskara guru
      (a + 4);
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      namskara guru
      (a + 4) * 10 + (5 - 4);
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}},\"right\":{\"type\":\"NumericLiteral\",\"value\":10}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"NumericLiteral\",\"value\":5},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}}]}}`,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      namskara guru
      (a * (4 + 8) + 10);
      aythu guru
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"NumericLiteral\",\"value\":4},\"right\":{\"type\":\"NumericLiteral\",\"value\":8}}},\"right\":{\"type\":\"NumericLiteral\",\"value\":10}}}]}}`,
  },
  {
    name: "paranthesized expression test with assignment expression, should success",
    input: `
    namskara guru
    (x = 9);
    aythu guru;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}}`,
  },
  {
    name: "paranthesized expression test with assignment expression, should success",
    input: `
    namskara guru
    (x >= 9);
    aythu guru;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}}`,
  },
  // nalla and boolean expression test
  {
    name: "complex expression test with one nalla operand, should success",
    input: `
        namskara guru
        (nalla * (4 + 8 + 10));
        aythu guru
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"NullLiteral","value":"nalla"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NumericLiteral","value":4},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand, should success",
    input: `
        namskara guru
        (nalla * (nija + 8 + 10));
        aythu guru
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"NullLiteral","value":"nalla"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"BooleanLiteral","value":"nija"},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 2, should success",
    input: `
        namskara guru
        (nija * (nalla + 8 + 10));
        aythu guru
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"nija"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"nalla"},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 3, should success",
    input: `
        namskara guru
        (nalla + nija);
        aythu guru
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"nalla"},"right":{"type":"BooleanLiteral","value":"nija"}}}]}}`,
  },
  {
    name: "complex expression test with one boolean operand, should success",
    input: `
        namskara guru
        (nija * (4 + 8 + 10));
        aythu guru
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"nija"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NumericLiteral","value":4},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "expression test with only boolean operand, should success",
    input: `
        namskara guru
        nija + sullu;
        aythu guru
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"+","left":{"type":"BooleanLiteral","value":"nija"},"right":{"type":"BooleanLiteral","value":"sullu"}}}]}}`,
  },
  {
    name: "multiplicative expression test with only boolean operand, should success",
    input: `
        namskara guru
        nija * sullu;
        aythu guru
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"nija"},"right":{"type":"BooleanLiteral","value":"sullu"}}}]}}`,
  },
  {
    name: "division expression test with only boolean operand, should success",
    input: `
        namskara guru
        nija / sullu;
        aythu guru
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"/","left":{"type":"BooleanLiteral","value":"nija"},"right":{"type":"BooleanLiteral","value":"sullu"}}}]}}`,
  },
  {
    name: "print statement test with expression containing nalla, should success",
    input: `
        namskara guru
        helu guru nalla + 5;
        aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"nalla"},"right":{"type":"NumericLiteral","value":5}}]}]}}`,
  },
  // logical expression test
  {
    name: `logical "&&" test with nija sullu, should success`,
    input: `
        namskara guru
        guru eega (nija && sullu) aadre;
        aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"&&","left":{"type":"BooleanLiteral","value":"nija"},"right":{"type":"BooleanLiteral","value":"sullu"}},"consequent":{"type":"EmptyStatement"},"alternate":{"type":"NullLiteral","value":"nalla"}}]}}`,
  },
  {
    name: `logical "&&" test with expression, should success`,
    input: `
        namskara guru
        guru eega (a + b && d) aadre;
        aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"&&","left":{"type":"BinaryExpression","operator":"+","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}},"right":{"type":"IdentifierExpression","name":"d"}},"consequent":{"type":"EmptyStatement"},"alternate":{"type":"NullLiteral","value":"nalla"}}]}}`,
  },
  {
    name: `logical "&&" test in variable declaration, should success`,
    input: `
        namskara guru
        nodu guru a = b && d;
        aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"LogicalExpression","operator":"&&","left":{"type":"IdentifierExpression","name":"b"},"right":{"type":"IdentifierExpression","name":"d"}}}]}]}}`,
  },
  // logical OR
  {
    name: `logical "||" test with nija sullu, should success`,
    input: `
        namskara guru
        guru eega (nija || sullu) aadre;
        aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"||","left":{"type":"BooleanLiteral","value":"nija"},"right":{"type":"BooleanLiteral","value":"sullu"}},"consequent":{"type":"EmptyStatement"},"alternate":{"type":"NullLiteral","value":"nalla"}}]}}`,
  },
  {
    name: `logical "||" test with expression, should success`,
    input: `
        namskara guru
        guru eega (a + b || d) aadre;
        aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"||","left":{"type":"BinaryExpression","operator":"+","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}},"right":{"type":"IdentifierExpression","name":"d"}},"consequent":{"type":"EmptyStatement"},"alternate":{"type":"NullLiteral","value":"nalla"}}]}}`,
  },
  {
    name: `logical "||" test in variable declaration, should success`,
    input: `
        namskara guru
        nodu guru a = b || d;
        aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"LogicalExpression","operator":"||","left":{"type":"IdentifierExpression","name":"b"},"right":{"type":"IdentifierExpression","name":"d"}}}]}]}}`,
  },
];

export const IfStatementTests = [
  {
    name: "if statement success test - 1: only if",
    input: `
    namskara guru
    guru eega (nija) aadre {
    }
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nija"},"consequent":{"type":"BlockStatement","body":[]},"alternate":{"type":"NullLiteral","value":"nalla"}}]}}`,
  },
  {
    name: "if statement success test - 2: if else both",
    input: `
    namskara guru
    guru eega (nija) aadre {
    } illandre guru {

    }
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nija"},"consequent":{"type":"BlockStatement","body":[]},"alternate":{"type":"BlockStatement","body":[]}}]}}`,
  },
  {
    name: "if statement success test - 3: if only with comarison condn",
    input: `
    namskara guru
    nodu guru x = 9;
    guru eega (x >= 9) aadre {
      x = 5;
    } 
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternate":{"type":"NullLiteral","value":"nalla"}}]}}`,
  },
  {
    name: "if statement success test - 4: if only with equality condn",
    input: `
    namskara guru
    nodu guru x = 9;
    guru eega (x == 9) aadre{
      x = 5;
    } 
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"==","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternate":{"type":"NullLiteral","value":"nalla"}}]}}`,
  },
  {
    name: "if statement success test - 4: if only with equality condn",
    input: `
    namskara guru
    nodu guru x = 9;
    guru eega (x == 9) aadre{
      x = 5;
    } 
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"==","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternate":{"type":"NullLiteral","value":"nalla"}}]}}`,
  },
  {
    name: "if statement success test - 5: if only with inequality condn",
    input: `
    namskara guru
    nodu guru x = 9;
    guru eega (x != 9) aadre{
      x = 5;
    } 
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternate":{"type":"NullLiteral","value":"nalla"}}]}}`,
  },
  {
    name: "if statement success test - 6: else with only expression statement",
    input: `
    namskara guru
    nodu guru x = 9;
    guru eega (x != 9) aadre{
      x = 5;
    } illandre guru (x >= 9);
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternate":{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}}]}}`,
  },
  {
    name: "if statement success test - 7: with block",
    input: `
    namskara guru
    nodu guru x = 9;
    guru eega (x != 9) aadre
      x = 5;
    illandre guru (x >= 9);
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}},"alternate":{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}}]}}`,
  },
];




export const WhileStatementTests = [
  {
    name: "while statement success test: only if",
    input: `
    namskara guru
    guru ellivargu (nija) {
    }
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BooleanLiteral","value":"nija"},"body":{"type":"BlockStatement","body":[]}}]}}`,
  },
  {
    name: "while statement success test: with some body",
    input: `
    namskara guru
    guru ellivargu (x > 9) {
      helu guru "hello";
    }
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}]}}]}}`,
  },
  {
    name: "while statement success test: with single statement",
    input: `
    namskara guru
    guru ellivargu (x > 9)
      helu guru "hello";
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}}]}}`,
  },
  {
    name: "while statement success test: with single statement as body and statement outside of body",
    input: `
    namskara guru
    guru ellivargu (x > 9)
      helu guru "hello";
    nodu guru a = 90;
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "while statement success test: with break statement",
    input: `
    namskara guru
    guru ellivargu (x > 9) {
      saak bidu guru;
    }
    nodu guru a = 90;
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"BreakStatement"},{"type":"EmptyStatement"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "while statement success test: with continue statement",
    input: `
    namskara guru
    guru ellivargu (x > 9) {
      mundhe nodu guru;
    }
    nodu guru a = 90;
    aythu guru;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"ContinueStatement"},{"type":"EmptyStatement"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  }
]
