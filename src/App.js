import Header from './Components/Header';
import Map from './Components/Map';

function App() {
  //const { data } = useFetch( 'api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid='+process.env.REACT_APP_OPENWEATHER_API );
  //console.log(data);
  return (
    <div className="App">
    <Header/>
    <Map/>

    </div>
    
  );
}

export default App;
