import React, { useState } from 'react';
import CountryMap from '../components/CountryMap';
import PopulationChart from '../components/PopulationChart';
import SearchBox from '../components/SearchBox';

const SearchPage = () => {

    const [selectedCountries, setSelectedCountries] = useState([]);

    return(
        <div className="App">
            <div className='header'>
                <div className='logo'>
                    <img src='/assets/images/logo.png'/>
                    Mapbox
                </div>
                <SearchBox setSelectedCountriesList={(countries:any)=>setSelectedCountries(countries)}></SearchBox>
            </div>
            <CountryMap countries={selectedCountries}></CountryMap>
            
            <div className='chart-box-container'>
                <PopulationChart></PopulationChart>
            </div>
        </div>
    )
}

export default SearchPage;
