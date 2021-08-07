
// Will fetch countries from `https://restcountries.eu`
// Return searched countries to the component
const url = `${process.env.REACT_APP_API_BASE_URL}/rest/v2`;

const searchCountries = async (query:string) : Promise<any> => {
    const result = await fetch(`${url}/name/${query}`);
    return (await result.json())
}

export default { searchCountries }