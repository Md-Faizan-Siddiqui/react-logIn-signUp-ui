import React from "react";
import "./Button.css";

function Button({ btnText, customClass, width, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${customClass ? customClass : "btn"} `}
        type="button"
        style={{ width: width ? width : null }}
      >
        {btnText}
      </button>
    </>
  );
}

export default Button;
