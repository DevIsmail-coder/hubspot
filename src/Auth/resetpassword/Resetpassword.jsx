import React from 'react'
import './resetpassword.css'
import { RiLockPasswordFill } from "react-icons/ri";

const Resetpassword = () => {
  return (
 <div className='Resetbody'>
             <main className='Resetmain'>
                 <div className='Resetcontainer1'>
                     <h1>Reset Password </h1>
                     <p className='Resetcontainer1p'>Create your account and unlock the perfect space for your needs.</p>
                 </div>
                 <div className='Logincontainer2'>
                    <span className='Resetcontainer2span' >
                        <RiLockPasswordFill />
                       <input type="password"
                       placeholder='Password'
                      className='Resetcontainerinput'
                      />
                     </span>
                      <span className='Resetcontainer2span'>
                      <RiLockPasswordFill />
                      <input type="password"
                      placeholder='Confirm Password'
                      className='Resetcontainerinput'
                    />
                     </span>
                 </div>
                 <button className='Resetbutton1'>  Reset</button>
             </main>
         </div> 
  )
}

export default Resetpassword
