import React from 'react'
import './dashboardhead.css'
import { HiMiniUserCircle } from "react-icons/hi2";

const Dashboardheader = () => {
  return (
    <div className='dashboardheaderbody'>
       <header className='dashboardheaderbodycontainer2head'>
          <h3 className='dashboardheaderbodycontainer2headh3'>Hello, Ismail777</h3>
          <span className='dashboardheaderbodycontainer2headh3span'>
            <HiMiniUserCircle className='dashboardheaderbodycontainer2headh3spanicon'/>
          </span>
        </header>
    </div>
  )
}

export default Dashboardheader
