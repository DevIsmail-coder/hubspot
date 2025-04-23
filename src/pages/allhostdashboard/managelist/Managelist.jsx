import React, { useEffect, useState } from 'react';
import './managelist.css';
import { useSelector } from 'react-redux';
import { getSpace, listing } from '../../Hubspotapi';
import { useNavigate } from 'react-router-dom';

const Managelist = () => {
  const navigate = useNavigate();
  const [allListed, setAllListed] = useState([]);
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const hostShowToken = useSelector((state) => state.hubspot.hostToken);
  const spaceToken = hostShowToken.hostToken;

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const handleResponse = (mess) => {
    if(mess.data?.data){
      setCurrent(mess.data?.data);
    }
  };

  const handleResponselist = (mess) => {
    if(mess.data?.data){
      setAllListed(mess.data?.data);
    }
  };

  useEffect(() => {
    listing(handleResponselist, spaceToken);
    getSpace(handleResponse, spaceToken);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [spaceToken]);

  // Mobile view component
  const MobileView = () => {
    return (
      <div className="mobile-manage-list">
        
        <div className="mobile-summary-card">
          <h3>{current} Spaces</h3>
          <p>Total Spaces Currently Live</p>
          <button onClick={() => navigate("/listspace")}>Add Space</button>
        </div>
        
        <div className="mobile-listings">
          {allListed.map((space, index) => (
            <div className="mobile-listing-card" key={index}>
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
      </div>
    );
  };

  // Render based on window width
  return (
    <>
      {/* Desktop View - Only visible above 800px */}
      <div className="Managelistbody" style={{ display: windowWidth > 800 ? 'block' : 'none' }}>
        <main className='Managelistmain'>
          <article className='Managelistmainart1'>
            <h3 className='Managelistmainart1h3'>{current} Spaces</h3>
            <p className='Managelistmainart1p'>Total Spaces Currently Live</p>
            <button className='Managelistmainart1but' onClick={() => navigate("/listspace")}>Add Space</button>
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
              {allListed.map((i, index) => (
                <article className='Managelistmainart2mainwrap' key={index}>
                  <div className='Managelistmainart2maindiv'>
                    <span className='Managelistmainart2maindivspan1'>
                      {i.images && i.images.length > 0 && (
                        <img src={i.images[0]?.imageUrl} alt="" className='Managelistmainart2maindivspan1img' key={index}/>
                      )}
                    </span>
                    <span className='Managelistmainart2maindivspan2'>
                      <p>{i.name}</p>
                      <p>Cowork</p>
                    </span>
                  </div>
                  <div className='Managelistmainart2maindiv1'>{i.bookingCount} users</div>
                  <div className='Managelistmainart2maindiv2'>
                    <p>{`${i.createdAt?.slice(0,5)}${months[Number(i.createdAt?.slice(5,7))-1]}${i.createdAt?.slice(7,10)}`}</p>
                    <p className='Managelistmainart2maindiv2p'>{i.daysAgo}</p>
                  </div>
                  <div className='Managelistmainart2maindiv1'>{i.capacity} Desks</div>
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
              ))}
            </main>
          </article>
        </main>
      </div>

      {/* Mobile View - Only visible below 800px */}
      {windowWidth <= 800 && <MobileView />}
    </>
  );
};

export default Managelist;