import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'
function App() {
  const [users, setUsers] = useState([]);
   
  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  }
  const RemoveHandle = (sendindex) => {
    setUsers(
      ()=>users.filter((elem,index)=>index!=sendindex)
    )
  }
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
        <Cards users={users} RemoveHandle={RemoveHandle}  />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
      
    </div>
  )
}

export default App
