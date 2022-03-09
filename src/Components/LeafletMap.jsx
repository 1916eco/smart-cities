import React, { useEffect } from 'react'
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import chargerData from "../data/chargers.json"
import ElectricCarCharger from './ElectricCarCharger'
import SideControlBar from './SideControlBar'
import WeatherLayers from './WeatherLayers'
//https://chargepoints.dft.gov.uk/api/retrieve/registry/lat/57.148/long/-2.108/dist/10/format/json/
import { Marker, Popup } from 'react-leaflet'

function LeafletMap() {

  const [electricLayer, setElectricLayer] = useState(false);
  const [userLocationLayer, setUserLocationLayer] = useState(false);
  const [weatherTypeLayer, setWeatherTypeLayer] = useState("temp_new");
  const [weatherLayer, setWeatherLayer] = useState(false);
  const [recyclingPointsLayer, setRecyclingPointsLayer] = useState(false);


  const [latUser, setLatUser] = useState(null);
  const [lngUser, setLngUser] = useState(null);
  if(userLocationLayer){
  navigator.geolocation.getCurrentPosition((position) => {
    setLatUser(position.coords.latitude);
    setLngUser(position.coords.longitude);
  });}

  return (
    <div >
  <SideControlBar weatherLayer={weatherLayer}setElectricLayer={setElectricLayer}  setUserLocationLayer={setUserLocationLayer} setWeatherTypeLayer={setWeatherTypeLayer} setWeatherLayer={setWeatherLayer}/>

<MapContainer center={[57.148, -2.108]} zoom={12.6} zoomControl={false}>
  {/* MAP DEFAULT LOOKS */}
<TileLayer
    attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url={'https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token='+process.env.REACT_APP_JAWG_LAB_MAPKEY}
  />  
  {/* STREET VIEW BRIGHT */}
  {/* <TileLayer
  attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
/> */}


{
  //#region Weather Controls
}
{/* WEATHER LAYERS NOT THE BEST CODE PRACTICE HOWEVER ONSTATE CHANGE THE LAYER DOES NOT RERENDER SO RENDERING ALL 4 AND 
CONDITIONAL RENDERING IT IS THE BEST METHOD IN THIS CASE */}
{
weatherTypeLayer==="clouds_new"&&weatherLayer
?   <WeatherLayers type={"clouds_new"}/>

: null
}
{
weatherTypeLayer==="temp_new"&&weatherLayer
?   <WeatherLayers type={"temp_new"}/>

: null
}
{
weatherTypeLayer==="wind_new"&&weatherLayer
?   <WeatherLayers type={"wind_new"}/>

: null
}
{
weatherTypeLayer==="precipitation_new"&&weatherLayer
?   <WeatherLayers type={"precipitation_new"}/>

: null
}
{
  //#endregion
}

{/* User Location plotter with conditional rendering*/}
{
  userLocationLayer?
    latUser&& lngUser&&   <Marker position={[latUser,lngUser]}>
      <Popup>
        User Location,<br/> Not fully accurate. 
      </Popup>
    </Marker>
  :null
  }


{/* Electric Cars Charger plotter with conditional rendering */}

  {
  electricLayer
  ? <ElectricCarCharger/>
  : null
  }

</MapContainer>
    </div>
  )
}

export default LeafletMap