import Header from './Components/Header';
// import MapBasLibrary from './Components/MapBasLibrary';
import Map from './Components/Map';
import {initializeApp} from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

//import {useAuthState} from 'react-firebase-hooks/auth';
//import {useCollectionData} from 'react-firebase-hooks/firestore';

const config = {
  apiKey: "AIzaSyChZqc466kn8p8CIqTzE3pHr-SWiIrrrU4",
  authDomain: "honoursproject-336716.firebaseapp.com",
  projectId: "honoursproject-336716",
  storageBucket: "honoursproject-336716.appspot.com",
  messagingSenderId: "381756380938",
  appId: "1:381756380938:web:488681905ff6d59c814cf3"
}

const app = initializeApp(config)

function App() {
  //const { data } = useFetch( 'api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid='+process.env.REACT_APP_OPENWEATHER_API );
  //console.log(data);
  return (
    <div className="App">
    <Header/>
    {/* <MapBasLibrary/> */}
    <Map/>

    </div>
    
  );
}

export default App;
