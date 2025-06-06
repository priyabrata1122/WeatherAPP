import { createContext, useContext, useState } from "react";
import { GetWeather, GetWeatherLoc} from "../api/api";

export const WeatherContext=createContext(null);

export const UseWeather=()=>{
    return useContext(WeatherContext);
}

export const WeatherProvider=(props)=>{
    const [data,setData]=useState(null);
    const [searchCity, setCity]=useState(null);

    const fetchData=async ()=>{
        const response=await GetWeather(searchCity);
        setData(response);
    }

    const fetchCurr=()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            GetWeatherLoc(pos.coords.latitude,pos.coords.longitude).then((data)=>setData(data));
        })
    }

    return(
        <WeatherContext.Provider value={{data, searchCity, setCity, fetchData, fetchCurr}}>
            {props.children}
        </WeatherContext.Provider>
    );
}