import React from 'react'
import {  TileLayer } from 'react-leaflet'

function WeatherLayers(props) {
  return (
    <div>  <TileLayer
    attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url={`https://tile.openweathermap.org/map/${props.type}/{z}/{x}/{y}.png?appid=`+process.env.REACT_APP_OPENWEATHERMAP}
  /></div>
  )
}

export default WeatherLayers