import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
  return (
    <div>
             <div className='w-full flex justify-center '>
             <div className='w-1/2 flex flex-col gap-3 '>
                  <h1 className='bg-sky-400 self-start px-3 py-1 rounded-md'>User details</h1>
                  <h1 className='text-3xl'>hii {name}</h1>
          <button onClick={()=>navigate("/user")} className=' mt-5 px-3 py-1 rounded-md text-xs inline self-start bg-red-300 '>Go back</button>
        </div>   
        </div>
    </div>
  )
}

export default UserDetails

