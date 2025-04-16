import React, { useState } from 'react'
import './hostsignup.css'
import { HiUser } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegIdCard } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; 
import { hostdata } from '../../global/features';
import { useDispatch } from 'react-redux';
import { hostSignup } from '../../pages/Hubspotapi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Hostsignup = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
  const [userError, setUserError]  = useState({})
      const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        companyName: "",
        companyAddress: "",
        meansOfIdentification: "",
        idCardNumber: "",
      })

      console.log(userData);
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

    const handleImage = (e) => {
      const file = e.target.files[0];
      const userImage = (URL.createObjectURL(file))
      if (file) {
        setUserData({ ...userData, ninImage: userImage }); 
  
        if (userError.ninImage) {
          setUserError({ ...userError, ninImage: "" });
        }
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
          errors.fullName = "please enter your fullName"
      }
      if (userData.meansOfIdentification.trim() === "") {
        errors.meansOfIdentification = "please select a correct meansOfIdentification"
    }
      if (userData.email.trim() === "" || !validation(userData.email.trim())) {
          errors.email = "please enter a correct email"
      }
      if (userData.companyName.trim() === "") {
          errors.companyName = "please enter your company name"
      }
      if (userData.companyAddress.trim() === "") {
        errors.companyAddress = "please enter your company address"
    }
      if (userData.password.trim() === "" || !password(userData.password.trim())) {
          errors.password = "password must include uppercase, lowercase, and a special character."
      }
      if (userData.confirmPassword.trim() === "" || userData.confirmPassword.trim() !== userData.password) {
          errors.confirmPassword = "password those not match"
      }
      if (userData.idCardNumber.trim() === "") {
        errors.idCardNumber = "please enter your idCardNumber"
    }
    // if (!userData.ninImage) {
    //   errors.ninImage = "Please upload your ID image";
    // }


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
        toast.success("account created successfully, please check your email to verify your account");
        dispatch(hostdata({ host: userData }))
        setUserData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          companyName: "",
          companyAddress: "",
          meansOfIdentification: "",
          idCardNumber: "",
          ninImage: "",
        })
        navigate("/email")
    } else if (mess.err?.response?.data?.message) {
        toast.error(mess.err.response.data?.message);
    } else {
        toast.error("An error occurred. Please try again.");
    }
}

    const handleloading = (parameter) => {
        setLoading(parameter)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!handleError())
            return;
        hostSignup(userData, handleloading, handleResponse)
    }


    return (
        <div className='Hostsignupbody'>
            <form className='Hostsignupmain' onSubmit={handleSubmit}>
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
                            onChange={handleChange}
                            name='fullName'
                            value={userData.fullName}
                        />
                    </span>
                    <p className='Hostsignupcontainer2spanerror'>{userError.fullName}</p>
                    <span className='Hostsignupcontainer2span'>
                        <MdEmail />
                        <input type="text"
                            placeholder='Email address'
                            className='Hostsignupcontainerinput'
                            onChange={handleChange}
                            name='email'
                            value={userData.email}
                        />
                    </span>
                    <p className='Hostsignupcontainer2spanerror'>{userError.email}</p>
                    <span className='Hostsignupcontainer2span'>
                        <BsBriefcaseFill />
                        <input type="text"
                            placeholder='Company name'
                            className='Hostsignupcontainerinput'
                            onChange={handleChange}
                            name='companyName'
                            value={userData.companyName}
                        />
                    </span>
                    <p className='Hostsignupcontainer2spanerror'>{userError.companyName}</p>
                    <span className='Hostsignupcontainer2span'>
                        <FaLocationDot />
                        <input type="text"
                            placeholder='Company Address'
                            className='Hostsignupcontainerinput'
                            onChange={handleChange}
                            name='companyAddress'
                            value={userData.companyAddress}
                        />
                    </span>
                    <p className='Hostsignupcontainer2spanerror'>{userError.companyAddress}</p>
                    <span className='Hostsignupcontainer2span'>
                        <RiLockPasswordFill />
                        <input type={show ? "text" : "password"}
                            placeholder='Password'
                            className='Hostsignupcontainerinput'
                            onChange={handleChange}
                            name='password'
                            value={userData.password}
                        />
                       <p onClick={toggle} className='Hostsignupcontainer2spantoggle'>{show ? <IoEyeOutline className="eye-icon" /> : <IoEyeOffOutline  className="eye-icon"/>}</p>
                    </span>
                    <p className='Hostsignupcontainer2spanerror'>{userError.password}</p>
                    <span className='Hostsignupcontainer2span'>
                        <RiLockPasswordFill />
                        <input type={show ? "text" : "password"}
                            placeholder='Confirm Password'
                            className='Hostsignupcontainerinput'
                            onChange={handleChange}
                            name='confirmPassword'
                            value={userData.confirmPassword}
                        />
                        <p onClick={toggle} className='Hostsignupcontainer2spantoggle'>{show ? <IoEyeOutline className="eye-icon" /> : <IoEyeOffOutline  className="eye-icon"/>}</p>
                    </span> 
                    <p className='Hostsignupcontainer2spanerror'>{userError.confirmPassword}</p>
                    <span className='Hostsignupcontainer3span'>
                        <p className='TextDiv'>Means of Identification:</p>
                        <select className='Hostsignupcontainerinput2'
                          onChange={handleChange}
                          name='meansOfIdentification'
                          value={userData.meansOfIdentification}
                        >
                            <option value= "" disabled>Select ID Type</option>
                            <option value= "passport">Passport</option>
                            <option value= "Driver's License" >Driver's License</option>
                            <option value= "NIN">National ID</option>
                        </select>
                    </span>
                    <p className='Hostsignupcontainer2spanerror'>{userError.meansOfIdentification}</p>
                    <span className='Hostsignupcontainer2span'>
                        <FaRegIdCard />
                        <input type="number"
                            placeholder='Enter ID Number'
                            className='Hostsignupcontainerinput'
                            onChange={handleChange}
                            name='idCardNumber'
                            value={userData.idCardNumber}
                        />
                    </span>
                    <p className='Hostsignupcontainer2spanerror'>{userError.idCardNumber}</p>
                    <span className='Hostsignupcontainer2span'>
                      {/* <img src={userData.ninImage} alt="" className='Hostsignupcontainer2span1img'/> */}
                        <input type="file"
                        id='ismail'
                        onChange={handleImage}
                        name='ninImage'
                        hidden
                            placeholder='Upload ID'
                            className='Hostsignupcontainerinput'
                            readOnly
                        />
                        <label className='Browser' htmlFor='ismail'>Browse</label>
                    </span> 
                    <p className='Hostsignupcontainer2spanerror'>{userError.ninImage}</p>
                </div>
                <p className='Hostsignupcontainer3'>By signing up, you agree to the <span className='Hostsignupcontainer3wrap'>Terms of Use</span> and <span className='Signupcontainer3wrap'>Privacy Policy</span>.</p>
                <button className='Hostsignupbutton1' type='submit'>{loading ? "Loading..." : "Create Account"}</button>
                <p className='Hostsignupcontainer3'>Already have an account? <span className='Hostsignupcontainer3wrap' onClick={() => navigate("/hostlogin")}>Log in</span></p>
            </form>
        </div> 
    )
}

export default Hostsignup