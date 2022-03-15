import React from "react";

import dynamic from "next/dynamic";
import { highlight } from "prismjs";

import { guruLangSyntax } from "../../common/syntax";

import "prismjs/themes/prism-tomorrow.css";


const Editor = dynamic(() => import("react-simple-code-editor"), {
  ssr: false,
});

const CodeEditor = (props: Props) => {
  const { handleChange, code } = props;

  const highlightWithLineNumbers = (input: string) =>
    highlight(input, guruLangSyntax, "guruLang")
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join("\n");

  return (
    <div className="editorContainer">
      <Editor
        value={code}
        onValueChange={(code) => handleChange(code)}
        highlight={(code) => highlightWithLineNumbers(code)}
        padding={10}
        textareaClassName="codeArea"
        className="editor"
        id="codeEditor"
        style={{
          fontFamily: "monospace",
          fontSize: 16,
        }}
      />
    </div>
  );
};
type Props = {
  handleChange: (newCode: string) => void;
  code: string;
};
export default React.memo(CodeEditor);


