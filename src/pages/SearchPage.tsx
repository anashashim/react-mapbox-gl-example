import React, { useState } from 'react';
import CountryMap from '../components/CountryMap';
import PopulationChart from '../components/PopulationChart';
import SearchBox from '../components/SearchBox';

const SearchPage = () => {

    return(
        <div className="App">
            <div className='header'>
                <div>Logo</div>
                <SearchBox></SearchBox>
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