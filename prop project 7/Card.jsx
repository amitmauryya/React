import React from 'react'

function Card({ item ,index,handleclick}) {
  const { name, image, song, favourite } = item;
  return (
    <div className=' mt-10 w-62 rounded-md bg-zinc-100 p-4 flex gap-4 bg-z relative pb-10'>
      <div className='w-20 h-20 rounded-md bg-orange-600 '>
        <img  className="w-full h-full object-cover"  src={image} alt="" />
      </div>
       <div>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h4 className='text-sm'>{song}</h4>
      </div>
      <button  onClick={()=>handleclick(index)} className={` whitespace-nowrap px-4 py-3 rounded-full left-1/2  ${favourite==false? "bg-orange-600":"bg-green-400"} absolute  bottom-0  translate-y-[50%] -translate-x-[50%] text-white text-sm`}>{favourite==false?"Add to favourite" :"favourite"}</button>
    </div>
  )
}

export default Card
