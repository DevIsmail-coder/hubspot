import React from 'react'
import './bookspace.css'
import { bookings } from '../../../components/hubdata'

const Bookspace = () => { 
  return (
    <div className='Bookspacebody'>
          <article className='Bookspacemain'>
                <header className='Bookspacemainhead'>
                  <span className='Bookspacemainheadspan'>Renter</span>
                  <span className='Bookspacemainheadspan1'>Space</span>
                  <span className='Bookspacemainheadspan1'>Booking Dates</span>
                  <span className='Bookspacemainheadspan1'>Booking Status</span>
                </header>
                <main className='Bookspacemainmain'>
                   {
                    bookings.map((i, index) => (
                      <article className='Bookspacemainmainwrap' key={index}>
                      <div className='Bookspacemainmaindiv'>
                      <span className='Bookspacemainmaindivspan1'>
                       <img src= {i.image} alt=""  className='Bookspacemainmaindivspan1img'/>
                      </span>
                       <p className='Bookspacemainmaindivspan2'>{i.name}</p>
                      </div>
                   <div className='Bookspacemainmaindiv1'>{i.location}</div>
                   <div className='Bookspacemainmaindiv1'>
                    <span className='Bookspacemainmaindiv1span'>
                      <p>{i.startDate}</p>
                      <p className='Bookspacemainmaindiv1spanp'>{i.startTime}</p>
                      </span> -
                    <span className='Bookspacemainmaindiv1span'>
                    <p>{i.endDate}</p>
                    <p className='Bookspacemainmaindiv1spanp'>{i.endTime}</p>
                    </span>
                   </div>
                   <div className='Bookspacemainmaindiv1'>
                    <span className='Bookspacemainmaindiv1spanXX'>
                    {i.status}
                    </span>
                   </div>
                      </article>
                    ))
                   }
                </main>
              </article>
    </div>
  )
}

export default Bookspace

