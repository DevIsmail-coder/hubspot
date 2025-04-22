import React, { useEffect, useState } from 'react'
import { HiUserCircle } from "react-icons/hi";
import './bookspacedetail.css'
import { useSelector } from 'react-redux';
import { bookingDetails } from '../../Hubspotapi';
import { useParams } from 'react-router-dom';


const Bookspace = () => {
  const {id} = useParams()
  const [bookingList, setBookingList] = useState([])
  const hostShowToken = useSelector((state) => state.hubspot.hostToken);
  const spaceToken = hostShowToken.hostToken

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const handleResponse = (mess) => {
    console.log(mess?.res);
    if(mess.res?.data?.data){
      setBookingList(mess.res?.data?.data?.Bookings)

      console.log("am booking detail", mess?.res?.data?.data?.Bookings);
    }
   
  }

  console.log(id);
  

  useEffect(() => {
    bookingDetails(handleResponse, spaceToken, id)
  }, [spaceToken])

  return (
    <div className='Bookspacebody'>
      <article className='Bookspacemain'>
        <header className='Bookspacemainhead'>
          <span className='Bookspacemainheadspan'>Renter</span>
          {/* <span className='Bookspacemainheadspan1'>Space</span> */}
          <span className='Bookspacemainheadspan1'>Booking Dates</span>
          <span className='Bookspacemainheadspan1'>Booking Status</span>
        </header>
        <main className='Bookspacemainmain'>
          {
            bookingList.map((i, index) => (
              <article className='Bookspacemainmainwrap' key={index}>
                <div className='Bookspacemainmaindiv'>
                  <span className='Bookspacemainmaindivspan1'>
                    <HiUserCircle className='Bookspacemainmaindivspan1img' />
                  </span>
                 
                      <p className='Bookspacemainmaindivspan2' >{i.userName}</p>
                </div>
                {/* <div className='Bookspacemainmaindiv1'>{title}</div> */}
                
                    <div className='Bookspacemainmaindiv1' >
                      <span className='Bookspacemainmaindiv1span'>
                        <p className='Bookspacemainmaindiv1spanp'>{`${i.startDate?.slice(0,5)}${months[Number(i.startDate?.slice(5,7))-1]}${i.startDate?.slice(7,10)}`}</p>
                    
                      </span>  -
                      <span className='Bookspacemainmaindiv1span'>
                        <p className='Bookspacemainmaindiv1spanp'>{`${i.endDate?.slice(0,5)}${months[Number(i.endDate?.slice(5,7))-1]}${i.endDate?.slice(7,10)}`}</p>
                      </span>
                    </div>

                <div className='Bookspacemainmaindiv3'>
                  <span className='Bookspacemainmaindiv1spanXX'
                    style={{
                      backgroundColor: i.status === 'upcoming' ? '#FEFAEE' : i.status === 'active' ? '#E9F7EF' : '#FFEAEB',
                      color: i.status === 'upcoming' ? '#F5D77A' : i.status === 'active' ? '#27AE60' : '#EB5857'
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

