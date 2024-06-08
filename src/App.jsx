import './App.css';
import axios from 'axios'

function App() {
    const url = 'https://restfulcountries.com/api/v1/countries'
    const apiKeyRestfulCountries = '1074|JVLH4hYvwZegg1iypxmN6Oe1WMA71nj6Vuc1AwGB'

    // State om landinformatie in op te slaan


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
                console.log('Name of the first country:', countries[0].name);

            } else {
                console.log('No countries found in the response');
            }

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
            <ul>

            </ul>
        </>
    )
}



export default App