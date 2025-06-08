import React from 'react'
import  logo  from '../assets/logo.png'
import {NavLink} from "react-router-dom"
 import logo2 from "../assets/logo2.png" 
 import searchicon from "../assets/searchico.png"
 import profileicon from "../assets/prrofile.jpg"
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={logo2} className="w-36" alt="" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" class="flex flex-col item-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 mx-auto border-none h-[1px] bg-gray-700" hidden />
        </NavLink>
        <NavLink to="/collection" class="flex flex-col item-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 mx-auto border-none h-[1px] bg-gray-700" hidden />
        </NavLink>
        <NavLink to="/about" class="flex flex-col item-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 mx-auto border-none h-[1px] bg-gray-700" hidden />
        </NavLink>
        <NavLink to="/contact" class="flex flex-col item-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 mx-auto border-none h-[1px] bg-gray-700" hidden />
        </NavLink>
      </ul>
      <div className='flex item-center gap-6'>
        <img src={searchicon} className='w-7 cursor-pointer' alt=''/>

<div className='grou[ relative'>
  <img  className='w-7 cursor-pointer' src={profileicon} alt=''/>
</div>

      </div>
    </div>
  );
}

export default Navbar
