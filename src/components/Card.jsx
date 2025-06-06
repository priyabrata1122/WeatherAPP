import React from 'react'
import { UseWeather } from '../context/Weather';

function Card(){
    const weather=UseWeather();
    return (
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon} alt="image_photo" />
            <h2>{weather?.data?.current?.temp_c} C</h2>
            <h2>{weather?.data?.location?.name},{weather?.data?.location?.region},{weather?.data?.location?.country}</h2>
        </div>
    );
}

export default Card;
