import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";
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
  };
  return (
    <div>
      <CodeMirror
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "monokai",
          lineNumbers: true,
          smartIndent: true
        }}
      />
    </div>
  );
}

export default Editor;
