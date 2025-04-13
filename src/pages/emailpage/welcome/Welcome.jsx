import React from 'react'
import './welcome.css'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <div className='SetBody'>
    <main className='SetContainer'>
        <h3 className='HeaderSet'>You’re all SET!</h3>
    <div className='Setwrap'>
    <img src='public/Approved 5 1 (1).png' className='Setwrapimg'/>
    </div>
    <p className='SetContainerp'>Your account has been successfully verified. Start exploring 
      and discover inspiring workspaces tailored just for you.</p>
    <button className='SetContainerbutton' onClick={() => navigate("/")}>Find A Space</button>
    </main>
    </div>
  )
}

export default Welcome
