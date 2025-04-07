import React from 'react'
import './usersignup.css'
import { FcGoogle } from "react-icons/fc";
import { HiUser } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

const Usersignup = () => {
    return (
        <div className='Signupbody'>
            <main className='Signupmain'>
                <div className='Signupcontainer1'>
                    <h1>Welcome To Hubspot </h1>
                    <p className='Signupcontainer1p'>Create your account and unlock the perfect space for your needs.</p>
                </div>
                <div className='Signupcontainer2'>
                    <span className='Signupcontainer2span' >
                        <HiUser />
                        <input type="text"
                            placeholder='Full Name'
                            className='Signupcontainerinput'
                        />
                    </span>
                    <span className='Signupcontainer2span' >
                        <MdEmail />
                        <input type="text"
                            placeholder='Email address'
                            className='Signupcontainerinput'
                        />
                    </span>
                    <span className='Signupcontainer2span' >
                        <BsBriefcaseFill />
                        <input type="text"
                            placeholder='Company name'
                            className='Signupcontainerinput'
                        />
                    </span>
                    <span className='Signupcontainer2span' >
                        <RiLockPasswordFill />
                        <input type="password"
                            placeholder='Password'
                            className='Signupcontainerinput'
                        />
                    </span>
                    <span className='Signupcontainer2span'>
                        <RiLockPasswordFill />
                        <input type="password"
                            placeholder='Confirm Password'
                            className='Signupcontainerinput'
                        />
                    </span>
                </div>
                <p className='Signupcontainer3'>By signing up, you agree to the <span className='Signupcontainer3wrap'>Terms of Use</span> and <span className='Signupcontainer3wrap'>Privacy Policy.</span></p>
                <button className='Signupbutton1'>Create Account</button>
                <div className='Signupcontainer4'>
                  <span className='Signupcontainer3span'></span>
                  <p>OR</p>
                  <span className='Signupcontainer3span'></span>
                </div>
                <button className='Signupbutton2'><FcGoogle className='Signupbutton2icon'/> Continue with Google</button>
                <p className='Signupcontainer3'>Already have an account? <span className='Signupcontainer3wrap'>Log in</span></p>
            </main>
        </div> 
    )
}

export default Usersignup
