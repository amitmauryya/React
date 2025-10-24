import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const { register ,handleSubmit} = useForm();
  return (
    <div>
      <form action="" onSubmit={handleSubmit((data)=>console.log(data.name))} >
        <input {...register("name")} type="text"  placeholder='name'/>
        <input {...register("email")} type="email" placeholder='email' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
