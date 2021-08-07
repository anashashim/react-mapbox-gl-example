
const url = 'https://restcountries.eu/rest/v2';

// Will fetch countries from `https://restcountries.eu/rest/v2`
// Return searched countries to the component

const searchCountries = async (query:string) : Promise<any> => {
    const result = await fetch(`${url}/name/${query}`);
    return (await result.json())
}

export default { searchCountries }