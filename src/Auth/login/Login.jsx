import React, { useState } from 'react'
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../../pages/Hubspotapi';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; 
import { token } from '../../global/features';
import { userLogin } from '../../pages/Hubspotapi';

const Login = () => {
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
        if (userInfo.email.trim() === "" || !validation(userInfo.email)) {
            errors.email = "please enter a correct email"
        }
        if (userInfo.password.trim() === "" || !password(userInfo.password)) {
            errors.password = "password does not match "
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
            dispatch(token({ userToken: mess.res?.data?.token }))
            setTimeout(() => {
                navigate("/")
            }, 2000)
        }
        else if (mess.err?.response?.data?.message) {
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
        if (!handleError()) return;
        userLogin(userInfo, handleloading, handleResponse)
    }
    return (
        <div className='Loginbody'>
            <form className='Loginmain' onSubmit={handleSubmit}>
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

                    <p className='Logincontainer2spanerror'>{userError.email}</p>

                    <span className='Logincontainer2span1'>
                        <RiLockPasswordFill />
                        <input type={show ? "text" : "password"}
                            placeholder='Password'
                            className='Logincontainerinput'
                            onChange={handleChange}
                            name='password'
                            value={userInfo.password}
                        />
                         <p onClick={toggle} className='Hostsignupcontainer2spantoggle1'>{show ? <IoEyeOutline className="eye-icon" /> : <IoEyeOffOutline  className="eye-icon"/>}</p>
                    </span>
                    <p className='Logincontainer2spanerror'>{userError.password}</p>

                </div>
                <span className='Logincontainer3wrap' onClick={() => navigate("/forget")}>Forget Password?</span>
                <button className='Signupbutton1' type='submit'>{loading ? "Logging in..." : "Login"}</button>
                <div className='Logincontainer4'>
                    <span className='Logincontainer3span'></span>
                    <p>OR</p>
                    <span className='Logincontainer3span'></span>
                </div>
                <button className='Loginbutton2'><FcGoogle className='Loginbutton2icon' /> Continue with Google</button>
                <p className='Logincontainer3'>Don't have an account? <span className='Logincontainer4wrap' onClick={() => navigate("/usersignup")}>Create an account</span></p>
            </form>
        </div>
    )
}

export default Login