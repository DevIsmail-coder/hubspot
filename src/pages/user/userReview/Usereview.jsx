import React from 'react'
import './usereview.css'

const Usereview = () => {
  return (
    <div className='userReviewBookingpage'>
    <table className='userReviewFlowData'>
        <thead className='userReviewFlowdata1'>
            <tr>
                <th className='userReviewDataInfo'>Booking ID</th>
                <th className='userReviewDataInfo'>Space Name</th>
                <th className='userReviewDataInfo'>Dates</th>
                <th className='userReviewDataInfo'>Status</th>
                <th className='userReviewDataInfo'>Action</th>
            </tr>
        </thead>
        <tbody className='userReviewDatainfoB'>
            <tr className='userReviewDatainfoAB'>
                <td className='userReviewDataInfo2'>FS-4821</td>
                <td className='userReviewDataInfo2'><div className='userReviewSpaceDeet'> <img className='userReviewChoiceImage' src="yourimage.jpg" alt="" width="30" /> <div className='userReviewspaceDeets'><p>Flexi Space</p><p>Co work</p></div></div></td>
                <td className='userReviewDataInfo2'>2 Apr - 5 Apr</td>
                <td className='userReviewDataInfo2'>Upcoming</td>
                <td className='userReviewDataInfo2' ><button className='userReviewReviewbutton'>Add Review</button></td>
            </tr>
        </tbody>
    </table>

</div>

  )
}

export default Usereview
