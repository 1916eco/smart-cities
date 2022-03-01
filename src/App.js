import Header from './Components/Header';
import LeafletMap from './Components/LeafletMap';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import AboutUs from './Components/AboutUs';
import './firebase.js'
import ForgotPage from './Components/ForgotPage';

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
    <Route path="/ForgotPass" exact element={<ForgotPage />} />
  </Routes>
</BrowserRouter>
    </div>
    
  );
}

export default App;
