import React, { useContext, useEffect} from 'react'
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button ';
import { WeatherContext } from './context/Weather';

function App(){
  const weather=useContext(WeatherContext);
  console.log(weather);

  // useEffect(()=>{
  //   weather.getCurrentLoc();
  // });

  useEffect(()=>{
    weather.fetchCurr();
  },[]);

  return (
    <div className="App">
      <h1>Weather Forcast</h1>
      <Input />
      <Button onClick={weather.fetchData} value={"Search"}/>
      <Card />
      <Button value={"Refresh"}/>
    </div>
  );
}

export default App;
