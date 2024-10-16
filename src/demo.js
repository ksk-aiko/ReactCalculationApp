import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function useFormField(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange: handleChange,
    };
}

const Demo = () => {
    const name = useFormField("");
    const email = useFormField("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" {...name} placeholder="Name"/>
            <input type="email" {...email} placeholder="Email"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Demo;