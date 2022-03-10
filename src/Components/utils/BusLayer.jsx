import React from 'react'
import useFetch from '../../Hooks/useFetch'
import * as L from "leaflet";
import { Marker, Popup } from 'react-leaflet'
function BusLayer() {
    const { data } = useFetch("https://services5.arcgis.com/0sktPVp3t1LvXc9z/arcgis/rest/services/Bus_Facilities/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json")

    const BusIcon = L.divIcon({
        html: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title"
        aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Bus</title>
          <desc>A line styled icon from Orion Icon Library.</desc>
          <path stroke-width="2"
          stroke-linejoin="round" stroke-linecap="round" stroke="#0000FF" fill="none"
          d="M29.1 8H35m-.9 30l10-10M20 54v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6m44 0v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6"
          data-name="layer1"></path>
          <path stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
          stroke="#0000FF" fill="none" d="M16.1 46H22m20.1 0H48M8 16h48M8 38h48m6-8v8M2 30v8m54 16V6a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v48zM8 38l-6-6m54 6l6-6"
          data-name="layer2"></path>
        </svg>`,
        className: ""
      });
  return (
    <div>    
        {data?.features.map(point =>(
        <Marker icon={BusIcon} key={point.attributes.OBJECTID} position={[point.geometry.points[0][1],point.geometry.points[0][0]]}>
          <Popup>
          {point.attributes.STOP_SHELT} <br/>{point.attributes.RAISEDKERB}<br/>{point.attributes.ROADNAME}
          </Popup>
        </Marker>))}
        </div>
  )
}

export default BusLayer