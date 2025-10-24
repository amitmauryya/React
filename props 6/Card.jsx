import React from 'react'
function Card({item,dummy,index}) {
  const { name, profession, description, image,friends } = item;
  return (
    <div className='p-2 w-52 bg-white rounded-md overflow-hidden '>
      <div className='w-full h-32 bg-sky-200'>
        <img className='w-full h-full object-cover object-[0%_20%]' src={image} alt="" />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-lg font-bold'>{name}</h3>   
        <h5 className='text-xs '>{profession}</h5>
        <button onClick={() => dummy(index)} className="        mt-4 px-2 py-1 rounded-md bg-blue-500">{friends?"friend":"Add friend"}</button>
      </div>
    </div>
  )
}

export default Card
