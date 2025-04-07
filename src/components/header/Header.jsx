import React, { useState } from 'react'
import "./header.css"
import { IoIosSearch } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";
import { PiListLight } from "react-icons/pi";
import { MdOutlineClear } from "react-icons/md";

const Header = () => {
  const [dropDown, setDropDown] = useState(false)

  const handleShowNav = () => {
    setDropDown(!dropDown)
  }

  return (
    <div className='Headerbody'>
      <main className='Headermain'>
        <div className='Headerdiv1'>
        <img src='public/Frame 2382 (5).png'  className='Headerdiv1img'/>
        </div>
        <div className='Headerdiv2'>
          <input type="text" placeholder='Search' className='Headerdiv2input' />
          <IoIosSearch className='Headerdiv2icon' />
        </div>
        <div className='Headerdiv3'>
          <p className='Headerdiv3XX'>Home</p>
          <p className='Headerdiv3X'>Become a Host</p>
          <p className='Headerdiv3X'>About Us</p>
          <span className='Headerdiv3span'>
            <HiMiniUserCircle className='Headerdiv3spanicon' />
          </span>
        </div>
      </main>

      <div className='Headerdiv1XX'>
        <main className='Headerdiv1XXmain'>
          <img src='public/hubspot logo.jpg' className='Headerdiv1XXmainimg'/>
     
          <div onClick={handleShowNav}>
            {dropDown ? <MdOutlineClear /> : <PiListLight />}
          </div>
        </main>


       {dropDown && (
          <div className='Headerdiv1XXdropdown'>
            <p>Home</p>
            <p>Become a host</p>
            <p>About Us</p>
            <span className='Headerdiv1XXdropdownspan'> 
              <button className='Headerdiv1XXdropdownspanbut'>Sign up</button>
              <button className='Headerdiv1XXdropdownspanbut'>Login</button>
            </span>
          </div>
        )}

      </div>
    </div>
  )
}

export default Header
