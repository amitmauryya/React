import React, { useState } from 'react'
function Card() {
  const[val,setVal]=useState([
    { name: "harsh", age: 22 },
    { name: "nikhil", age: 27 },
    {name:"harshita",age:30}
  ])
  return (
    <div className='p-5'>
      {val.map((elem) =>
        <>
        <h1>{elem.name}</h1>
        <h2>{elem.age}</h2>
        </>
      )}
      <button onClick={
        ()=>setVal(()=>
        val.map((elem)=>elem.name=="harshita"?{...elem,age:25}:elem)
        )
      }     className='px-2 py-1 bg-blue-500 text-xs text-white rounded-full '>click me</button>

    </div>
  )

}

export default Card
