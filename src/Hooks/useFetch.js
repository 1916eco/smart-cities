import { useState, useEffect } from 'react';
const useFetch = (url = 'api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid='+process.env.REACT_APP_OPENWEATHER_API, options = null) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url, options]);
  return {data}
}
export default useFetch;