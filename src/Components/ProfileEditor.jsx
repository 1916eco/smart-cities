import React from 'react'
import {Button, Table} from "react-bootstrap";
import { useState,useEffect } from 'react';
import {db} from '../firebase'
import {collection,where, query, onSnapshot, deleteDoc,doc} from 'firebase/firestore'
import {useUserAuth} from "../context/UserAuthContext";
import {X} from 'react-bootstrap-icons'

function ProfileEditor() {
  const [userBases, setUserBases] = useState([]);
  const homeLocationCollectionRef = collection(db,"home")
  const { user } = useUserAuth();

  const deleteHandler = (id) => {
    console.log(id)
    deleteDoc(doc(db,"home",id))
  }
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
    <div className='jumbotron vertical-center'>
      <div className='container'>
      <h1>Home Editor</h1>
      <Table striped bordered hover variant="dark" responsive="sm">
    <thead>
      <tr>
        <th>Home Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {userBases.map((bases)=>{
      return (
        <tr key={bases.id}><td>Name: {bases.homeName}</td>
        <td>{bases.location[0]}</td>
        <td>{bases.location[1]}</td>
        <td className='text-center' ><Button variant='danger' onClick={()=>{deleteHandler(bases.id)}}><X color='black' className='IconHelper'/></Button></td>
        </tr>)})}
    </tbody>
  </Table></div></div>
  )
}

export default ProfileEditor