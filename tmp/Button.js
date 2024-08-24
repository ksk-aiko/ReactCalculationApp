// src/components/Button.js
import React from 'react';

const Button = ({ value, onClick, className=''}) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
