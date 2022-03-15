import { ASTNode } from "guru-lang-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
