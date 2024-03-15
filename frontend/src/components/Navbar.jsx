import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <header className='h-[40px] w-[100vw] bg-green-400 pt-2 '>
      <div className="">
        <Link to="/">
          <h1 className='text-center font-bold w-full'>CampusBooks</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar