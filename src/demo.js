import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Demo = () => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        // Fetch a random country from the API
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => {
                // Set the random country to the state
                const randomCountry = data[Math.floor(Math.random() * data.length)];
                setCountry(randomCountry);
            })
    // [] means that this effect will only run once after the initial render
    }, []);

    return (
        <div>
            <h1>Random Country Infomation</h1>
            {country ? (
                <div>
                    <h2>{country.name}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population.toLocaleString()}</p>
                    <p>language: {country.languages.map(lang => lang.name).join(', ')}</p>
                    <img src={country.flag} alt={`Flag of ${country.name}`} className="flagImage"/>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Demo;