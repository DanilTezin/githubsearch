import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-800 text-white'>
        <h1 className='font-bold'>Github</h1>
        <span>
            <Link className='mr-5' to="/">Home</Link>
            <Link to="/favorite">Favorite</Link>
        </span>
    </nav>
  )
}

export default Navigation