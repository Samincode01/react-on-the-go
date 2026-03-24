import React, { useState } from 'react';
import './country.css'
const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited]= useState(false)
    const handleClick=()=>
    {
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited ?'country-visited':'country-not-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags} />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population} </p>
            <p>Capital: {country.capital.capital} </p>
            <p>Area: {country.area.area} square kilometers. {country.area.area > 300000 ? "Big Country":'Small Country'} </p>
            <button onClick={handleClick}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;