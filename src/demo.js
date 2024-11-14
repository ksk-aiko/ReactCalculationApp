import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// useReducerをインポート
import { useReducer } from "react";

const Demo = () => {
    function counterReducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    function Counter() {
        const [state, dispatch] = useReducer(counterReducer, { count: 0 });

        return (
            <>
                Count: {state.count}
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
            </>
        )
    }

    return (
        <div>
            <Counter />
        </div>
    );
}

export default Demo;