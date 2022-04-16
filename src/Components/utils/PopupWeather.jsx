import React from "react";
import { Popup } from "react-leaflet";
import useFetch from "../../Hooks/useFetch";
import { Spinner } from "react-bootstrap";

function PopupWeather({ bases }) {
  //const [weatherData,setWeatherData] = useState();
  //const [airQualityData,setAirQualityData] = useState();

  //fetching data for both weather and air quality data from the api and setting the data to an alias variable
  const { data: weatherData } = useFetch(
    `${process.env.REACT_APP_BACKEND_API_LINK}/api/${bases.location[0]}/${bases.location[1]}`
  );
  const { data: airQualityData, loading } = useFetch(
    `${process.env.REACT_APP_BACKEND_API_LINK}/api/airQuality/${bases.location[0]}/${bases.location[1]}`
  );
  // const fetchAirData = async () => {
  //   return axios.get(`${process.env.REACT_APP_BACKEND_API_LINK}/api/airQuality/${bases.location[0]}/${bases.location[1]}`)

  // }
  // const fetchWeatherData = async () => {
  //   return axios.get(`${process.env.REACT_APP_BACKEND_API_LINK}/api/${bases.location[0]}/${bases.location[1]}`)
  // }

  //const { data: weatherData } =useQuery('weather', fetchWeatherData())
  //const { data:airQualityData } =useQuery('airQuality', fetchAirData())

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
