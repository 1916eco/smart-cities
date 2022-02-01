import {  useState } from 'react';
//import mapboxGl from 'mapbox-gl';
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 57.148,
    longitude: -2.108,
    zoom: 11
  });
  const token = process.env.REACT_MAPBOX_ACCESS_TOKEN;
  console.log(token)
  return (
    <div className="App">
    <ReactMapGL
      {...viewport} 
      width="100vw" 
      height="100vh" 
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={token} 

    />
    </div>
    
  );
}

export default App;
