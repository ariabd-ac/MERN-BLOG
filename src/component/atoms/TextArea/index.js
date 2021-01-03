import React from "react";
import "./textArea.scss";

const TextArea = ({ onChange, ...rest }) => {
  return (
    <div>
      <textarea className="text-area" onChange={onChange} {...rest}></textarea>
    </div>
  );
};

export default TextArea;
