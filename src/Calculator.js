import React, { useState } from "react";


const Calculator = () => {

    const buttons = [
        'AC', '▶️', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '='
    ];

    const [input, setInput] = React.useState('');

    const handleClick = (value) => {
        if(value === 'AC') {
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
    }
    
    return (
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="button-pad">
                {buttons.map((button, index) => (
                    <button
                        className  = 'button'
                        key={index}
                        onClick={() => handleClick(button)}
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
}


export default Calculator;
