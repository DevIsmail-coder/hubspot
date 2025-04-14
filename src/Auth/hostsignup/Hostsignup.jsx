import React from 'react'
import './hostsignup.css'
import { HiUser } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegIdCard } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5"; 

const Hostsignup = () => {
    return (
        <div className='Hostsignupbody'>
            <main className='Hostsignupmain'>
                <div className='Hostsignupcontainer1'>
                    <h1>Welcome To Hubspot</h1>
                    <p className='Hostsignupcontainer1p'>Create your account and share your space.</p>
                </div>
                <div className='Hostsignupcontainer2'>
                    <span className='Hostsignupcontainer2span'>
                        <HiUser />
                        <input type="text"
                            placeholder='Full Name'
                            className='Hostsignupcontainerinput'
                        />
                    </span>
                    <span className='Hostsignupcontainer2span'>
                        <MdEmail />
                        <input type="text"
                            placeholder='Email address'
                            className='Hostsignupcontainerinput'
                        />
                    </span>
                    <span className='Hostsignupcontainer2span'>
                        <BsBriefcaseFill />
                        <input type="text"
                            placeholder='Company name (Optional)'
                            className='Hostsignupcontainerinput'
                        />
                    </span>
                    <span className='Hostsignupcontainer2span'>
                        <FaLocationDot />
                        <input type="text"
                            placeholder='Company Address'
                            className='Hostsignupcontainerinput'
                        />
                    </span>
                    <span className='Hostsignupcontainer2span'>
                        <RiLockPasswordFill />
                        <input type="password"
                            placeholder='Password'
                            className='Hostsignupcontainerinput'
                        />
                        <IoEyeOutline className="eye-icon" />
                    </span>
                    <span className='Hostsignupcontainer2span'>
                        <RiLockPasswordFill />
                        <input type="password"
                            placeholder='Confirm Password'
                            className='Hostsignupcontainerinput'
                        />
                        <IoEyeOutline className="eye-icon" />
                    </span> 
                    <span className='Hostsignupcontainer3span'>
                        <p className='TextDiv'>Means of Identification:</p>
                        <select className='Hostsignupcontainerinput2'>
                            <option value="" disabled selected>Select ID Type</option>
                            <option value="passport">Passport</option>
                            <option value="drivers">Driver's License</option>
                            <option value="national">National ID</option>
                        </select>
                    </span>
                    <span className='Hostsignupcontainer2span'>
                        <FaRegIdCard />
                        <input type="text"
                            placeholder='Enter ID Number'
                            className='Hostsignupcontainerinput'
                        />
                    </span>
                    <span className='Hostsignupcontainer2span'>
                        <input type="text"
                            placeholder='Upload ID'
                            className='Hostsignupcontainerinput'
                            readOnly
                        />
                        <button className='Browser'>Browse</button>
                    </span> 
                </div>
                <p className='Hostsignupcontainer3'>By signing up, you agree to the <span className='Hostsignupcontainer3wrap'>Terms of Use</span> and <span className='Signupcontainer3wrap'>Privacy Policy</span>.</p>
                <button className='Hostsignupbutton1'>Create Account</button>
                <p className='Hostsignupcontainer3'>Already have an account? <span className='Hostsignupcontainer3wrap'>Log in</span></p>
            </main>
        </div> 
    )
}

export default Hostsignup