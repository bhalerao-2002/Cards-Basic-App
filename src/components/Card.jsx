import React from 'react'

function Card({user, handleRemove, id}) {
  return (
    <div className='w-52 h-full bg-[#A78295] rounded-lg flex flex-col items-center p-2 '>
        <div className="image w-[3vw] h-[3vw] rounded-full bg-[#3F2E3E] overflow-hidden">
            <img className='w-full h-full object-cover' src={user.image} alt="profile" />
        </div>
        <h1 className='text-xl font-semibold text-center mt-2'>{user.name}</h1>
        <h4 className='opacity-90 italic text-[#EFE1D1] text-center text-xs'>{user.email}</h4>
        <p className=' w-full text-sm  text-center font-semibold text-wrap	  mt-2'>{user.description}</p>
        <button onClick={()=>handleRemove(id)} className='text-sm font-semibol text-white rounded-md px-4 py-2 bg-[#331D2C] mt-3'>Remove it 🥹</button>
    </div>
  )
}

export default Card
