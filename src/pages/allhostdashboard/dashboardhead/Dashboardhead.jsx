import React, { useState } from 'react'
import './dashboardhead.css'
import { HiMiniUserCircle } from "react-icons/hi2";
import { PiListLight } from "react-icons/pi";
import Leftboard from '../leftboard/Leftboard';
import { useUser } from '../../../global/context';

const Dashboardheader = () => {
const {dropDown, showing} = useUser()


  return (
    <div className='dashboardheaderbody'>
      <header className='dashboardheaderbodycontainer2head'>
        <h3 className='dashboardheaderbodycontainer2headh3'>Hello, Ismail777</h3>
        <span className='dashboardheaderbodycontainer2headh3span'>
          <HiMiniUserCircle className='dashboardheaderbodycontainer2headh3spanicon' />
        </span>
      </header>
      <header className='dashboardheaderbodycontainer2head1'>
        <PiListLight onClick={dropDown} />
        <img src='/Frame 2382 (5).png' className='dashboardheaderbodycontainer2head1img' />
      </header>
    {
      showing && 
      <div className='dashboardheaderbodycontainer2head1left'>
       <Leftboard />
    </div>
    }
    </div>
  )
}

export default Dashboardheader
