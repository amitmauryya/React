import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const User = () => {
  return (
 <>
        <div className='w-full flex justify-center items-center flex-col '>
        <div className='w-1/2 flex flex-col gap-3 '>
          <h1 className='bg-sky-400 self-start px-3 py-1 rounded-md'>User</h1>
              </div>   
              <div className=' mt-10 flex self-start w-1/2 gap-10 
              items-center flex-col'>
                 <Link to="/user/john" className=' w-40 p-3 rounded-md text-center bg-red-300 text-2xl hover:bg-red-400'>John</Link> 
                 <Link to="/user/harshita" className='w-40 p-3 rounded-md text-center bg-red-300 text-2xl hover:bg-red-400'>Harshita</Link> 
                 <Link to="/user/rajat" className='w-40 p-3 rounded-md text-center bg-red-300 text-2xl hover:bg-red-400'>Rajat</Link> 

              </div>
            <Outlet/>
          </div>
          
    
      
    </>
  )
}

export default User
