import React from 'react'
import logo from "../assets/logo2.png";
const Navbar = () => {
  return (
    <div>
      <img className='w-[max(15%,80px)]' src={logo} alt='' />
      <button>Logout</button>
    </div>
  )
}

export default Navbar
