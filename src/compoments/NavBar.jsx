import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div  className=' p-3 bg-danger d-sm-flex justify-content-sm-between align-items-sm-center'>
        <div className="container d-flex justify-content-sm-between align-items-sm-center">
            <h3 style={{cursor: "pointer"}} className=' fw-bolder text-white' onClick={() => (
              navigate('/')
            )}>Booking.com</h3>
            <div className=' d-flex justify-content-around '>
                <button className='btn btn-dark rounded rounded-0'>Log In</button>
                <button className='btn btn-dark rounded rounded-0'>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar
