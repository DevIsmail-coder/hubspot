import React, { useEffect, useState } from 'react'
import './usereview.css'
import { useSelector } from 'react-redux';
import { userBooking } from '../../Hubspotapi';
import { useLocation } from 'react-router-dom';
import BookingVerification from '../../landing/BookingVerification';
const Usereview = () => {
    const hostShowToken = useSelector((state) => state.hubspot.userToken);
    const bookToken = hostShowToken.userToken
    const [booking, setBooking] = useState([])
    const location = useLocation();


    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    
    useEffect(() => {
        if (location.state?.paymentSuccess) {
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    const handleResponse = (mess) => {
        if(mess?.res?.data?.data){
            setBooking(mess?.res?.data?.data);
            console.log(booking);
            
        }
    }

    useEffect(() => {
        userBooking(handleResponse, bookToken)
    }, [])
    return (
        <div className='userReviewBookingpage'>
            <table className='userReviewFlowData'>
                <thead className='userReviewFlowdata1'>
                    {/* <tr> */}
                        {/* <th className='userReviewDataInfo'>Booking ID</th> */}
                        <th className='userReviewDataInfo'>Space Name</th>
                        <th className='userReviewDataInfo'>Dates</th>
                        <th className='userReviewDataInfo'>Status</th>
                        <th className='userReviewDataInfo'>Action</th>
                    {/* </tr> */}
                </thead>
                <tbody className='userReviewDatainfoB'>
                 {
                    booking.map((i, id) => (
                        <div key={id} className='userReviewFlowdatab2'>
                        {/* <td className='userReviewDataInfo2'>FS-4821</td> */}
                        <td className='userReviewDataInfo2'>{i.spaceName}</td>
                        <td className='userReviewDataInfo2'>{`${i.startDate?.slice(0,5)}${months[Number(i.startDate?.slice(5,7))-1]}${i.startDate?.slice(7,10)}`}</td>
                        <td className='userReviewDataInfo2'> 
                            <span 
                            className='userReviewDataInfo2span'
                              style={{
                                backgroundColor: i.status === 'upcoming' ? '#FEFAEE' : i.status === 'active' ? '#E9F7EF' : '#FFEAEB',
                                color: i.status === 'upcoming' ? '#F5D77A' : i.status === 'active' ? '#27AE60' : '#EB5857'
                              }}
                            >
    
                            {i.status}
                            </span>
                            
                            </td>
                        <td className='userReviewDataInfo2' ><button className='userReviewReviewbutton'>Add Review</button></td>
                    </div>
                    ))
               
                 }
                </tbody>
            </table>
            {
                location.state?.paymentSuccess && (
                    <BookingVerification />
                )
            }
        </div>

    )
}

export default Usereview