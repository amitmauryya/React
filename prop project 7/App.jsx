import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
function App() {
  const data = [
    {name:"mahiya",image:"https://images.unsplash.com/photo-1755997234962-931d86bee287?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D",song:"Amit",favourite:false},
    {name:"chunar",image:"https://images.unsplash.com/photo-1756038945556-6fc458ea0eaa?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D",song:"nishant",favourite:false},
    {name:"vande matram",image:"https://images.unsplash.com/photo-1755311901131-c0b8f91a21c0?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D",song:"payal",favourite:false},
    {name:"kala chasma",image:"https://images.unsplash.com/photo-1755589066709-ec12ec11baa1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTJ8fHxlbnwwfHx8fHw%3D",song:"harshita",favourite:false}
  ]
  const [val, setVal] = useState(data);
  const handleclick = function (clickindex) {
    setVal((prev) => {
      return prev.map((item, index) => {
        if (index == clickindex) {
          return { ...item, favourite:!item.favourite }
        }
        return item;
      }
            
      )
    }
      )
  }
  return (
    <div className='w-full h-screen bg-zinc-300'>
      <Navbar val={val} />
      <div className=' px-20 mt-10 flex gap-10 flex-wrap'>
        {val.map((item,index) =>
          <Card item={item} index={index} handleclick={handleclick} />
        )
        }
      </div>
   </div>
  )
}
export default App
