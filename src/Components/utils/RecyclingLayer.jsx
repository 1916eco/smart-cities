import React from "react";
import useFetch from "../../Hooks/useFetch";
import * as L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";

function RecyclingLayer() {
  //const { data } = useFetch("https://services5.arcgis.com/0sktPVp3t1LvXc9z/arcgis/rest/services/Recycling_Centres/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json")
  const { data } = useFetch(`${process.env.REACT_APP_BACKEND_API_LINK}/api/recycle`);
  //console.log(something)

  const RecycleIcon = L.divIcon({
    html: `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" stroke-width="200px" height="25" fill="#21a110" class="bi bi-recycle" viewBox="0 0 20 20">
        <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
      </svg>`,
    className: "",
  });

  return (
    <div>
      {data?.features.map((point) => (
        <Marker
          icon={RecycleIcon}
          key={point.attributes.OBJECTID}
          position={[point.geometry.points[0][1], point.geometry.points[0][0]]}
        >
          <Popup>
            {point.attributes.SITE} <br />
            {point.attributes.LOCALITY}
            <br />
            {point.attributes.ROADNAME}
          </Popup>
        </Marker>
      ))}
    </div>
  );
}

export default RecyclingLayer;
