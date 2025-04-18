import React, { useEffect, useState } from 'react'
import './hostdashboard.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiUserCircle } from "react-icons/hi";
import { bookCategories, currentBalance, getSpace, listing } from '../../Hubspotapi'

const Hostdashboard = () => {
  const navigate = useNavigate()
  const [performance, setPerformance] = useState({})
  const [balance, setbalance] = useState(0.00)
  const [allListed, setAllListed] = useState([])
  const [current, setCurrent] = useState(0)
  const hostShowToken = useSelector((state) => state.hubspot.hostToken);
  const spaceToken = hostShowToken.hostToken

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const handleResponse = (mess) => {
    if (mess.data?.data) {
      setCurrent(mess.data?.data)
    }

  }

  const handleResponselist = (mess) => {
    if (mess.data?.data) {
      setAllListed(mess.data?.data)
    }
  }

  const showbalance = (mess) => {
    if (mess.data?.data) {
      setbalance(mess.data?.data)
    }
    console.log(balance);

  }

  const showPerformance = (mess) => {
    if (mess.data?.data) {
      setPerformance(mess.data?.data?.counts)
    }
    console.log(mess.data?.data?.counts);
  }

  useEffect(() => {
    listing(handleResponselist, spaceToken)
    getSpace(handleResponse, spaceToken)
    bookCategories(showPerformance, spaceToken)
    currentBalance(showbalance, spaceToken)
  }, [])
  return (
    <div className='Hostdashboardbody'>
      <main className='Hostdashboardbodymain'>
        <div className='Hostdashboardbodycontainer1'>
          <h3 className='Hostdashboardbodycontainer1h3'>Manage Bookings</h3>
          <div className='Hostdashboardbodycontainer1wrap'>
            {
              Object.entries(performance).map(([key, value]) => (

                <article className='Hostdashboardbodycontainer1art' key={key} style={{
                  borderTop: `4px solid ${key === "upcoming"
                    ? "#AFFDA6"
                    : key === "active"
                      ? "#B2F2FF"
                      : "#FFDCDC"}`
                }}>
                  <h1 className='Hostdashboardbodycontainer1arth1'>{value}</h1>
                  <h3 className='Hostdashboardbodycontainer1arth3'>{key === "upcoming" ? "Upcoming bookings" : key === "active" ? "Active bookings" : "Completed stays"}</h3>
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
                <h1 className='Hostdashboardbodycontainer2mainart2divh1'>NGN {balance.toLocaleString()}</h1>
                <p className='Hostdashboardbodycontainer2mainart2divp'>Current Balance</p>
                <button className='Hostdashboardbodycontainer2mainart2divbut'>Withdraw</button>
              </div>
              <div className='Hostdashboardbodycontainer2mainart2div'>
                <h3 className='Hostdashboardbodycontainer2mainart2divh3'>{current} Spaces</h3>
                <p className='Hostdashboardbodycontainer2mainart2divp'>Total Spaces Currently Live</p>
                <button className='Hostdashboardbodycontainer2mainart2divbut' onClick={() => navigate("/listspace")}>Add Space</button>
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
              allListed.slice(0, 3).map((i, index) => (
                <article className='Managelistmainart2mainwrap' key={index}>
                  <div className='Managelistmainart2maindiv'>
                    <span className='Managelistmainart2maindivspan1'>
                      {
                        i.images && i.images.length > 0 && (
                          <img src={i.images[0].imageUrl} alt="" className='Managelistmainart2maindivspan1img' />
                        )
                      }
                    </span>
                    <span className='Managelistmainart2maindivspan2'>
                      <p>{i.name}</p>
                      <p>Cowork</p>
                    </span>
                  </div>
                  <div className='Managelistmainart2maindiv1'>{i.bookingCount} users</div>
                  <div className='Managelistmainart2maindiv2'>
                    <p>{`${i.createdAt?.slice(0, 5)}${months[Number(i.createdAt?.slice(5, 7)) - 1]}${i.createdAt?.slice(7, 10)}`}</p>
                    <p className='Managelistmainart2maindiv2p'>{i.daysAgo}</p>
                  </div>
                  <div className='Managelistmainart2maindiv1'>{i.capacity} desks</div>
                  <div className='Managelistmainart2maindiv1'>
                    <span className='Managelistmainart2maindiv1spanXX'
                      style={{
                        backgroundColor: i.listingStatus === 'pending' ? '#FEFAEE' : i.listingStatus === 'active' ? '#E9F7EF' : '#FFEAEB',
                        color: i.listingStatus === 'pending' ? '#F2CB53' : i.listingStatus === 'active' ? '#27AE60' : '#EB5757'
                      }}
                    >

                      {i.listingStatus}
                    </span>
                  </div>
                  <div className='Managelistmainart2maindiv1'>
                    <button className='Managelistmainart2maindiv1but'>Request edit</button>
                  </div>
                </article>
              ))
            }
            <div className='Managelistmainart2mainview' onClick={() => navigate("/dashboardLayout/managelist")}>
              View more
            </div>
          </main>
        </article>

        <div className='Hostdashboardbodycontainer1X1'>
          <div className='Hostdashboardbodycontainer1XX'>
            <h3 className='Hostdashboardbodycontainer1h3'>Manage Bookings</h3>
            <div className='Hostdashboardbodycontainer1wrap'>
            {
              Object.entries(performance).map(([key, value]) => (

                <article className='Hostdashboardbodycontainer1art' key={key} style={{
                  borderTop: `4px solid ${key === "upcoming"
                    ? "#AFFDA6"
                    : key === "active"
                      ? "#B2F2FF"
                      : "#FFDCDC"}`
                }}>
                  <h1 className='Hostdashboardbodycontainer1arth1'>{value}</h1>
                  <h3 className='Hostdashboardbodycontainer1arth3'>{key === "upcoming" ? "Upcoming bookings" : key === "active" ? "Active bookings" : "Completed stays"}</h3>
                </article>

              ))
            }
            </div>
          </div>

          <h3 className='Hostdashboardbodycontainer2h'>Performance Overview</h3>
          <div className='performance-chart'>
            <h3>Feb</h3>
          </div>
        </div>



      </main>
    </div>
  )
}

export default Hostdashboard