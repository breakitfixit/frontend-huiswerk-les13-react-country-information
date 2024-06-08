// import './App.css';
// import axios from 'axios'
// import {useState} from "react";
//
//
// function App() {
//     const apiKeyRestfulCountries = '1074|JVLH4hYvwZegg1iypxmN6Oe1WMA71nj6Vuc1AwGB'
//
//     const [countries, setCountries] = useState([]);
//     // const [error, setError] = useState(null);
//
//     // async function
//     async function getRestfulCountries() {
//         try {
//             // in plaats van alleen de url typ je een komma en daarna het headers object.
//             // Let goed op aanhalingstekens en backticks
//             // Het headers object stuur je altijd mee met een get request.
//             const response = await axios.get('https://restfulcountries.com/api/v1/countries/Afghanistan', {
//                 headers: {
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${apiKeyRestfulCountries}`
//                 }
//             });
//             console.log("Country Name: ", response.data.name);
//             console.log("Capital: ", response.data.capital);
//             console.log("Population: ", response.data.population);
//
//             // Update the state with the country data
//             setCountries(prevCountries => [...prevCountries, response.data]);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//
//     // bevat button die de async uitvoert. In je console vind je de data
//     return (
//         <>
//             <h2>Restfulcountries</h2>
//             <p>Get all the countries</p>
//             <button type='button' onClick={getRestfulCountries}>Get Countries</button>
//             <ul>
//                 {countries.map((country) => (
//                     <div key={country.iso3}>
//                         <li>{country.name}</li>
//                         <img src={country.href.flag} alt={`Flag of ${country.name}`}></img>
//                         <p>Has a population of {country.population} people</p>
//                     </div>
//                 ))}
//             </ul>
//         </>
//     );
// }
//
//
// export default App