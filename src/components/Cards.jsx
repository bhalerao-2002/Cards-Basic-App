import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className="w-full text-white mt-10 p-4 flex gap-4 flex-wrap max-h-72 items-center justify-center overflow-auto">
        {
            users.map((items, index)=>{
                return <Card key={index} id={index} handleRemove={handleRemove} user={items} />
            })
        }
    </div>
  )
}

export default Cards
