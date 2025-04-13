import React, { useEffect, useState } from 'react'
import './verifyemail.css'
import { useNavigate, useParams } from 'react-router-dom'
import { verifiyEmail } from '../../Hubspotapi'
import toast from 'react-hot-toast'

const Verifyemail = () => {
const {token} = useParams() 
const [isVerified, setIsVerified] = useState(false) 
const [loading, setLoading] = useState(false)
const navigate = useNavigate()

const handleloading = (parameter) => {
    setLoading(parameter)
 }

 const handleResponse = (mess) => {
    toast.success(res?.data?.message)
    if (mess.res.status === 200) {
        setIsVerified(true) 
        setTimeout(() => {
            navigate("/email")
        }, 3000)
    }
   
 }
    const hanndleSubmit = () => {
        verifiyEmail(token, handleloading, handleResponse)
    }

    useEffect(() => {
        hanndleSubmit()
    }, [])
  return (
    <div className='Verifyemailbody'>
  <main className='Verifyemailmain'>
  {
        loading ? <p className='Verifyemailmainp111'>Verifying your account...</p> : 
        isVerified ? <p className='Verifyemailmainp1'>Account verified successfully</p> : <p className='Verifyemailmainp2'>Verification failed</p>

     }
  </main>
    </div>
  )
}

export default Verifyemail
