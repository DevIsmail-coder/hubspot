import React, { useState } from 'react'
import './usersignup.css'
import { FcGoogle } from "react-icons/fc";
import { HiUser } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { userSignup } from '../../pages/Hubspotapi';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { isVerified, userdata, } from '../../global/features';


const Usersignup = () => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [userError, setUserError] = useState({})
    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: "",
        company: "",
        confirmPassword: "",
    })

    const toggle = () => {
        setShow(!show)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })

        if (userError[name]) {
            setUserError({ ...userError, [name]: "" })
        }
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
        if (userData.fullName.trim() === "") {
            errors.fullName = "please enter your full name"
        }
        if (userData.email.trim() === "" || !validation(userData.email.trim())) {
            errors.email = "please enter a correct email"
        }
        if (userData.company.trim() === "") {
            errors.company = "please enter company name"
        }
        if (userData.password.trim() === "" || !password(userData.password.trim())) {
            errors.password = "password must include uppercase, lowercase, and a special character."
        }
        if (userData.confirmPassword.trim() === "" || userData.confirmPassword.trim() !== userData.password) {
            errors.confirmPassword = "password does not match"
        }


        if (Object.keys(errors).length > 0) {
            setUserError(errors)
            return false
        }

        else {
            setUserError({})
            return true
        }
    }


    const handleResponse = (mess) => {
        if (mess.res?.data?.message) {
            toast.success("account created successfully, please check email to verify your account");
            dispatch(userdata({ user: userData }))
            setUserData({
                fullName: "",
                email: "",
                password: "",
                company: "",
                confirmPassword: "",
            })
            navigate("/email")
        } else if (mess.err?.response?.data?.message) {
            toast.error(mess.err.response.data?.message);
        } 
        // else {
        //     toast.error("An error occurred. Please try again.");
        // }
    }


    const handleloading = (parameter) => {
        setLoading(parameter)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!handleError())
            return;
        const { company, ...updatedUserData } = userData
        userSignup(updatedUserData, handleloading, handleResponse)
    }


    return (
        <div className='Signupbody'>
            <form className='Signupmain' onSubmit={handleSubmit}>
                <div className='Signupcontainer1'>
                    <h1 className='Signupcontainer1h1'>Welcome To Hubspot </h1>
                    <p className='Signupcontainer1p'>Create your account and unlock the perfect space for your needs.</p>
                </div>
                <div className='Signupcontainer2'>
                    <span className='Signupcontainer2span' >
                        <HiUser />
                        <input type="text"
                            placeholder='Full Name'
                            className='Signupcontainerinput'
                            onChange={handleChange}
                            name='fullName'
                            value={userData.fullName}
                        />
                    </span>
                    <p className='Signupcontainer2spanerror'>{userError.fullName}</p>
                    <span className='Signupcontainer2span' >
                        <MdEmail />
                        <input type="text"
                            placeholder='Email address'
                            className='Signupcontainerinput'
                            onChange={handleChange}
                            name='email'
                            value={userData.email}
                        />
                    </span>
                    <p className='Signupcontainer2spanerror'>{userError.email}</p>
                    <span className='Signupcontainer2span' >
                        <BsBriefcaseFill />
                        <input type="text"
                            placeholder='Company name'
                            className='Signupcontainerinput'
                            onChange={handleChange}
                            name='company'
                            value={userData.company}

                        />
                    </span>
                    <p className='Signupcontainer2spanerror'>{userError.company}</p>
                    <span className='Signupcontainer2span1' >
                        <RiLockPasswordFill />
                        <input type={show ? "text" : "password"}
                            placeholder='Password'
                            className='Signupcontainerinput'
                            onChange={handleChange}
                            name='password'
                            value={userData.password}
                        />
                        <p onClick={toggle} className='Hostsignupcontainer2spantoggle1'>{show ? <IoEyeOutline className="eye-icon" /> : <IoEyeOffOutline className="eye-icon" />}</p>
                    </span>
                    <p className='Signupcontainer2spanerror'>{userError.password}</p>
                    <span className='Signupcontainer2span1'>
                        <RiLockPasswordFill />
                        <input type={show ? "text" : "password"}
                            placeholder='Confirm Password'
                            className='Signupcontainerinput'
                            onChange={handleChange}
                            name='confirmPassword'
                            value={userData.confirmPassword}
                        />
                        <p onClick={toggle} className='Hostsignupcontainer2spantoggle1'>{show ? <IoEyeOutline className="eye-icon" /> : <IoEyeOffOutline className="eye-icon" />}</p>
                    </span>
                    <p className='Signupcontainer2spanerror'>{userError.confirmPassword}</p>
                </div>
                <p className='Signupcontainer3'>By signing up, you agree to the <span className='Signupcontainer3wrap'>Terms of Use</span> and <span className='Signupcontainer3wrap'>Privacy Policy.</span></p>
                <button className='Signupbutton1' type='submit'>{loading ? "Loading..." : "Create Account"}</button>
                <div className='Signupcontainer4'>
                    <span className='Signupcontainer3span'></span>
                    <p>OR</p>
                    <span className='Signupcontainer3span'></span>
                </div>
                <button className='Signupbutton2'><FcGoogle className='Signupbutton2icon' /> Continue with Google</button>
                <p className='Signupcontainer3'>Already have an account? <span className='Signupcontainer3wrap' onClick={() => navigate("/login")}>Log in</span></p>
            </form>
        </div>
    )
}

export default Usersignup
