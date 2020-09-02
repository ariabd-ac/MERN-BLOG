import React from "react";
import "./link.scss";

const index = ({ title, onClick }) => {
  return (
    <p className="link" onClick={onClick}>
      {title}
    </p>
  );
};

export default index;
