import React from 'react'
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
       <div className='Loginbody'>
               <main className='Loginmain'>
                   <div className='Logincontainer1'>
                       <h1>Welcome Back </h1>
                       <p className='Logincontainer1p'>login and discover the space that fits you</p>
                   </div>
                   <div className='Logincontainer2'>
                     
                       <span className='Logincontainer2span' >
                           <MdEmail />
                           <input type="text"
                               placeholder='Email address'
                               className='Logincontainerinput'
                           />
                       </span>
                 
                       <span className='Logincontainer2span' >
                           <RiLockPasswordFill />
                           <input type="password"
                               placeholder='Password'
                               className='Logincontainerinput'
                           />
                       </span>
                   
                   </div>
                   <span className='Logincontainer3wrap'>Forget Password?</span>
                   <button className='Signupbutton1'>Create Account</button>
                   <div className='Logincontainer4'>
                     <span className='Logincontainer3span'></span>
                     <p>OR</p>
                     <span className='Logincontainer3span'></span>
                   </div>
                   <button className='Loginbutton2'><FcGoogle className='Loginbutton2icon'/> Continue with Google</button>
                   <p className='Logincontainer3'>Don't have an account? <span className='Logincontainer4wrap '>Create an account</span></p>
               </main>
           </div> 
  )
}

export default Login