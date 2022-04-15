import React, { useEffect, useState } from 'react'
import { Marker, Popup } from 'react-leaflet';
import useFetch from '../../Hooks/useFetch'
import { useQuery } from 'react-query'
import axios from 'axios'

function PopupWeather({bases}) {
  const { data } = useFetch(`${process.env.REACT_APP_BACKEND_API_LINK}/api/${bases.location[0]}/${bases.location[1]}`)
  const [dir,setDir] = useState("");
  const [weatherData,setWeatherData] = useState();
  useEffect(() => {
    setWeatherData(data)
  }, [])
  

  

    function winddir(apiDir){
      var direction = apiDir;;
        if (direction < 0 || direction > 360)
        { setDir("");}
        if (direction >= 0 && direction <= 11.25){
        setDir("N");
        }
        if (direction > 348.75 && direction <= 360)
        {
        setDir("N");
        }
        if (direction > 11.25 && direction <= 33.75)
        {
        setDir("NNE");
        }
        if (direction > 33.75 && direction <= 56.25)
        {
        setDir("NE");
        }
        if (direction > 56.25 && direction <= 78.75)
        {
        setDir("ENE");
        }
        if (direction > 78.75 && direction <= 101.25)
        {
        setDir("E");
        }
        if (direction > 101.25 && direction <= 123.75)
        {
        setDir("ESE");
        }
        if (direction > 123.75 && direction <= 146.25)
        {
        setDir("SE");
        }
        if (direction > 146.25 && direction <= 168.75)
        {
        setDir("SSE");
        }
        if (direction > 168.75 && direction <= 191.25)
        {
        setDir("S");
        }
        if (direction > 191.25 && direction <= 213.75)
        {
        setDir("SSW");
        }
        if (direction > 213.75 && direction <= 236.25)
        {
        setDir("SW");
        }
        if (direction > 236.25 && direction <= 258.75)
        {
        setDir("WSW");
        }
        if (direction > 258.75 && direction <= 281.25)
        {
        setDir("W");
        }
        if (direction > 281.25 && direction <= 303.75)
        {
        setDir("WNW");
        }
        if (direction > 303.75 && direction <= 326.25)
        {
        setDir("NW");
        }
        if (direction > 326.25 && direction <= 348.75)
        {
        setDir("NNW");
        }    
        return dir   
        }

  return (
    <>

<Popup>
<b>Name: {bases.homeName}</b><br/>


{
weatherData
? <p> Weather: {data.weather[0].main}<br/>
    Temperature: {(data.main.temp - 273.15).toFixed(0)}℃<br/>
    Wind: {data.wind.speed},{winddir(data.wind.deg)}<br/></p>
: null
}
  </Popup>
</>
  )}

export default PopupWeather