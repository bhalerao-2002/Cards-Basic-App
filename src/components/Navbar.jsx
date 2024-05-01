import React from 'react'

function Navbar() {
  return (
    <div className="w-full mb-10 flex items-center justify-between absolute top-4 px-28">
        <div className="w-32 h-10 bg-red-300 rounded-full overflow-hidden">
            <img className='w-full h-full object-cover' src="https://i.pinimg.com/236x/c6/dc/e3/c6dce379ace3da9fcf8709e4d4b670f4.jpg" alt="" />
        </div>
        
        <div className=" w-62 flex gap-10 items-center">
            <a className='text-white text-md' href="">Demo</a>
            <a className='text-white text-md' href="">Demo</a>
            <a className='text-white text-md' href="">Demo</a>
        </div>
    </div>
  )
}

export default Navbar
