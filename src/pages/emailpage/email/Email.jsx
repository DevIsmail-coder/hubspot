import React from 'react'
import './email.css'

const Email = () => {
  return (
    <div className='EmailBody'>
    <main className='EmailContainer'>
    <div className='Emailwrap'>
    <img src='/public/Mail 4 1.png' className='Emailwrapimg'/>
    </div>
    <h3 className='EmailContainerh3'>Check your email</h3>
    <p className='EmailContainerp'>Please check your inbox and follow the link to verify your account</p>
    <button className='EmailContainerbutton'>Resend email verification</button>
    </main>
    </div>
  )
}

export default Email
