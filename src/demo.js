import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// Context
const ThemeContext = React.createContext('light');

const Demo = () => {
    const Toolbar = () => {
        return (
            <div>
                <ThemedButton />
            </div>
        );
    }

    const ThemedButton = () => {
        // Use the Consumer to grab the current theme
        const theme = React.useContext(ThemeContext);
        // useEffect hook to log the current theme
        useEffect(() => {
            console.log(`現在のテーマ: ${theme}`);
        }, [theme]);

        const buttonClassName =  theme === 'dark' ? 'button-dark' : 'button-light';

        return <button className={buttonClassName}>I am styled by theme context!</button>
        
    }

    return (
        // Passes the current theme to the value prop
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

export default Demo;