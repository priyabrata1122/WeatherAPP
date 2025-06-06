const url="https://api.weatherapi.com/v1/current.json?key=39a2397e7ed34fcfa62130412250606";

export async function GetWeather(city){
    const response=await fetch(`${url}&q=${city}&aqi=yes`);
    return await response.json();
}

export async function GetWeatherLoc(lat,lon){
    const response=await fetch(`${url}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}
