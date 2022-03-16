import React from 'react'
import { Popup } from 'react-leaflet';
import useFetch from '../../Hooks/useFetch'

function PopupWeather(bases) {
    //const { data } = useFetch(`http://localhost:3001/api/${bases.bases.location[0]}/${bases.bases.location[1]}`);
    const { data,error } = useFetch(`http://localhost:3001/api/${bases.bases.location[0]}/${bases.bases.location[1]}`);
    function winddir(apiDir){
        var direction = apiDir;
        if (direction < 0 || direction > 360)
        {
        alert("Enter a degree between 0 and 360 degrees.");
        }
        if (direction >= 0 && direction <= 11.25){
        var dir = "N";
        }
        if (direction > 348.75 && direction <= 360)
        {
        var dir = "N";
        }
        if (direction > 11.25 && direction <= 33.75)
        {
        var dir = "NNE";
        }
        if (direction > 33.75 && direction <= 56.25)
        {
        var dir = "NE";
        }
        if (direction > 56.25 && direction <= 78.75)
        {
        var dir = "ENE";
        }
        if (direction > 78.75 && direction <= 101.25)
        {
        var dir = "E";
        }
        if (direction > 101.25 && direction <= 123.75)
        {
        var dir = "ESE";
        }
        if (direction > 123.75 && direction <= 146.25)
        {
        var dir = "SE";
        }
        if (direction > 146.25 && direction <= 168.75)
        {
        var dir = "SSE";
        }
        if (direction > 168.75 && direction <= 191.25)
        {
        var dir = "S";
        }
        if (direction > 191.25 && direction <= 213.75)
        {
        var dir = "SSW";
        }
        if (direction > 213.75 && direction <= 236.25)
        {
        var dir = "SW";
        }
        if (direction > 236.25 && direction <= 258.75)
        {
        var dir = "WSW";
        }
        if (direction > 258.75 && direction <= 281.25)
        {
        var dir = "W";
        }
        if (direction > 281.25 && direction <= 303.75)
        {
        var dir = "WNW";
        }
        if (direction > 303.75 && direction <= 326.25)
        {
        var dir = "NW";
        }
        if (direction > 326.25 && direction <= 348.75)
        {
        var dir = "NNW";
        }
        return dir;        
        }

  return (
    <Popup>
    {""}
    <b>Name: {bases.bases.homeName}</b><br/>
{
data
? <>    Weather: {data.weather[0].main}<br/>
    Temperature: {(data.main.temp - 273.15).toFixed(0)}℃<br/>
    Wind: {data.wind.speed},{winddir(data.wind.deg)}<br/></>
:<p>Loading Weather</p>
}

  </Popup>
  )
}

export default PopupWeather