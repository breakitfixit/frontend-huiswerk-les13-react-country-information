import './App.css';
import axios from 'axios'
import {useState} from "react";
import world_map from './assets/world_map.png'


function App() {
    const url = 'https://restfulcountries.com/api/v1/countries'
    const apiKeyRestfulCountries = '1074|JVLH4hYvwZegg1iypxmN6Oe1WMA71nj6Vuc1AwGB'
    const [error, toggleError] = useState(false);
    const [countries, setCountries] = useState([]); // State om landinformatie in op te slaan

    async function fetchCountries() {

        try {
            const response = await axios.get(url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${apiKeyRestfulCountries}`
                }
            });
            response.data.data.sort((b, a) => parseFloat(a.population.replace(/,/g, "")) - parseFloat(b.population.replace(/,/g, "")));
            // sortering omgedraaid - aantal inwoners van hoog naar laag
            console.log(response);
            setCountries(response.data.data);
        } catch (e) {
            toggleError(true);
            console.error(e);
        }
    }

    async function fetchCountry() {

        try {
            const response = await axios.get('https://restfulcountries.com/api/v1/countries/germany', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${apiKeyRestfulCountries}`
                }
            });
            console.log(response);

        } catch (e) {
            toggleError(true);
            console.error(e);
        }
    }


    return (
        <div className={'app-container'}>
            <img src={world_map} alt="World Map" style={{width: '50%', height: 'auto'}}/>
            <h2>Restfulcountries</h2>
            <button type='button' onClick={fetchCountry}>Get Country</button>
            <p>Get all the countries</p>
            <button type='button' onClick={fetchCountries}>Get Countries</button>
            <ul className={'shown-countries'}>
                {countries.map((country) => {
                    return (
                        <li key={country.iso3}>
                            <p className={country.continent}>{country.name}</p>
                            <img src={country.href.flag} alt={`Flag of ${country.name}`}></img>
                            <p>Has a population of {country.population} people</p>
                        </li>
                    )
                })}
            </ul>
            {error === true && <p>Error!</p>}
        </div>
    )
}


export default App