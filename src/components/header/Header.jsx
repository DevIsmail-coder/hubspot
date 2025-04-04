import React from 'react'
import "./header.css"
import { IoIosSearch } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";

const Header = () => {
  return (
    <div className='Headerbody'>
     <main className='Headermain'>
        <div className='Headerdiv1'>
            hello
        </div>
        <div className='Headerdiv2'>
            <input type="text" placeholder='Search' className='Headerdiv2input' />
            <IoIosSearch  className='Headerdiv2icon' />
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
    </div>
  )
}

export default Header
