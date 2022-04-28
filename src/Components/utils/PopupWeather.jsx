import React from "react";
import { Popup } from "react-leaflet";
import useFetch from "../../Hooks/useFetch";
import { Spinner } from "react-bootstrap";

function PopupWeather({ bases }) {
  const { data: weatherData } = useFetch(
    `${process.env.REACT_APP_BACKEND_API_LINK}/api/${bases.location[0]}/${bases.location[1]}`
  );
  const { data: airQualityData } = useFetch(
    `${process.env.REACT_APP_BACKEND_API_LINK}/api/airQuality/${bases.location[0]}/${bases.location[1]}`
  );
  return (
    <>
      <Popup>
        <b>Name: {bases.homeName}</b>
        <br />
        {weatherData && airQualityData ? (
          <p>
            {" "}
            Weather: {weatherData.weather[0].main}
            <br />
            Temperature: {(weatherData.main.temp - 273.15).toFixed(0)}℃<br />
            Wind: {weatherData.wind.speed}
            <br />
            Air Quality:
            <span className={"airQuality" + airQualityData.list[0].main.aqi}>{airQualityData.list[0].main.aqi}</span>
          </p>
        ) : (
          <>
            <h6>Loading</h6>
            <Spinner animation="border" />
          </>
        )}
      </Popup>
    </>
  );
}

export default PopupWeather;
