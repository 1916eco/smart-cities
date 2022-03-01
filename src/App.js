import Header from './Components/Header';
import {initializeApp} from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import LeafletMap from './Components/LeafletMap';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './Pages/Login/Login';
import AboutUs from './Pages/AboutUs/AboutUs';


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
  return (
    <div className="App">
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<LeafletMap />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/AboutUs" element={<AboutUs />} />
  </Routes>
</BrowserRouter>
    </div>
    
  );
}

export default App;
