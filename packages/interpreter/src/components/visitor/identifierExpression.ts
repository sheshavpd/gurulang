import Visitor from ".";
import { ASTNode } from "guru-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";

export default class IdentifierExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.name) {
      throw new InvalidStateException(`Invalid node name for: ${node.type}`);
    }

    let value = InterpreterModule.getCurrentScope().get(node.name);

    if (value === null) value = "nalla";
    else if (value === true) value = "nija";
    else if (value === false) value = "sullu";

    return value;
  }
}
