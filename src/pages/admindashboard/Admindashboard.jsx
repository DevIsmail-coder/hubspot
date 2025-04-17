import React from 'react'
import './admindashboard.css'
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoMdNotifications } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { IoIosWifi } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { MdSolarPower } from "react-icons/md";
import { PiSecurityCameraFill } from "react-icons/pi";

const Admindashboard = () => {
  return (
    <div className='Body'>
      <div className='LeftSide'>
        <div className='ImgDiv'></div>
        <div className='TextDiv1'>
          <FaEdit className='TextIcon1' />
          Admin
        </div>
        <div className='TextDiv2'>
          <CgLogOut className='TextIcon2' />
          Log Out
        </div>
      </div>
      <div className='RightSide'>
        <div className='RightHeader'>
          <div className='ProfileDiv'>
            <p className='Profile1'>
              <IoMdNotifications className='ProfileIcon1' />
            </p>
            <p className='Profile2'>
              <RxAvatar className='ProfileIcon2' />
            </p>
          </div>
        </div>

        <div className='AdminLandingcontainer2wrap'>
          <article className='AdminLandingcontainer2wrapart1'>
          </article>
          <img src="https://focus.hidubai.com/content/images/2023/07/best-homes-cover.jpg" className='AdminLandingcontainer2wrapart1img' />
          <article className='AdminLandingcontainer2wrapart2'>
            <h3 className='AdminLandingcontainer2wrapart2h3'>Flexispace</h3>
            <p className='AdminLandingcontainer2wrapart2hp'>A modern coworking space hosting a community of professionals, designed to boost productivity.</p>
            <div className='AdminLandingcontainer2iconwrap'>
              <IoIosWifi />
              <GiCoffeeCup />
              <MdSolarPower />
              <PiSecurityCameraFill />
            </div>
            <div className='AdminLandingcontainer2butwrap'>
              <button className='AdminLandingcontainer2butwrap1'>Approve space</button>
              <button className='AdminLandingcontainer2butwrap2'>Delete space</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Admindashboard