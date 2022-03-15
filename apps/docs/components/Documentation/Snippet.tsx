import React from "react";

import { highlight } from "prismjs";

import { guruLangSyntax } from "../common/syntax";


const Snippet = (props: Props) => {
  const { code } = props;

  return (
    <div
      className="bg-editorBackground py-2 px-2 my-6 text-sm text-white documentation-code"
      dangerouslySetInnerHTML={{
        __html: highlight(code, guruLangSyntax, "guruLang").replace(
          /[\r\n]+/g,
          "<br/>"
        ).replace('/  /g', '&emsp;'),
      }}
    ></div>
  );
};
type Props = { code: string };
export default React.memo(Snippet);
