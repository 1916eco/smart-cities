import React, { useEffect, useState } from 'react'
import { Marker, Popup } from 'react-leaflet';
import useFetch from '../../Hooks/useFetch'
import { useQuery } from 'react-query'
import axios from 'axios'
import {Button} from "react-bootstrap";

function PopupWeather({bases}) {
  //const [weatherData,setWeatherData] = useState();
  //const [airQualityData,setAirQualityData] = useState();
  const [showData,setShowData] = useState(false);

  const { data:weatherData } = useFetch(`${process.env.REACT_APP_BACKEND_API_LINK}/api/${bases.location[0]}/${bases.location[1]}`)
  const { data:airQualityData,loading } = useFetch(`${process.env.REACT_APP_BACKEND_API_LINK}/api/airQuality/${bases.location[0]}/${bases.location[1]}`)
  // const fetchAirData = async () => {
  //   return axios.get(`${process.env.REACT_APP_BACKEND_API_LINK}/api/airQuality/${bases.location[0]}/${bases.location[1]}`)
  
  // }
  // const fetchWeatherData = async () => {
  //   return axios.get(`${process.env.REACT_APP_BACKEND_API_LINK}/api/${bases.location[0]}/${bases.location[1]}`)
  // }

  
  
  //const { data: weatherData } =useQuery('weather', fetchWeatherData())
  //const { data:airQualityData } =useQuery('airQuality', fetchAirData())

  
  const handleGetApis = (e) => {
    e.preventDefault();
    console.log(weatherData)
    console.log(airQualityData)
    setShowData(true)
    
  };
  return (
    <>

<Popup>
<b>Name: {bases.homeName}</b><br/>

{
loading
? <h6>Loading</h6>
: null
}


{
weatherData && airQualityData
? <p> Weather: {weatherData.weather[0].main}<br/>
Temperature: {(weatherData.main.temp - 273.15).toFixed(0)}℃<br/>
Wind: {weatherData.wind.speed}<br/>
Air Quality: {airQualityData.list[0].main.aqi}</p>
: <Button onClick={(e) => handleGetApis(e)}>Get Data</Button>
}
  </Popup>
</>
  )}

export default PopupWeather