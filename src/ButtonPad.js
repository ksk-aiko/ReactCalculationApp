// src/components/ButtonPad.js
import React from 'react';
import Button from './Button';

const ButtonPad = ({ onButtonClick, onEqualClick, onClearClick, onBackspaceClick }) => {
  const buttons = [
    { label: 'AC', handler: onClearClick, className: 'double' },
    { label: '▶️', handler: onBackspaceClick },
    { label: '/', handler: onButtonClick, className: 'operator' },
    { label: '7', handler: onButtonClick },
    { label: '8', handler: onButtonClick },
    { label: '9', handler: onButtonClick },
    { label: '*', handler: onButtonClick, className: 'operator' },
    { label: '4', handler: onButtonClick },
    { label: '5', handler: onButtonClick },
    { label: '6', handler: onButtonClick },
    { label: '-', handler: onButtonClick, className: 'operator' },
    { label: '1', handler: onButtonClick },
    { label: '2', handler: onButtonClick },
    { label: '3', handler: onButtonClick },
    { label: '+', handler: onButtonClick, className: 'operator' },
    { label: '0', handler: onButtonClick, className: 'double' },
    { label: '.', handler: onButtonClick },
    { label: '=', handler: onEqualClick, className: 'operator' },
  ];

  return (
    <div className="button-pad">
      {buttons.map((btn, index) => (
        <Button 
          key={index} 
          value={btn.label} 
          onClick={btn.handler}
          className={btn.className}
        />
      ))}
    </div>
  );
};

export default ButtonPad;
