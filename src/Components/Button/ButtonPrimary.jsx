import React from "react";
import "./Button.css"
const ButtonPrimary = ({ text, className, type }) => {
  return (
    <p type={type} className={`btn-primary px-5 py-3 text-normal cursor-pointer w-fit ${className}`}>
      {text}
    </p>
  );
};

export default ButtonPrimary;
