const Button = () => {
    const buttons = [
        'AC', '▶️', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '='
    ];
    
    const [input, setInput] = useState('');

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
        <div>
            {buttons.map((button, index) => (
                <button
                    className  = 'button'
                    key={index}
                    onClick={() => handleClick(button)}
                >
                    {button}
                </button>
            ))
        }
        </div>
    )
}

const ButtonPad = () => {
    return (
        <div className="button-pad">
            <Button />
        </div>
    )
}

const Display = ({input}) => {
    return (
        <div className="display">{input}</div>
    )
}

const Calculator = () => {
    return (
        <div className="calculator">
            <Display />
            <ButtonPad />
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Calculator />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
