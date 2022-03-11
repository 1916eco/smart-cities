import React from 'react'
import { useState,useEffect} from 'react';
import {collection,where, query, onSnapshot} from 'firebase/firestore'
import {db} from '../../firebase'
import { Marker, Popup } from 'react-leaflet';

function BaseLayer(user) {
  const [userBases, setUserBases] = useState([]);

  const homeLocationCollectionRef = collection(db,"home")
    useEffect(()=>{
      const getLocation = async () =>{

          console.log(user.user)
        const q = await query(homeLocationCollectionRef,where("UserID", "==", user.user))
        onSnapshot(q,(snapshot)=>{
            let homes = []
            snapshot.docs.forEach((doc)=>{
                homes.push({...doc.data(),id:doc.id})
                
            })
            setUserBases(homes);
            console.log(userBases)
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