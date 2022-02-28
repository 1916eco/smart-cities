import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import chargerData from "../data/chargers.json"
import ElectricCarCharger from './ElectricCarCharger'
import WeatherLayers from './WeatherLayers'
//https://chargepoints.dft.gov.uk/api/retrieve/registry/lat/57.148/long/-2.108/dist/10/format/json/

function LeafletMap() {


  console.log(chargerData)
  return (
    <div >
<MapContainer center={[57.148, -2.108]} zoom={12.6} zoomControl={false}>
<TileLayer
    attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url={'https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token='+process.env.REACT_APP_JAWG_LAB_MAPKEY}
  />  
  {/* <TileLayer
  attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
/> */}
  <WeatherLayers type="temp_new"/>
    
  <ElectricCarCharger/>

</MapContainer>
    </div>
  )
}

export default LeafletMap