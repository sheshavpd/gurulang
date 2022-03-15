export const TokenTypes = {
  NULL_TYPE: null,

  HI_GURU_TYPE: "namskara guru",

  AYTHU_GURU_TYPE: "aythu guru",

  HELU_GURU_TYPE: "helu guru",

  NODU_GURU_TYPE: "nodu guru",

  GURU_EEGA_TYPE: "guru eega",

  AADRE_TYPE: "aadre",

  ILLANDRE_GURU_TYPE: "illandre guru",

  GURU_ELLIVARGU_TYPE: "guru ellivargu",

  SAAK_BIDU_GURU_TYPE: "saak bidu guru",

  MUNDHE_NODU_GURU_TYPE: "mundhe nodu guru",

  NALLA_TYPE: "NALLA",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR"
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  { regex: /^\bnamskara guru\b/, tokenType: TokenTypes.HI_GURU_TYPE },
  { regex: /^\baythu guru\b/, tokenType: TokenTypes.AYTHU_GURU_TYPE },
  { regex: /^\bhelu guru\b/, tokenType: TokenTypes.HELU_GURU_TYPE },
  { regex: /^\bnodu guru\b/, tokenType: TokenTypes.NODU_GURU_TYPE },
  { regex: /^\bguru eega\b/, tokenType: TokenTypes.GURU_EEGA_TYPE },
  { regex: /^\baadre\b/, tokenType: TokenTypes.AADRE_TYPE },
  { regex: /^\billandre guru\b/, tokenType: TokenTypes.ILLANDRE_GURU_TYPE },
  { regex: /^\bnalla\b/, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^\bguru ellivargu\b/, tokenType: TokenTypes.GURU_ELLIVARGU_TYPE },
  { regex: /^\bsaak bidu guru\b/, tokenType: TokenTypes.SAAK_BIDU_GURU_TYPE },
  { regex: /^\bmundhe nodu guru\b/, tokenType: TokenTypes.MUNDHE_NODU_GURU_TYPE },

  // Number
  { regex: /^-?\d+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^nija/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^sullu/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
