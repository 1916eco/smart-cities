import React from 'react'
import { useState,useEffect} from 'react';
import {collection,where, query, onSnapshot} from 'firebase/firestore'
import {db} from '../../firebase'
import { Marker, Popup } from 'react-leaflet';
import useFetch from '../../Hooks/useFetch'
import axios from 'axios'
import PopupWeather from './PopupWeather';

function BaseLayer({user}) {
  const [userBasesLayer, setUserBasesLayer] = useState([]);
  const [dataWeather, setdataWeather] = useState([])

  const homeLocationCollectionRef = collection(db,"home")
  //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//const { data } = useFetch(`data/2.5/weather?lat=35&lon=139&appid=${process.env.REACT_APP_OPENWEATHER_API}`)
//console.log(data)
const renderIcon=()=>{
  return(
    <div>Function called</div>
    )
  };
  useEffect(()=>{
    const getLocation = async () =>{
      const q = await query(homeLocationCollectionRef,where("UserID", "==", user.uid))

      onSnapshot(q,(snapshot)=>{
        let homes = []
        snapshot.docs.forEach((doc)=>{
          var url = `${process.env.REACT_APP_BACKEND_API_LINK}/api/${doc.data().location[0]}/${doc.data().location[1]}`;
          axios.get(url)
          .then((res)=>{
                //doc.data.weatherObject = res.data
                homes.push({...doc.data(),id:doc.id,weatherObject:res.data})
              })
            })
            setUserBasesLayer(homes);
          })
        };
        getLocation()
        

    },[])
  return (
    <div>
    {userBasesLayer.map((bases)=>{
        return (<Marker key={bases.id} position={[bases.location[0],bases.location[1]]}>
        {/* <PopupWeather bases={bases}/> */}
        <Popup>
    <b>Name: {bases.homeName}</b><br/>
<p>   Weather: {bases.weatherObject.weather[0].main}<br/>
Weather: {bases.weatherObject.weather[0].main}<br/>
    Temperature: {(bases.weatherObject.main.temp - 273.15).toFixed(0)}℃<br/></p>

    </Popup>
        </Marker>)})}
        </div>
  )
}

export default BaseLayer