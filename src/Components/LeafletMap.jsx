import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ElectricCarCharger from "./utils/ElectricCarCharger";
import SideControlBar from "./SideControlBar";
import WeatherLayers from "./utils/WeatherLayers";
import { Link } from "react-router-dom";
import RecyclingLayer from "./utils/RecyclingLayer";
import BusLayer from "./utils/BusLayer";
import { Button } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useUserAuth } from "../context/UserAuthContext";
import BaseLayer from "./utils/BaseLayer";

function LeafletMap() {
  const { user } = useUserAuth();

  const [mapSelect, setMapSelect] = useState(false);
  const [electricLayer, setElectricLayer] = useState(false);
  const [busLayer, setBusLayer] = useState(false);
  const [userLocationLayer, setUserLocationLayer] = useState(false);
  const [weatherTypeLayer, setWeatherTypeLayer] = useState("temp_new");
  const [weatherLayer, setWeatherLayer] = useState(false);
  const [recyclingPointsLayer, setRecyclingPointsLayer] = useState(false);

  const [userBases, setUserBases] = useState(false);

  const [latUser, setLatUser] = useState(null);
  const [lngUser, setLngUser] = useState(null);
  if (userLocationLayer) {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatUser(position.coords.latitude);
      setLngUser(position.coords.longitude);
    });
  }

  useEffect(() => {
    setMapSelect(false);
  }, [weatherLayer]);

  return (
    <div>
      {/* SIDE CONTROL PANEL WITH ALL THE SETTERS PASSED THROUGH AS PROPS FOR THE CHILD COMPONENT */}
      <SideControlBar
        setUserBases={setUserBases}
        setBusLayer={setBusLayer}
        setRecyclingPointsLayer={setRecyclingPointsLayer}
        setMapSelect={setMapSelect}
        weatherLayer={weatherLayer}
        setElectricLayer={setElectricLayer}
        setUserLocationLayer={setUserLocationLayer}
        setWeatherTypeLayer={setWeatherTypeLayer}
        setWeatherLayer={setWeatherLayer}
      />

      {user ? (
        <Link to="/BaseBuilder">
          <Button variant="primary" className="btn-circle rounded-circle">
            <Plus size={40} />
          </Button>
        </Link>
      ) : null}

      <MapContainer center={[57.148, -2.108]} zoom={10.9} zoomControl={false}>
        {/* MAP DEFAULT LOOKS */}
        {mapSelect === false ? (
          <TileLayer
            attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url={
              "https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=" +
              process.env.REACT_APP_JAWG_LAB_MAPKEY
            }
          />
        ) : null}

        {mapSelect === true ? (
          <TileLayer
            attribution='?? <a href="https://www.mapbox.com/contribute/">Mapbox</a> ?? <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiMTkxNmVjbyIsImEiOiJja3lrbWE3azEyMnprMm5xcGMyYmhoaHhzIn0.Vh8jWx4tZUIYCNPB5MYW4A`}
          />
        ) : null}

        {
          //#region Weather Controls
        }
        {/* WEATHER LAYERS NOT THE BEST CODE PRACTICE HOWEVER ONSTATE CHANGE THE LAYER DOES NOT RERENDER SO RENDERING ALL 4 AND 
CONDITIONAL RENDERING IT IS THE BEST METHOD IN THIS CASE */}
        {weatherTypeLayer === "clouds_new" && weatherLayer ? <WeatherLayers type={"clouds_new"} /> : null}
        {weatherTypeLayer === "temp_new" && weatherLayer ? <WeatherLayers type={"temp_new"} /> : null}
        {weatherTypeLayer === "wind_new" && weatherLayer ? <WeatherLayers type={"wind_new"} /> : null}
        {weatherTypeLayer === "precipitation_new" && weatherLayer ? <WeatherLayers type={"precipitation_new"} /> : null}
        {
          //#endregion
        }

        {/* User Location plotter with conditional rendering*/}
        {userLocationLayer
          ? latUser &&
            lngUser && (
              <Marker position={[latUser, lngUser]}>
                <Popup>
                  User Location,
                  <br /> Not fully accurate.
                </Popup>
              </Marker>
            )
          : null}

        {/* Recycling Centers plotter with conditional rendering */}
        {recyclingPointsLayer ? <RecyclingLayer /> : null}
        {userBases ? <BaseLayer /> : null}

        {/* Electric Cars Charger plotter with conditional rendering */}

        {electricLayer ? <ElectricCarCharger /> : null}

        {busLayer ? <BusLayer /> : null}
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
