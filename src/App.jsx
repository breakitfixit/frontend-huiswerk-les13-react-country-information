import './App.css';
import axios from 'axios'
import {useState} from "react";

function App() {
    const url = 'https://restfulcountries.com/api/v1/countries'
    const apiKeyRestfulCountries = '1074|JVLH4hYvwZegg1iypxmN6Oe1WMA71nj6Vuc1AwGB'


    // State om landinformatie in op te slaan
    const [countries, setCountries] = useState([]);

    // async function
    async function getRestfulCountries() {
        try {
            const response = await axios.get(url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${apiKeyRestfulCountries}`
                }
            });

            // console.log(response.data);

            const countries = response.data.data; //
            if (Array.isArray(countries) && countries.length > 0) {
                // console.log('Name of the first country:', countries[0].name);
                // console.log('Capital of the first country:', countries[0].capital);


            } else {
                console.log('No countries found in the response');
            }
            setCountries(response.data.data);
            console.log(countries)

        } catch (error) {
            console.error(error)
        }
    }

    // bevat button die de async uitvoert. In je console vind je de data.

    return (
        <>
            <h2>Restfulcountries</h2>
            <p>Get all the countries</p>
            <button type='button' onClick={getRestfulCountries}>Get Countries</button>
            <li>
                <p>{countries[0].name}</p>
                <p>Has a population of {countries[0].population} people</p>
            </li>
            {/*<ul>{countries.map((country) => {*/}
            {/*    return (*/}
            {/*        <li key={country.iso3}>*/}
            {/*            <p className={country.continent}>{country.name}</p>*/}
            {/*            <img src={country.href.flag}></img>*/}
            {/*            <p>Has a population of {country.population} people</p>*/}
            {/*        </li>*/}
            {/*    )*/}
            {/*})}*/}
            {/*</ul>*/}
            {/*{error === true && <p>Error!</p>}*/}
        </>
    )
}


export default App