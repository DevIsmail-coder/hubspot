import React from 'react'
import "../usersignup/usersignup.css"
import { MdEmail } from "react-icons/md";

const Usersignup = () => {
  return (
    <div className='Body'>
      <div className='Sigup'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height:"100%",
          gap: "20px",
          padding: "20px",
          background: " #fff",
          alignItems:"center",
          justifyContent:"center",
          borderRadius: "8px",
          width: "60%",
        }}
      >
              <h2 style={{fontSize:"60px"}}>Welcome To Hubspot</h2>
              <h2 style={{fontSize:"20px",color:"lightblack"}}>Create your account and unlock the perfect space for your need</h2>
        <input
          type="text"
          name="Full Name"
          placeholder="Full Name"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            fontSize:"20px",
            borderRadius: "5px",
            width:"100%",
            height:"7%"
          }}
        />
        <input
          type="Email Address"
          name="Email Address"
          placeholder="Email Address"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"100%",
            fontSize:"20px",
            height:"7%"
          }}
        />
           <input
          type="email"
          name="Company name"
          placeholder="Company name(Optional)"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize:"20px",
            width:"100%",
            height:"7%"
          }}
        />
           <input
          type="Password"
          name="Password"
          placeholder="Password"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize:"20px",
            width:"100%",
            height:"7%"
          }}
        />
        <input
          type="Confirm Password"
          name="Confirm Password"
          placeholder=" Confirm Password"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize:"20px",
            width:"100%",
            height:"7%"
          }}
        />

          <p style={{fontSize:"20px"}}>By Signing up, you agree to the? <span style={{fontSize:"20px",color:"blue"}}> Terms of Use and Private Policy</span></p>
        <button
          style={{
            padding: "10px",
            background: "blue",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            width:"100%",
            height:"60px",
            fontSize:"20px",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
        <p>0r</p>
        <input
          type=" Continue with Google"
          name=" Continue with Google"
          placeholder=" Continue with Google"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize:"20px",
            width:"100%",
            height:"9%",
            textAlign:"center"
          }}
        />
        <p>Already have an account? <span>Login</span></p>
      </div>
      </div>
    </div>
  )
}

export default Usersignup
