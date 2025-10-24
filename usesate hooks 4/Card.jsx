import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Card() {
  const [val, setVal] = useState(false);
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className=" relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden">
        <img className={` transition-transform  duration-500 delay-100 shrink-0 object-[0%_75%] ${val==false? "-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1755542366683-282c366982a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={` transition-transform duration-500 delay-100 shrink-0 object-[0%_75%] ${val==false?  "-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover`}  src="https://images.unsplash.com/photo-1755677304075-d3357863b1f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span onClick={()=>setVal(()=>!val)} className=' opacity-75 rounded-full flex justify-center items-center  bg-[#dadada7b] w-7 h-7 absolute  -translate-y-[50%]       -translate-x-[50%]    top-[75%] left-[50%]'><FaArrowRightLong size={12} /></span>

      </div>
    </div>
  )
}

export default Card

