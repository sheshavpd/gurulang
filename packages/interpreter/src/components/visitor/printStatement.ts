import Visitor from ".";
import { ASTNode } from "guru-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";


export default class PrintStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.expressions)
      throw new InvalidStateException(
        `No expressions to print: ${node.expressions}`
      );

    const value = node.expressions
      .map((expression: ASTNode) => {
        let currentNodeOutput = InterpreterModule.getVisitor(expression.type).visitNode(expression);
        if (currentNodeOutput === true)
          currentNodeOutput = "nija";
        else if (currentNodeOutput === false)
          currentNodeOutput = "sullu";
        return currentNodeOutput;
      }
      )
      .join(" ");
    console.log(value);
  }
}
