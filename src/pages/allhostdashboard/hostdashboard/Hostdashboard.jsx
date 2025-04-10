import React from 'react'
import './hostdashboard.css'
import { Dashboardperformance, coworkSpaces } from '../../../components/hubdata'
import { useNavigate } from 'react-router-dom'


const Hostdashboard = () => {
const navigate = useNavigate()

  return (
    <div className='Hostdashboardbody'>
      <main className='Hostdashboardbodymain'>
        <div className='Hostdashboardbodycontainer1'>
          <h3 className='Hostdashboardbodycontainer1h3'>Manage Bookings </h3>
          <div className='Hostdashboardbodycontainer1wrap'>
            {
              Dashboardperformance.map((i, index) => (
                <article key={index} className='Hostdashboardbodycontainer1art' style={{borderTop: `6px solid ${i.color}`}}> 
                <h1 className='Hostdashboardbodycontainer1arth1'>{i.number}</h1>
                <h3 className='Hostdashboardbodycontainer1arth3'>{i.work}</h3>
                </article>
              ))
            }
          </div>
        </div>
        <div className='Hostdashboardbodycontainer2'>
          <h3 className='Hostdashboardbodycontainer2h3'>Performance Overview</h3>
          <main className='Hostdashboardbodycontainer2main'>
            <article className='Hostdashboardbodycontainer2mainart1'>

            </article>
            <article className='Hostdashboardbodycontainer2mainart2'>
              <div className='Hostdashboardbodycontainer2mainart2div'>
                <h1 className='Hostdashboardbodycontainer2mainart2divh1'>NGN 158,000</h1>
                <p className='Hostdashboardbodycontainer2mainart2divp'>Current Balance</p>
                <button className='Hostdashboardbodycontainer2mainart2divbut'>Withdraw</button>
              </div>
              <div className='Hostdashboardbodycontainer2mainart2div'>
              <h3 className='Hostdashboardbodycontainer2mainart2divh3'>5 Spaces</h3>
                <p className='Hostdashboardbodycontainer2mainart2divp'>Total Spaces Currently Live</p>
                <button className='Hostdashboardbodycontainer2mainart2divbut'>Add Space</button>
              </div>
            </article>
          </main>
        </div>
             <article className='Managelistmainart2'>
               <header className='Managelistmainart2head'>
                 <span className='Managelistmainart2headspan'>Space</span>
                 <span className='Managelistmainart2headspan1'>Bookings</span>
                 <span className='Managelistmainart2headspan1'>Date Posted</span>
                 <span className='Managelistmainart2headspan1'>Open Space</span>
                 <span className='Managelistmainart2headspan2'>Status</span>
                 <span className='Managelistmainart2headspan2'>Actions</span>
               </header>
               <main className='Managelistmainart2main'>
                  {
                   coworkSpaces.slice(0,3).map((i, index) => (
                     <article className='Managelistmainart2mainwrap' key={index}>
                     <div className='Managelistmainart2maindiv'>
                     <span className='Managelistmainart2maindivspan1'>
                      <img src= {i.image} alt=""  className='Managelistmainart2maindivspan1img'/>
                     </span>
                     <span className='Managelistmainart2maindivspan2'>
                      <p>{i.name}</p>
                      <p>Cowork</p>
                     </span>
                     </div>
                  <div className='Managelistmainart2maindiv1'>{i.users}</div>
                  <div className='Managelistmainart2maindiv2'>
                    <p>{i.date}</p>
                    <p className='Managelistmainart2maindiv2p'>{i.daysAgo}</p>
                  </div>
                  <div className='Managelistmainart2maindiv1'>{i.desks}</div>
                  <div className='Managelistmainart2maindiv1'>
                   <span className='Managelistmainart2maindiv1spanXX'>
                   {i.status}
                   </span>
                  </div>
                  <div className='Managelistmainart2maindiv1'>
                    <button className='Managelistmainart2maindiv1but'>Request edit</button>
                  </div>
                     </article>
                   ))
                  }
               <div className='Managelistmainart2mainview'onClick={() => navigate("/dashboardLayout/managelist")}>View more</div>
               </main>
             </article>
      </main>

    </div>
  )
}

export default Hostdashboard
