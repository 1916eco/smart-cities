import Header from './Components/Header';
import LeafletMap from './Components/LeafletMap';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import AboutUs from './Components/AboutUs';
import './firebase.js'
import ForgotPage from './Components/ForgotPage';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Components/ProtectedRouting';
import BaseBuilder from './Components/BaseBuilder';

function App() {
  return (
    <div className="App">
<BrowserRouter>
{/* User Context this is the full controller of the system sign in any routes that are within the tags have access */}
  <UserAuthContextProvider> 
  <Header />
  <Routes>
    <Route path="/" element={<LeafletMap/>} />
    <Route path="/LogIn" element={<ProtectedRoute><LogIn/></ProtectedRoute>} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/SignUp" element={<ProtectedRoute><SignUp/></ProtectedRoute>} />
    <Route path="/ForgotPass" exact element={<ForgotPage />} />
    <Route path="/BaseBuilder" exact element={<BaseBuilder/>} />
  </Routes>
  </UserAuthContextProvider>
</BrowserRouter>
    </div>
    
  );
}

export default App;
