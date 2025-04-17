import React from 'react'
import './usersett.css'
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";

const Usersett = () => {
  return (
    <div className='AccountBody'>
      <div className='Accountmain'>
        <h3 className='Settings'>Account Settings</h3>
        <p className='SettingsProfile'>
        <LiaUserEditSolid  className='SettingsProfileIcon'/>
        </p>
        <span className='Securityspan'>
        <input type="text" placeholder='Name' className='Securityspaninput'/>
        </span> 

         <span className='Securityspan'>
        <input type="text" placeholder='Email' className='Securityspaninput'/>
        </span> 

       <span className='Securityspan'><IoIosCall  className='SettingIcon'/>
        <input type="text" placeholder='Mobile Number' className='Securityspaninput'/>
        </span>
      
       <span className='Securityspan2'><FaLocationDot className='SettingIcon' />
        <input type="text" placeholder='Resedentail Address' className='Securityspaninput2'/>
        </span>

        <span className='Securityspan3'><FaLock  className='SettingIcon2'/>
        <input type="text" placeholder='Enter Current Password' className='Securityspaninput3'/>
        </span>
         
        <span className='Securityspan3'><FaLock className='SettingIcon2'/>
        <input type="text" placeholder='Enter New Password' className='Securityspaninput3'/>
        </span>

        <span className='Securityspan3'><FaLock className='SettingIcon2'/>
        <input type="text" placeholder='Comfirm New Password' className='Securityspaninput3'/>
        </span>
        
        <button className='SettingButton'>update</button>
      </div>
    </div>
  )
}

export default Usersett