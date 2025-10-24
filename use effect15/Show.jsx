import React, { useEffect, useState } from 'react'
import axios from '../Utils/Axios';
const Show=()=>{
    const [products, setproducts] = useState([]);
  const getproducts=()=>{
    const api = '/products';
    axios.get(api).then((val) => {
      setproducts(val.data);
    });
    } 
    useEffect(() => {
        getproducts()
    },[])
  return (   
      <div>
     <button 
        // getproducts
     className='px-2 py-1 bg-red-300 rounded'>Call Api products</button>
      <ul>
              {products.length > 0 ? products.map(p => <li className=' p-5 mt-10 bg-red-200 rounded ' key={p.id}> {p.title} </li>):<h1>Loading...</h1>}
      </ul>
    </div>
  )
}

export default Show
