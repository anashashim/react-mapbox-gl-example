// Using a Mapbox for integrating map into Application

import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../css/map.css';

const CountryMap = (props:any) => {
    const {countries} = props;
    console.log("COUNTIRES", countries);
    // Token need to change, token will vary from user to user, need to create it from Mapbox offical website
    const token = 'pk.eyJ1IjoiYW5hc3BoYXNoaW0iLCJhIjoiY2tzMDU4cGppMHkyZTJ2bXN6NmJhemRjbSJ9.HY8f_u0FD-mTKX-pU4l6vQ';
    const Map = ReactMapboxGl({
        accessToken: token
    });
    const zoom: [number] = [0]; // Zoom out 0, we can see whole map

    return(
        <div className='map-box-container'>
            <Map 
                style="mapbox://styles/mapbox/light-v9"
                zoom={zoom}>
                {
                    countries.map((city:any)=>{
                        return(
                            <Marker key={city.alpha3Code} coordinates={[city.latlng[1], city.latlng[0]]}>
                                <div className='mark'>
                                    <span className='city-name' title={city.name}>
                                        {city.name}
                                    </span>
                                </div>
                            </Marker>
                        )
                    })
                }  
            </Map>  
        </div>
        
    )
}

export default CountryMap;