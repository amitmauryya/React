import React, { useEffect } from 'react'
const About = () => {
    useEffect(() => {
        console.log("APP IS CREATED");
        return (() =>{
           console.log("APP IS DELETED"); 
        }) 
    })
  return (
    <div>
       
    </div>
  )
}

export default About
