import axios from 'axios';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';


function UserPinHook (bases) {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  if(!data){
  axios.get(`https://smart-cities-backend1.herokuapp.com/api/${bases.bases.location[0]}/${bases.bases.location[1]}`)
  .then((res)=>{
    setData(res.data);
  }).catch((err)=>{
    setError(err);
  }).finally(()=>{ 
    setLoading(false);
  })
  }else{
      console.log(data)
  }
  return {data}

  //const { data:anything,loading,error,refetch} = useFetch("www/abc.co.uk/query")
}
export default UserPinHook;