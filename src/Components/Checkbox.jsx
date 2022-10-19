import React from "react";

const Checkbox = ({ text, htmlFor }) => {
  return (
    <div className="flex justify-between font-semibold">
      <label htmlFor={htmlFor}>{text}</label>
      <input type="checkbox" id={htmlFor} />
    </div>
  );
};

export default Checkbox;
