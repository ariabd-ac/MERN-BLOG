import React from "react";
import "./Upload.scss";
import { LoginBg } from "../../../assets";

const Upload = ({ onChange, ...rest }) => {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="preview" />
      <input type="file" onChange={onChange} {...rest} />
    </div>
  );
};

export default Upload;
