import React from 'react'

function Card({user,id,RemoveHandle}) {
  return (
    <>
       <div className='w-50 h-full bg-zinc-100 rounded-lg flex flex-col items-center  justify-center p-2 '>
          <div className='image w-10 h-10 rounded-full bg-zinc-300 overflow-hidden'>
              <img className="h-full w-full object-cover"src={user.image} alt="" />
          </div>
        <h1 className='mt-1 text-[2vw] font-semibold'>{user.name}</h1>
        <h2 className='text-xs font-semibold text-zinc-500'>{user.email}</h2>
          <p className='mt-1 font-semibold leading-3 text-center text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloribus? </p>
          <button onClick={()=>RemoveHandle(id)}    className=' px-3 py-1 bg-red-600 text-xs rounded-lg font-semi-bold text-white mt-4'>Remove it</button>
    </div>
    </>
  )
 
}

export default Card
