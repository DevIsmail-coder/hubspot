import React from 'react'
import './managelist.css'
import { coworkSpaces } from '../../../components/hubdata'

const Managelist = () => {
  return (
    <div className='Managelistbody'>
      <main className='Managelistmain'>
        <article className='Managelistmainart1'>
          <h3 className='Managelistmainart1h3'>5 Spaces</h3>
          <p className='Managelistmainart1p'>Total Spaces Currently Live</p>
          <button className='Managelistmainart1but'>Add Space</button>
        </article>
        <article className='Managelistmainart2'>
          <header className='Managelistmainart2head'>
            <span className='Managelistmainart2headspan'>Space</span>
            <span className='Managelistmainart2headspan1'>Bookings</span>
            <span className='Managelistmainart2headspan1'>Date Posted</span>
            <span className='Managelistmainart2headspan1'>Open Space</span>
            <span className='Managelistmainart2headspan2'>Status</span>
            <span className='Managelistmainart2headspan'>Actions</span>
          </header>
          <main className='Managelistmainart2main'>
             {
              coworkSpaces.map((i, index) => (
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
          </main>
        </article>
      </main>
    </div>
  )
}

export default Managelist
