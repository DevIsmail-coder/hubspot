import React from 'react'
import './password.css'

const Password = () => {
  return (
    <div className='ResetBody'>
    <main className='ResetContainer'>
        <h3 className='HeaderReset'>Reset Successful</h3>
    <div className='Resetwrap'>
    <img src='/public/Mail 4 1.png' className='Resetwrappassword'/>
    </div>
    <p className='ResetContainerp'>We've sent a password reset to your email. Please check your inbox and follow the instructions to reset your password</p>
    <button className='ResetContainerbutton'>Go Home</button>
    </main>
    </div>
  )
}

export default Password
