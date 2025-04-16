import React, { useState } from 'react'
import './hostlogin.css'
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { hostLogin } from '../../pages/Hubspotapi';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; 
import { hostTok } from '../../global/features';

const Hostlogin = () => {
    const dispatch = useDispatch()
      const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [userError, setUserError] = useState({})
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const toggle = () => {
        setShow(!show)
      }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })

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
        if (userInfo.email.trim() === "" || !validation(userInfo.email.trim())) {
            errors.email = "please enter a correct email"
        }
        if (userInfo.password.trim() === "" || !password(userInfo.password)) {
            errors.password = "password does not match"
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
            toast.success(mess.res?.data?.message);
            setUserInfo({
                email: "",
                password: ""
            })
            dispatch(hostTok({ hostToken: mess.res?.data?.token }))
            setTimeout(() => {
                navigate("/dashboardLayout/hostdashboard")
            }, 2000)
        }
        else if (mess.err?.response?.data?.message) {
            toast.error(mess.err.response.data?.message);
        }
        //  else {
        //     toast.error("An error occurred. Please try again.");
        // }
    }


    const handleloading = (parameter) => {
        setLoading(parameter)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!handleError()) return;
        hostLogin(userInfo, handleloading, handleResponse)
    }
    return (
        <div className='Hostloginbody'>
            <form className='Loginmain' onSubmit={handleSubmit}>
                <div className='Hostlogincontainer1'>
                    <h1>Welcome Back </h1>
                    <p className='Hostlogincontainer1p'>login and discover the space that fits you</p>
                </div>
                <div className='Hostlogincontainer2'>

                    <span className='Hostlogincontainer2span' >
                        <MdEmail />
                        <input type="text"
                            placeholder='Email address'
                            className='Hostlogincontainerinput'
                            onChange={handleChange}
                            name='email'
                            value={userInfo.email}
                        />
                    </span>

                    <p className='Hostlogincontainer2spanerror'>{userError.email}</p>

                    <span className='Hostlogincontainer2span1'>
                        <RiLockPasswordFill />
                        <input type={show ? "text" : "password"}
                            placeholder='Password'
                            className='Hostlogincontainerinput'
                            onChange={handleChange}
                            name='password'
                            value={userInfo.password}
                        />
                         <p onClick={toggle} className='Hostsignupcontainer2spantoggle1'>{show ? <IoEyeOutline className="eye-icon" /> : <IoEyeOffOutline  className="eye-icon"/>}</p>
                    </span>
                    <p className='Hostlogincontainer2spanerror'>{userError.password}</p>

                </div>
                <span className='Hostlogincontainer3wrap' onClick={() => navigate("/forget")}>Forget Password?</span>
                <button className='Signupbutton1' type='submit'>{loading ? "Logging in..." : "login"}</button>
                <p className='Hostlogincontainer3'>Don't have an account? <span className='Hostlogincontainer4wrap' onClick={() => navigate("/hostsignup")}>Create an account</span></p>
            </form>
        </div>
    )
}

export default Hostlogin