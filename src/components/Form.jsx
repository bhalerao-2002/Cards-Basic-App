import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmitData}) {

    const {register, handleSubmit, reset} =useForm();

    const handleFormSubmit = (data) => {
        handleFormSubmitData(data);
        reset();
    }

    

  return (
    <div className="w-full  flex justify-center">
       <form action="" className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="text" {...register('name')} className=' rounded-md py-1 px-2 text-base font-semibold outline-none' placeholder='Name'/>
        <input type="email" {...register('email')} className=' rounded-md py-1 px-2 text-base font-semibold outline-none' placeholder='Email'/>
        <input type="text" {...register('description')} className=' rounded-md py-1 px-2 text-base font-semibold outline-none' placeholder='Description'/>
        <input type="text" {...register('image')} className=' rounded-md py-1 px-2 text-base font-semibold outline-none' placeholder='ImageURL'/>
        <input type="submit" className='bg-[#EFE1D1] rounded-md py-2 px-4 font-semibold' />
       </form>
    </div>
  )
}

export default Form
