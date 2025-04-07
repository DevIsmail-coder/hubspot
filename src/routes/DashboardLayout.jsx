import React from 'react'
import "./DashboardLayout.css"
import Leftboard from '../pages/allhostdashboard/leftboard/Leftboard'
import Dashboardheader from '../pages/allhostdashboard/dashboardheader/dashboardheader'
import Hostdashboard from '../pages/allhostdashboard/hostdashboard/Hostdashboard'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='DashboardLayoutbody'>
      <main className='DashboardLayoutbodymain1'><Leftboard /></main>
      <main className='DashboardLayoutmain2'>
        <Dashboardheader />
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
