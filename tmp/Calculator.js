// src/components/Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';
import './index.css'; // 追加

const Calculator = () => {
  const [input, setInput] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setInput('');
      return;
    }
    else if(value === '▶️') {
      setInput(input.slice(0, -1));
      return;
    }
    else if(value === '=') {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  }
  else {
    setInput(input + value);
  }
};

  return (
    <div className="calculator">
      <Display input={input}/>
      <ButtonPad 
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default Calculator;
