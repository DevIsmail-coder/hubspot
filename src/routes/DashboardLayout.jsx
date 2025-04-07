import React from 'react'
import "./DashboardLayout.css"
import Leftboard from '../pages/allhostdashboard/leftboard/Leftboard'
import { Outlet } from 'react-router-dom'
import Dashboardheader from '../pages/allhostdashboard/dashboardhead/Dashboardhead'

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
