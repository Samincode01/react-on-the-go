import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = ({CountriesPromise}) => {
    const[visitedCountries, setVisitedCountries]= useState([]);
    const handleVisitedCountries=(country)=>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const countriesData = use(CountriesPromise)
    const countries = countriesData.countries
    return (
        <div>
            <h1>Total Countries:{countries.length}</h1>
            <p>Visited Countries: {visitedCountries.length}</p>
            <ol className='visitedCountryNames'>
                
                {
                    visitedCountries.map(country=> <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country =>  <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;