import React, { ChangeEvent, useState } from 'react';
import searchCountries from '../services/searchCountries';

const SearchBox = (props:any) => {

    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value;
        if(searchText.length>2){
            searchCountries.searchCountries(searchText).then((data:any)=>{
                console.log(data);
                setCountries(data);
            });
        } else {
            setCountries([]);
        }
    }

    const selectCountry = (data:any) => {
        let existingPlace:any = [...selectedCountries,data];
        setSelectedCountries(existingPlace);
    }

    return(
        <div className='search-box-container'>
            <input 
                type='text' 
                className='search-box' 
                placeholder='search for countries or place' 
                id='searchPlace' 
                onChange={ handleChange}/>
            {
                countries.length > 0 &&
                <ul className='lists'>
                    {
                        countries.map((data:any)=>{
                            return <li key={data.alpha3Code} onClick={()=> selectCountry(data)}>{data.name}</li>
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default SearchBox;