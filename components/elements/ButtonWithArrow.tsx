
import React from 'react';

const ButtonWithArrow = () => {
  return (
    <button className="button-with-arrow">
    <span className="arrow">
      Cliquez-moi
      <svg
        className="arrow-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M21 12l-18 12V12l18-12z"
          style={{ strokeDasharray: "30 70" }}
        />
      </svg>
    </span>
  </button>
  );
};

export default ButtonWithArrow;