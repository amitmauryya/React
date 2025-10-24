import React, { useState } from 'react'
import { createContext } from 'react';
export const val  = createContext();
const context = (props) => {
  const[users ,setusers] = useState([
        {name:"harsh",id:0,city:"USA"},
        {name:"Amit",id:1,city:"India"},
        {name:"Maurya",id:2,city:"England"}
    ])
    console.log(props);
    return (
        <val.Provider value={{ users, setusers }} >{ props.children}</val.Provider>
     
  )
}

export default context
