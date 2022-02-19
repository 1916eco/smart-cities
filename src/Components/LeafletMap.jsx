import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//https://chargepoints.dft.gov.uk/api/retrieve/registry/lat/57.148/long/-2.108/dist/10/format/json/

function LeafletMap() {

  return (
    <div >
<MapContainer center={[57.148, -2.108]} zoom={12.6} zoomControl={false}>
  <TileLayer
    attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url={'https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token='+process.env.REACT_APP_JAWG_LAB_MAPKEY}
  />
  {/* <TileLayer
    attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url={'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid='+process.env.REACT_APP_OPENWEATHERMAP}
  /> */}
  <Marker position={[57.148, -2.108]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  )
}

export default LeafletMap