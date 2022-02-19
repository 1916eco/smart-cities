import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
function MapboxGl() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-2.108);
    const [lat, setLat] = useState(57.148);
    const [zoom, setZoom] = useState(11);useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [lng, lat],
    zoom: zoom
    });
    });
     
    useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(3));
    setLat(map.current.getCenter().lat.toFixed(3));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });

    

    // map.on('load', function(){
    //   map.addLayer({
    //     "id": "simple-tiles",
    //     "type": "raster",
    //     "source": {
    //       "type": "raster",
    //       "tiles": [`https://tile.openweathermap.org/map/temp_new/
    //       ${map.current.getZoom()}/
    //       ${map.current.getCenter().lat.toFixed(0)}/
    //       ${map.current.getCenter().lng.toFixed(0)}.png?appid=874718354841f0e0250b4b06a05a971e`],
    //       "tileSize": 256
    //     },
    //     "minzoom": 0,
    //     "maxzoom": 22
    //   });
    // });
  return (
    <div>
        <div className="sidebar">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div>
        <div ref={mapContainer} className="map-container" />

    </div>
  )
}

export default MapboxGl