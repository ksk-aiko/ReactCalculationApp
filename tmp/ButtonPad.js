// src/components/ButtonPad.js
import React from 'react';
import Button from './Button';

const ButtonPad = ({handleButtonClick}) => {
  const buttons = [
    { label: 'AC', handler: handleButtonClick, className: 'double' },
    { label: '▶️', handler: handleButtonClick},
    { label: '/', handler: handleButtonClick, className: 'operator' },
    { label: '7', handler: handleButtonClick },
    { label: '8', handler: handleButtonClick },
    { label: '9', handler: handleButtonClick },
    { label: '*', handler: handleButtonClick, className: 'operator' },
    { label: '4', handler: handleButtonClick },
    { label: '5', handler: handleButtonClick },
    { label: '6', handler: handleButtonClick },
    { label: '-', handler: handleButtonClick, className: 'operator' },
    { label: '1', handler: handleButtonClick },
    { label: '2', handler: handleButtonClick },
    { label: '3', handler: handleButtonClick },
    { label: '+', handler: handleButtonClick, className: 'operator' },
    { label: '0', handler: handleButtonClick, className: 'double' },
    { label: '.', handler: handleButtonClick },
    { label: '=', handler: handleButtonClick, className: 'operator' },
  ];

  return (
    <div className="button-pad">
      {buttons.map((btn, index) => (
        <Button 
          key={index} 
          value={btn.label} 
          onClick={() => handleButtonClick(btn.label)}
          className={btn.className}
        />
      ))}
    </div>
  );
};

export default ButtonPad;
