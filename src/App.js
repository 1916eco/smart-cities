import {  useState } from 'react';
import Header from './Components/Header';
import Map from './Components/Map';

function App() {

  const token = process.env.REACT_MAPBOX_ACCESS_TOKEN;
  console.log(token)
  return (
    <div className="App">
    <Header/>
    <Map/>

    </div>
    
  );
}

export default App;
