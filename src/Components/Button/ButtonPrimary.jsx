import React from "react";
import "./Button.css"
const ButtonPrimary = ({ text, className, type, href }) => {
  return (
    <div className={`${className} w-fit`}>
    <a type={type} href={href} className={`btn-primary px-5 py-3 text-normal cursor-pointer  `}>
      {text}
    </a>
    </div>
  );
};

export default ButtonPrimary;
