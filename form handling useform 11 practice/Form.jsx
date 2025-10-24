import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmitData}) {
    const { register, handleSubmit, reset } = useForm()
    const handleSubmitData = (data) => {
        handleFormSubmitData(data);
        reset();
    }
       
  return (
      <div className='mt-10 flex  justify-center'>
          <form className='flex gap-10' onSubmit={handleSubmit(handleSubmitData)}>
              <input {...register("name")} className="rounded-md px-2 py-1 outline-none bg-amber-100 text-base font-semibold"type="text"  placeholder='name'/>
              <input {...register("email")} className="rounded-md px-2 py-1 outline-none bg-amber-100 text-base font-semibold"type="text"  placeholder='email'/>
              <input {...register("image")} className="rounded-md px-2 py-1 outline-none bg-amber-100  text-base font-semibold" type="text" placeholder='image url' />
              <input className='px-2 py-1 rounded-md bg-blue-500' type="submit" />
          </form>
    </div>
  )
}

export default Form
