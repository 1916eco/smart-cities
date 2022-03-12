import React from 'react'
import { useState,useEffect} from 'react';
import {collection,where, query, onSnapshot} from 'firebase/firestore'
import {db} from '../../firebase'
import { Marker, Popup } from 'react-leaflet';
import useFetch from '../../Hooks/useFetch'

function BaseLayer({user}) {
  const [userBases, setUserBases] = useState([]);

  const homeLocationCollectionRef = collection(db,"home")
  //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//const { data } = useFetch(`api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${process.env.REACT_APP_OPENWEATHER_API}`)
//const { data } = useFetch(`htttp://www.api.openweathermap.org/data/2.5/weather?lat=${57}&lon=${-2}&appid=${process.env.REACT_APP_OPENWEATHER_API}`)
//console.log(data)

    useEffect(()=>{
      const getLocation = async () =>{
        const q = await query(homeLocationCollectionRef,where("UserID", "==", user.uid))
        onSnapshot(q,(snapshot)=>{
            let homes = []
            snapshot.docs.forEach((doc)=>{
                homes.push({...doc.data(),id:doc.id})
            })
            setUserBases(homes);
        })
      };
      getLocation()
    },[])
  return (
    <div><br/><br/><br/>{userBases.map((bases)=>{
        return (<Marker key={bases.id} position={[bases.location[0],bases.location[1]]}>
        <Popup>
          {""}
          <p><b>Name: {bases.homeName}</b></p>
        </Popup></Marker>)})}</div>
  )
}

export default BaseLayer