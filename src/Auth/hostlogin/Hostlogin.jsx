import React from 'react'
import './hostlogin.css'
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from "react-icons/bs";

const Hostlogin = () => {
  const navigate = useNavigate()
  return (
       <div className='Hostloginbody'>
               <main className='Hostloginmain'>
               <div className='HostloginBackbutton'>
              <BsArrowLeftCircle  className='HostloginIconButton'  onClick={() => navigate("/hostsignup")}/>
              </div>
                   <div className='Hostlogincontainer1'>
                       <h1 className='HostloginHeader'>Welcome Back </h1>
                       {/* <p className='Hostlogincontainer1p'>login and discover the space that fits you</p> */}
                   </div>
                   <div className='Hostlogincontainer2'>
                     
                       <span className='Hostlogincontainer2span' >
                           <MdEmail />
                           <input type="text"
                               placeholder='Email address'
                               className='Hostlogincontainerinput'
                           />
                       </span>
                 
                       <span className='Hostlogincontainer2span' >
                           <RiLockPasswordFill />
                           <input type="password"
                               placeholder='Password'
                               className='Hostlogincontainerinput'
                           />
                       </span>
                   
                   </div>
                   <span className='Hostlogincontainer3wrap' onClick={() => navigate("/forget")}>Forget Password?</span>
                   <button className='Signupbutton1'>Create Account</button>
                   <div className='Hostlogincontainer4'>
                     <span className='Hostlogincontainer3span'></span>
                     <p>OR</p>
                     <span className='Hostlogincontainer3span'></span>
                   </div>
                   <button className='Hostloginbutton2'><FcGoogle className='Hostloginbutton2icon'/> Continue with Google</button>
                   <p className='Hostlogincontainer3'>Don't have an account? <span className='Hostlogincontainer4wrap' onClick={() => navigate("/usersignup")}>Create an account</span></p>
               </main>
           </div> 
  )
}

export default Hostlogin