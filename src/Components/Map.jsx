import {React,useState} from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 57.148,
        longitude: -2.108,
        zoom: 11
      });
  return <div>

<ReactMapGL
      {...viewport} 
      width="100vw" 
      height="100vh" 
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} 

    />
  </div>;
}

export default Map;
