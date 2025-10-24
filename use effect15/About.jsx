import React, { useEffect, useState } from 'react'
import axios from '../Utils/Axios'
const About = () => {
    const [First,setFirst]=useState("this is normal data")
    const[Second,setSecond]=useState("this is vary large data") 
    useEffect(() => {
        console.log("APP IS CREATED");
        return (() =>{
           console.log("APP IS DELETED"); 
        }) 
    }, [Second])
    const getproducts=()=>{
    const api = '/users';
    axios.get(api).then((val) => {
      console.log(val.data);
    });
    }
    getproducts();
  return (
    <div>
          <h1>{First}</h1>
          <button onClick={()=>setFirst("NORMAL DATA IS BEING CHANGED")} className='bg-red-300  rounded  p-2'>Change Normal data</button>
              <br /> <br />
          <h1>{Second}</h1>
          <button onClick={()=>setSecond("LARGE DATA IS BEING CHANGED")} className='bg-blue-300  rounded  p-2'>Change Large data</button>
    </div>
  )
}

export default About
