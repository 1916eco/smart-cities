import {React,useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

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
      mapStyle="mapbox://styles/mapbox/dark-v10"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} 

    >
      <Marker latitude={57.148} longitude={-2.108} offsetTop={(-viewport.zoom *4) /2} >
      <img src={require('../Images/pin.png')} 
      alt='MarkerPointer' 
      width={viewport.zoom *2.5} 
      height={viewport.zoom *3.7}
      />
    </Marker>
    
    </ReactMapGL>
  </div>;
}

export default Map;
