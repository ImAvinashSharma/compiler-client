import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/lint/lint";
import "codemirror/addon/display/autorefresh";

// import "codemirror/addon/hint/python-hint";

import { Controlled as CodeMirror } from "react-codemirror2";

function Editor(props) {
  let { language, value, onChange } = props;
  switch (language) {
    case "py":
      language = "text/x-python";
      break;
    case "c":
      language = "text/x-csrc";
      break;
    case "cpp":
      language = "text/x-c++src";
      break;
    default:
      language = "";
      break;
  }
  const handleChange = (editor, data, value) => {
    onChange(value);
    editor.showHint({ completeSingle: false });
  };
  return (
    <div>
      <CodeMirror
        value={value}
        onBeforeChange={handleChange}
        options={{
          tabSize: 4,
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "monokai",
          fixedGutter: true,
          foldGutter: true,
          lineNumbers: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
          matchBrackets: true,
          smartIndent: true,
          extraKeys: {
            "Ctrl-Space": "autocomplete"
          },
          autoRefresh: true
        }}
      />
    </div>
  );
}

export default Editor;
