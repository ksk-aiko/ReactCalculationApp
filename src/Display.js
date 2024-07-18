// src/components/Display.js
import React from 'react';

const updateInput = (value) => {
  const input = document.querySelector('.display > div:first-child');
  input.textContent += value;
}

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div>{input}</div>
      <div>{result}</div>
    </div>
  );
};

export default Display;
