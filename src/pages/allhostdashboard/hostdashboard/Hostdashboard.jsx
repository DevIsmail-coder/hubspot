import React, { useEffect, useState } from 'react';
import './hostdashboard.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiUserCircle } from "react-icons/hi";
import { bookCategories, currentBalance, getSpace, listing, requestPayout } from '../../Hubspotapi'
import toast from 'react-hot-toast';
import dayjs from 'dayjs';


const Hostdashboard = () => {
  const navigate = useNavigate()
  const [performance, setPerformance] = useState({})
  const [balance, setbalance] = useState(0.00)
  const [allListed, setAllListed] = useState([])
  const [current, setCurrent] = useState(0)
  const [payoutResponse, setPayoutResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const hostShowToken = useSelector((state) => state.hubspot.hostToken);
  const spaceToken = hostShowToken.hostToken
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const handleResponse = (mess) => {
    if (mess.data?.data) {
      setCurrent(mess.data?.data);
    }
  };

  const handleResponselist = (mess) => {
    if (mess.data?.data) {
      setAllListed(mess.data?.data);
    }
  };

  const handlePayoutResponse = (response) => {
    if (response.res) {
      setPayoutResponse({
        success: true,
        message: response.res.data.message,
        reference: response.res.data.reference,
        amount: response.res.data.amount
      });
      toast.success(`Payout request initiated successfully. Reference: ${response.res.data.reference}`);
    } else if (response.err) {
      const errorMessage = response.err.response?.data?.message || 'Error processing payout request';
      setPayoutResponse({
        success: false,
        message: errorMessage
      });
      toast.error(`Payout request failed: ${errorMessage}`);
    }
  }

  const initiatePayoutRequest = () => {
    requestPayout(setIsLoading, handlePayoutResponse, spaceToken);
  }
  

  const showbalance = (mess) => {
    if (mess.data?.data) {
      setbalance(mess.data?.data);
    }
  };

  const showPerformance = (mess) => {
    if (mess.data?.data) {
      setPerformance(mess.data?.data?.counts);
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    listing(handleResponselist, spaceToken);
    getSpace(handleResponse, spaceToken);
    bookCategories(showPerformance, spaceToken);
    currentBalance(showbalance, spaceToken);
  }, []);

  // Desktop View Component
  const DesktopView = () => (
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
            {/* Chart area for desktop */}
          </article>

          <article className='Hostdashboardbodycontainer2mainart2'>
            <div className='Hostdashboardbodycontainer2mainart2div'>
              <h1 className='Hostdashboardbodycontainer2mainart2divh1'>NGN {balance.toLocaleString()}</h1>
              <p className='Hostdashboardbodycontainer2mainart2divp'>Current Balance</p>
              <button className='Hostdashboardbodycontainer2mainart2divbut' 
                onClick={initiatePayoutRequest}
                disabled={isLoading}
              >{isLoading ? 'Processing...' : 'Withdraw'}</button>
            </div>
            <div className='Hostdashboardbodycontainer2mainart2div'>
              <h3 className='Hostdashboardbodycontainer2mainart2divh3'>{current} Spaces</h3>
              <p className='Hostdashboardbodycontainer2mainart2divp'>Total Spaces Currently Live</p>
              <button className='Hostdashboardbodycontainer2mainart2divbut' onClick={() => navigate("/listspace")}>Add Space</button>
            </div>
          </article>
        </main>
      </div>

      {payoutResponse && (
          <div className={`payout-notification ${payoutResponse.success ? 'success' : 'error'}`}>
            <p>{payoutResponse.message}</p>
            {payoutResponse.reference && <p>Reference: {payoutResponse.reference}</p>}
          </div>
        )}

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
                  <p>{dayjs(i.createdAt).format('DD MMM YYYY')}</p>
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
    </main>
  );

  // Mobile View Component based on the image
  const MobileView = () => (
    <main className='Hostdashboardbodymain'>
      {/* Balance and Spaces Section */}
      <div className='Hostdashboardbodycontainer2'>
        <main className='Hostdashboardbodycontainer2main'>
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

      {/* Manage Bookings Section */}
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

        {/* Performance Overview Section */}
        <h3 className='Hostdashboardbodycontainer2h'>Performance Overview</h3>
        <div className='performance-chart'>
          {/* <h3>Feb</h3> */}
          <div style={{ position: 'relative', width: '140px', height: '140px' }}>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              fontSize: '24px',
              fontWeight: 'bold' 
            }}>Feb</div>
          </div>
          <div style={{ marginTop: '20px', textAlign: 'left', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#4CAF50', marginRight: '8px' }}></span>
              <span>30 confirmed bookings</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#2196F3', marginRight: '8px' }}></span>
              <span>500 listing views</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFC107', marginRight: '8px' }}></span>
              <span>12% conversion rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Listed Spaces */}
      <article className='Managelistmainart2'>
      <div className="Managelistmainart2main1">
          {allListed.map((space, index) => (
            <div className="mobile-listing-card1" key={index}>
              <div className="mobile-space-header">
                <div className="space-title">Space</div>
                <div className="space-info">
                  <div className="space-image">
                    {space.images && space.images.length > 0 && (
                      <img src={space.images[0]?.imageUrl} alt="" />
                    )}
                  </div>
                  <div className="space-details">
                    <p>{space.name}</p>
                    <p>Cowork</p>
                  </div>
                </div>
              </div>
              
              <div className="mobile-booking-row">
                <div className="booking-label">Bookings</div>
                <div className="booking-value">{space.bookingCount} Bookings</div>
              </div>
              
              <div className="mobile-date-row">
                <div className="date-label">Date Posted</div>
                <div className="date-details">
                  <p>{`${space.createdAt?.slice(0,5)}${months[Number(space.createdAt?.slice(5,7))-1]}${space.createdAt?.slice(7,10)}`}</p>
                  <p className="days-ago">{space.daysAgo}</p>
                </div>
              </div>
              
              <div className="mobile-space-row">
                <div className="space-label">Open Space</div>
                <div className="space-value">{space.capacity} {space.capacity === 1 ? 'Studio' : 'Desks'}</div>
              </div>
              
              <div className="mobile-status-row">
                <div className="status-label">Status</div>
                <div className="status-value">
                  <span className={`status-badge ${space.listingStatus}`}>
                    {space.listingStatus}
                  </span>
                </div>
              </div>
              
              <div className="mobile-action-row">
                <button className="edit-button">Request edit</button>
              </div>
            </div>
          ))}
        </div>

        <div className='Managelistmainart2mainview' onClick={() => navigate("/dashboardLayout/managelist")}>
            View more
          </div>
      </article>
    </main>
  );

  return (
    <div className='Hostdashboardbody'>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default Hostdashboard;