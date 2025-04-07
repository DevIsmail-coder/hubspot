import React from 'react'
import './welcome.css'

const Welcome = () => {
  return (
    <div className='SetBody'>
    <main className='SetContainer'>
        <h3 className='HeaderSet'>Welcome</h3>
    <div className='Setwrap'>
    <img src='public/Approved 5 1 (1).png' className='Setwrapimg'/>
    </div>
    <p className='SetContainerp'>Your account have been created successfully. A verification email has been sent to yopur inbox. Please check your and click the link to complete your registration</p>
    <button className='SetContainerbutton'>Discover Your Workspace</button>
    </main>
    </div>
  )
}

export default Welcome
