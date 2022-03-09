import { useState, useEffect } from 'react';
import axios from 'axios'
function useFetch (url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then((res)=>{
        setData(res.data);
      }).catch((err)=>{
        setError(err);
      }).finally(()=>{ 
        setLoading(false);
      })
    },[url]);

    const refetch = () =>{
      setLoading(true)
      axios.get(url)
        .then((res)=>{
          setData(res.data);
        }).catch((err)=>{
          setError(err);
        }).finally(()=>{ 
          setLoading(false);
        })
    }
  return {data,loading,error,refetch}

  //const { data:anything,loading,error,refetch} = useFetch("www/abc.co.uk/query")
}
export default useFetch;