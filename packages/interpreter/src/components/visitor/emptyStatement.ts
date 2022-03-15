import Visitor from ".";
import { ASTNode } from "guru-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
