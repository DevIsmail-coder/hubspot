import React, { useState } from 'react'
import './leftboard.css'
import { MdOutlineDashboard } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { MdSecurity } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { PiNotebook } from "react-icons/pi";
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../../global/context';

const Leftboard = () => {
    const {dropDown} = useUser()
    const location = useLocation()
    const navigate = useNavigate()


    const getActivediv = (path) => {
        return location.pathname === path ? "active" : "";
    }

    const handleNavigate = (path) => {
        navigate(path);
        dropDown()
    }



    return (
        <div className='Leftboardbody'>
            <main className='Leftboardmain'>
                <img src='/Frame 2382 (5).png' className='Leftboardmainimg' />
                <article className='Leftboardmainart'>
                    <span className={`Leftboardmainartspan ${getActivediv("/dashboardLayout/hostdashboard")}`}
                        onClick={() => {navigate("/dashboardLayout/hostdashboard")}}>
                        <MdOutlineDashboard className='Leftboardmainartspanicon' /> Dashboard</span>
                    <span className={`Leftboardmainartspan ${getActivediv("/dashboardLayout/managelist")}`}
                        onClick={() => {navigate("/dashboardLayout/managelist")}}>
                        <SlNote className='Leftboardmainartspanicon' /> Manage Listing</span>
                    <span className={`Leftboardmainartspan ${getActivediv("/dashboardLayout/booking")}`}
                        onClick={() => {navigate("/dashboardLayout/booking")}}>
                        <PiNotebook className='Leftboardmainartspanicon' /> Bookings</span>
                    <span className={`Leftboardmainartspan ${getActivediv("/dashboardLayout/accountsetting")}`}
                        onClick={() => {navigate("/dashboardLayout/accountsetting")}}>
                        <TbSettings className='Leftboardmainartspanicon' /> Account Settings</span>
                    <span className={`Leftboardmainartspan ${getActivediv("/dashboardLayout/password&security")}`}
                        onClick={() => {navigate("/dashboardLayout/password&security")}}>
                        <MdSecurity className='Leftboardmainartspanicon' /> Password & Security </span>
                </article>
            </main>


            <main className='LeftboardmainXX'>
                <article className='LeftboardmainXXart'>
                    <span className={`LeftboardmainXXartspan ${getActivediv("/dashboardLayout/hostdashboard")}`}
                        onClick={() => {handleNavigate("/dashboardLayout/hostdashboard")}}>
                        <MdOutlineDashboard className='LeftboardmainXXartspanicon' /> Dashboard</span>
                    <span className={`LeftboardmainXXartspan ${getActivediv("/dashboardLayout/managelist")}`}
                        onClick={() => {handleNavigate("/dashboardLayout/managelist")}}>
                        <SlNote className='LeftboardmainXXartspanicon' /> Manage Listing</span>
                    <span className={`LeftboardmainXXartspan ${getActivediv("/dashboardLayout/booking")}`}
                        onClick={() => {handleNavigate("/dashboardLayout/booking")}}>
                        <PiNotebook className='LeftboardmainXXartspanicon' /> Bookings</span>
                    <span className={`LeftboardmainXXartspan ${getActivediv("/dashboardLayout/accountsetting")}`}
                        onClick={() => {handleNavigate("/dashboardLayout/accountsetting")}}>
                        <TbSettings className='LeftboardmainXXartspanicon' /> Account Settings</span>
                    <span className={`LeftboardmainXXartspan ${getActivediv("/dashboardLayout/password&security")}`}
                        onClick={() => {handleNavigate("/dashboardLayout/password&security")}}>
                        <MdSecurity className='LeftboardmainXXartspanicon' /> Password & Security </span>
                </article>
            </main>
        </div>
    )
}

export default Leftboard
