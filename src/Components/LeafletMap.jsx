import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function LeafletMap() {
  return (
    <div>
<MapContainer center={[57.148, -2.108]} zoom={12.6}>
<TileLayer
    attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
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