import React, { useState } from 'react'
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate()
const [userError, setUserError] = useState({})
const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
})




const handleChange = (e) => {
    const {name, value} = e.target
    setUserInfo({...userInfo, [name]: value})
}

const validation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

const password = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/;
    return passwordRegex.test(password);
}

const handleError = () => {
    let errors = {}
    if(userInfo.email.trim() === ""  || !validation(userInfo.email)){
        errors.email = "please enter a correct email"
    }
    if(userInfo.password.trim() === "" || !password(userInfo.password)){
        errors.password = "please enter a valid email"
    }
}

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
                               onChange={handleChange}
                               name='email'
                               value={userInfo.email}
                           />
                       </span>

                       <p className='Logincontainer2spanerror'>errpr</p>
                 
                       <span className='Logincontainer2span' >
                           <RiLockPasswordFill />
                           <input type="password"
                               placeholder='Password'
                               className='Logincontainerinput'
                               onChange={handleChange}
                               name='password'
                               value={userInfo.password}
                           />
                       </span>
                       <p className='Logincontainer2spanerror'>errpr</p>

                   </div>
                   <span className='Logincontainer3wrap' onClick={() => navigate("/forget")}>Forget Password?</span>
                   <button className='Signupbutton1'>Create Account</button>
                   <div className='Logincontainer4'>
                     <span className='Logincontainer3span'></span>
                     <p>OR</p>
                     <span className='Logincontainer3span'></span>
                   </div>
                   <button className='Loginbutton2'><FcGoogle className='Loginbutton2icon'/> Continue with Google</button>
                   <p className='Logincontainer3'>Don't have an account? <span className='Logincontainer4wrap' onClick={() => navigate("/usersignup")}>Create an account</span></p>
               </main>
           </div> 
  )
}

export default Login