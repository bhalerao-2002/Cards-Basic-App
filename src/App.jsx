import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'
import Navbar from './components/Navbar';


function App() {
    const [users, setUsers] = useState([]);

    const handleFormSubmitData = (data) => {
        setUsers([...users,data]);
    }

    const handleRemove = (id) =>{
        setUsers(()=> users.filter((items, index) => index != id))
    }

  return (
    <div className="  w-full h-screen flex relative flex-col items-center justify-center bg-[#331D2C]">
        <Navbar />
        <div className='container mx-auto'>
        
        <Form handleFormSubmitData={handleFormSubmitData} />
        <Cards users={users} handleRemove={handleRemove}/>
        </div>
    </div>
  )
}

export default App
