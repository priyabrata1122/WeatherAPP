import React from 'react'
import { UseWeather } from '../context/Weather';

function Input(){
    const weather = UseWeather();
    // console.log("Weather : ",weather); 
    return(
        <input
            className='input'
            placeholder="Search Here"
            value={weather.searchCity??""}
            onChange={(e)=>weather.setCity(e.target.value)}
        />
    );
}

export default Input;
