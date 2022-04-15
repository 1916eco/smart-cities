import React from 'react'
import { useState,useEffect} from 'react';
import {collection,where, query, onSnapshot} from 'firebase/firestore'
import {db} from '../../firebase'
import { Marker, Popup } from 'react-leaflet';
import useFetch from '../../Hooks/useFetch'
import axios from 'axios'
import PopupWeather from './PopupWeather';
import {useUserAuth} from "../../context/UserAuthContext";

function BaseLayer() {
  const [userBasesLayer, setUserBasesLayer] = useState([]);
  const { user } = useUserAuth();


  const homeLocationCollectionRef = collection(db,"home")


  //function to get weather api data with axios 
  useEffect(()=>{
    function getWeatherAPI(){
      var tempBases = []
      userBasesLayer.forEach((base)=>{
        var url = `${process.env.REACT_APP_BACKEND_API_LINK}/api/${base.location[0]}/${base.location[1]}`;

        axios.get(url).then(response => {
          tempBases.push({...base,weatherData:response.data})
          //console.log(tempBases);
        })
        setUserBasesLayer(tempBases)

      })
  
    }
    const getLocation = async () =>{
        const q = await query(homeLocationCollectionRef,where("UserID", "==", user.uid))

        onSnapshot(q,(snapshot)=>{
            let homes = []
            snapshot.docs.forEach(async (doc)=>{
                var url = `${process.env.REACT_APP_BACKEND_API_LINK}/api/${doc.data().location[0]}/${doc.data().location[1]}`;


                homes.push({...doc.data(), id: doc.id})
                // try {
                //     const res = await axios.get(url);
                // } catch (e) {
                //     console.log(e)
                // }
            })
            setUserBasesLayer(homes);
        })
    };
    getLocation()
    getWeatherAPI()
},[])
  return (
    <div>
    {userBasesLayer.map((bases)=>{
      //console.log(bases)
        return (<Marker key={bases.id} position={[bases.location[0],bases.location[1]]}>
          <PopupWeather bases={bases}/>
        </Marker>)})}
        </div>
  )
}

export default BaseLayer