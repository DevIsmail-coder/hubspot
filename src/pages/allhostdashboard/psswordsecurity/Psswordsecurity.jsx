import React from 'react'
import "./psswordsecurity.css"
import { RiLockPasswordFill } from "react-icons/ri";


const Psswordsecurity = () => {
  return (
    <div className='Psswordsecuritybody'>
      <main className='Psswordsecuritymain'>
        <h3 className='Psswordsecuritymainh3'>Password & Security</h3>
        <span className='Psswordsecurityspan'><RiLockPasswordFill /> 
        <input type="text" placeholder='Enter Current Password' className='Psswordsecurityspaninput'/>
        </span>
        <span className='Psswordsecurityspan'><RiLockPasswordFill />  
        <input type="text" placeholder='Enter New Password' className='Psswordsecurityspaninput'/>
        </span>
        <span className='Psswordsecurityspan'><RiLockPasswordFill />  
        <input type="text" placeholder='Confirm New Password' className='Psswordsecurityspaninput'/>
        </span>
        <button className='Psswordsecuritybut'>Update</button>
      </main>
    </div>
  )
}

export default Psswordsecurity
