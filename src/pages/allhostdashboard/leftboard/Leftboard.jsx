import React, { useState } from 'react'
import './leftboard.css'
import { MdOutlineDashboard } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { MdSecurity } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { PiNotebook } from "react-icons/pi";

const Leftboard = () => {
    const [location, setLocation] = useState(false)


  const getActivediv = (path) => {
    return location.pathname === path ? "active" : "";
    }

    return (
        <div className='Leftboardbody'>
            <main className='Leftboardmain'>
                <img src='/public/Frame 2382 (5).png' className='Leftboardmainimg'/>
                <article className='Leftboardmainart'>
                    <span className='Leftboardmainartspan'><MdOutlineDashboard className='Leftboardmainartspanicon'/> Dashboard</span>
                    <span className='Leftboardmainartspan'><SlNote  className='Leftboardmainartspanicon'/> Manage Listing</span>
                    <span className='Leftboardmainartspan'><PiNotebook  className='Leftboardmainartspanicon'/> Bookings</span>
                    <span className='Leftboardmainartspan'><TbSettings  className='Leftboardmainartspanicon'/> Account Settings</span>
                    <span className='Leftboardmainartspan'><MdSecurity className='Leftboardmainartspanicon' /> Password & Security </span>
                </article>
            </main>
        </div>
    )
}

export default Leftboard
