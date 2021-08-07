import React from 'react';
import CountryMap from '../components/CountryMap';
import PopulationChart from '../components/PopulationChart';

const SearchPage = () => {
    return(
        <div className="App">
            <div className='header'>
                
            </div>
            <div className='map-box-container'>
                <CountryMap></CountryMap>
            </div>
            <div className='chart-box-container'>
                <PopulationChart></PopulationChart>
            </div>
        </div>
    )
}

export default SearchPage;