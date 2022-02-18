import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function LeafletMap() {
  return (
    <div >
<MapContainer center={[57.148, -2.108]} zoom={12.6} zoomControl={false}>

<TileLayer
    opacity={20}
    attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  />
  <TileLayer
  opacity={50}
    attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url='https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=0a1fbec9a6e2b8404d669b2886c9640a'
  />
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