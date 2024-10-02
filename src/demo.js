import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Demo = () => {
    const [name, setName] = useState("Alice");
    const [message, setMessage] = useState("Hello, Alice!");

    useEffect(() => {
        setMessage(`Hello, ${name}!`);
}, [name]);

return (
    <div>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <p>{message}</p>
    </div>
)
}

export default Demo;