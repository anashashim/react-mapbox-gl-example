// Searchbox component
import React, { ChangeEvent, useState } from 'react';
import searchCountries from '../services/searchCountries';
import '../css/searchBox.css';
import { useEffect } from 'react';

const SearchBox = (props:any) => {
    
    let [countries, setCountries] = useState([]);
    let [selectedCountries, setSelectedCountriess] = useState<any[]>([]);
    const {setSelectedCountriesList} = props;

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value;
        // Fetch countries only query exceeds 3 letter
        if(searchText.length>2){
            searchCountries.searchCountries(searchText).then((data:any)=>{
                setCountries(data);
            });
        } else {
            setCountries([]);
        }
    }
    
    const selectCountry = (data:any) => {
        let existingPlace:any = [data, ...selectedCountries];
        setSelectedCountriess([...existingPlace]);
    }

    useEffect(()=>{
        // Updating 
        setSelectedCountriesList(selectedCountries)
    },[selectedCountries])

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
                <div>
                    <ul className='lists'>
                        {
                            countries.map((data:any)=>{
                                return <li key={data.alpha3Code} onClick={()=> selectCountry(data)}>{data.name}</li>
                            })
                        }
                    </ul>
                    <div className="overlay" onClick={()=>setCountries([])}></div>
                </div>   
            }
        </div>
    )
}

export default SearchBox;