import React, { useState } from 'react';
import CountryMap from '../components/CountryMap';
import PopulationChart from '../components/PopulationChart';
import SearchBox from '../components/SearchBox';
import { ChartDataItem } from '../types/chartDataItem';

const SearchPage = () => {

    const [selectedCountries, setSelectedCountries] = useState([]);
    const [chartData, setChartData]= useState<ChartDataItem[]>([]);

    const setDetails =(countries:any) => {
        setSelectedCountries(countries)
        let chartD = countries.map((country:any)=>{
            return {
                country: country.name, population: country.population, total: 987
            }
        })
        setChartData(chartD);
    }
    return(
        <div className="App">
            <div className='header'>
                <div className='logo'>
                    <img src='/assets/images/logo.png'/>
                    Mapbox
                </div>
                <SearchBox setSelectedCountriesList={(countries:any)=> setDetails(countries)}></SearchBox>
            </div>
            <PopulationChart chartData={chartData}></PopulationChart>
            <CountryMap countries={selectedCountries}></CountryMap>
        </div>
    )
}

export default SearchPage;
