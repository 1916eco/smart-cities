import Header from './Components/Header';
import LeafletMap from './Components/LeafletMap';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import AboutUs from './Pages/AboutUs/AboutUs';
import './firebase.js'

//import {useAuthState} from 'react-firebase-hooks/auth';
//import {useCollectionData} from 'react-firebase-hooks/firestore';


function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<LeafletMap />} />
    <Route path="/LogIn" element={<LogIn />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/SignUp" element={<SignUp />} />
  </Routes>
</BrowserRouter>
    </div>
    
  );
}

export default App;
