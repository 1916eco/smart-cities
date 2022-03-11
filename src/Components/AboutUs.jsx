import React from 'react'
import { useState,useEffect } from 'react';
import {db} from '../firebase'
import {collection,getDocs} from 'firebase/firestore'

function AboutUs() {
  const [userBases, setUserBases] = useState([]);

  const homeLocationCollectionRef = collection(db,"home")
  useEffect(()=>{
    const getLocation = async () =>{
      const data = await getDocs(homeLocationCollectionRef)
      setUserBases(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
      console.log(data)
    };
    console.log("hello")
    //getLocation()
  },[])
  //console.log(userBases)
  return (
    <div><br/><br/><br/>{userBases.map((bases)=>{
      return (
      <div>
        {""}
        <h1>Name: {bases.homeName}</h1>
        <h1>lat: {bases.location._lat}</h1>
        <h1>long: {bases.location._long}</h1>
      </div>)})}</div>
  )
}

export default AboutUs