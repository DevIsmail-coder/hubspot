import React, { useEffect, useState } from 'react'
import './bookspace.css'
// import { bookings } from '../../../components/hubdata'
import { useSelector } from 'react-redux';
import { spaceBooking } from '../../Hubspotapi';

const Bookspace = () => {
  const [booking, setBooking] = useState([])
  const [title, setTitle] = useState("")
  const hostShowToken = useSelector((state) => state.hubspot.hostToken);
  const spaceToken = hostShowToken.hostToken

  const handleResponse = (mess) => {
    console.log(mess.data?.data?.name);
    if(mess.data?.data){
      setTitle(mess.data?.data?.name)
      setBooking(mess.data?.data?.Bookings)

      console.log("am booking now", mess.data?.data?.Bookings);
      console.log("am title now", mess.data?.data?.name);
    }
   
   console.log(mess.data?.data);
   
  }

  useEffect(() => {
    spaceBooking(handleResponse, spaceToken)
  }, [])

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
            booking.map((i, id) => (
              <article className='Bookspacemainmainwrap' key={id}>
                <div className='Bookspacemainmaindiv'>
                  <span className='Bookspacemainmaindivspan1'>
                    <HiUserCircle />
                    {/* <img src={i.image} alt="" className='Bookspacemainmaindivspan1img' /> */}
                  </span>
                 
                      <p className='Bookspacemainmaindivspan2' >{i.userName}</p>
                </div>
                <div className='Bookspacemainmaindiv1'>{title}</div>
                
                    <div className='Bookspacemainmaindiv1' >
                      <span className='Bookspacemainmaindiv1span'>
                        <p>{e.startDate}</p>
                        <p className='Bookspacemainmaindiv1spanp'>{i.startTime}</p>
                      </span>  -
                      <span className='Bookspacemainmaindiv1span'>
                        <p>{i.endDate}</p>
                        <p className='Bookspacemainmaindiv1spanp'>{i.endTime}</p>
                      </span>
                    </div>

                <div className='Bookspacemainmaindiv1'>
                  <span className='Bookspacemainmaindiv1spanXX'
                    style={{
                      backgroundColor: i.status === 'pending' ? '#FEFAEE' : i.status === 'active' ? '#E9F7EF' : '#FFEAEB',
                      color: i.status === 'pending' ? '#F2CB53' : i.status === 'active' ? '#27AE60' : '#EB5757'
                    }}
                  >
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

