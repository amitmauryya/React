import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import  { val } from '../Context/context'
const User = () => {
    const {users ,setusers} = useContext(val);
  return (
    <div className=' p-10 flex  gap-10 justify-center flex-col'>
          <h1 className='text-2xl'>hello</h1>
          <div className='w-1/4 bg-red-200'>
              {users.map((elem) => <Link key={elem.id} className='flex gap-10' to="/user/:id">{elem.name}</Link>)} 
          </div>
    </div>
  )
}

export default User
