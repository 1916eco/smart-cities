import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import chargerData from "../data/chargers.json"
function ElectricCarCharger() {
  return (
    <div>
    {chargerData.map(charger =>(
      <Marker key={charger.ChargeDeviceId} position={[charger.ChargeDeviceLocation.Latitude,charger.ChargeDeviceLocation.Longitude]}>
      <Popup>
        {charger.ChargeDeviceName} <br /> {charger.ChargeDeviceLocation.Address.PostCode}.
      </Popup>
    </Marker>
  ))}
    </div>
  )
}

export default ElectricCarCharger