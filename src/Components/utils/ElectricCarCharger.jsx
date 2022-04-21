import React from "react";
import { Marker, Popup } from "react-leaflet";
import useFetch from "../../Hooks/useFetch";
import chargerData from "../../data/chargers.json";
import * as L from "leaflet";

const BoltIcon = L.divIcon({
  html: `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0388fc" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
</svg>`,
  className: "",
});

function ElectricCarCharger() {
  const { data } = useFetch(`${process.env.REACT_APP_BACKEND_API_LINK}/api/cars`);
  return (
    <div>
      {data?.ChargeDevice.map((charger) => (
        <Marker
          icon={BoltIcon}
          key={charger.ChargeDeviceId}
          position={[charger.ChargeDeviceLocation.Latitude, charger.ChargeDeviceLocation.Longitude]}
        >
          <Popup>
            {charger.ChargeDeviceName} <br /> {charger.ChargeDeviceLocation.Address.PostCode}.
          </Popup>
        </Marker>
      ))}
    </div>
  );
}

export default ElectricCarCharger;
