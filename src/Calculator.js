// src/components/Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';
import './index.css'; // 追加

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleEqualClick = () => {
    try {
      setResult(eval(input)); // Note: eval() is used here for simplicity. Consider using a safer alternative.
    } catch {
      setResult('error');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setResult('');
  };

  const handleBackspaceClick = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <ButtonPad 
        onButtonClick={handleButtonClick} 
        onEqualClick={handleEqualClick} 
        onClearClick={handleClearClick} 
        onBackspaceClick={handleBackspaceClick} 
      />
    </div>
  );
};

export default Calculator;
