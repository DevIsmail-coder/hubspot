import React, { useEffect, useState } from 'react'
import './admindashboard.css'
import { FaCircleUser } from "react-icons/fa6";
import { adminApproved, getAdmin } from '../Hubspotapi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Admindashboard = () => {
  const showAdminToken = useSelector((state) => state.hubspot.adminToken);
  const isAdminToken = showAdminToken.adminToken
  const [unApproved, setUnApproved] = useState([])


  

  const handleResponse =  (res) => {
    if (res.data?.data) {
      setUnApproved(res.data?.data)
      console.log(res.data?.data);
    }
  };

  const handleApprovedRes = (res) => {
    if(res?.data?.message){
      toast.success(res?.data?.message)
      getAdmin(isAdminToken, handleResponse)
    }
  
  }

  const handleApprove = (id) => {
    adminApproved(id, isAdminToken, handleApprovedRes)

  }

  useEffect(() => {
    getAdmin(isAdminToken, handleResponse);
  }, []);


  return (
    <div className='admin-body'>
      <div className='admin-sidebar'>
        <div className='admin-logo'>
          <img src='/Frame 2382 (5).png' alt='HubSpot' />
        </div>
        <div className='admin-menu'>
          <div className='admin-menu-item active'>
            <i className='admin-icon'></i>
            <span>Admin</span>
          </div>
        </div>
        <div className='admin-logout'>
          <i className='admin-icon'></i>
          <span>Log Out</span>
        </div>
      </div>

      <div className='admin-main'>
        <div className='admin-header'>
          <div className='admin-profile'>
            <div className='admin-avatar'>
              <FaCircleUser className='admin-avataricon' />
            </div>
          </div>
        </div>

        <div className='admin-content'>
          <div className='admin-spaces-grid'>
            {
              unApproved.map((i, id) => (
                
                <div className='admin-space-card' key={id}>
                  <div className='admin-space-image'>
                    {i.images && i.images?.length > 0 && (
                      <img src={i.images[0].imageUrl}  />
                    )}
                  </div>
                  <div className='admin-space-info'>
                    <h3 className='admin-space-title'>{i.name}</h3>
                    <p className='admin-space-description'>
                      {i.overview.slice(0, 75)}....
                    </p>
                  </div>
                  <div className='admin-space-amenities'>
                    {
                      i.amenities && i.amenities.split(",").slice(0, 4).map((amenity, index) => (
                        <span key={index} className='admin-amenity-icon '>{amenity}</span>
                      ))
                    }
                  </div>
                  <div className='admin-space-actions'>
                    <button className='admin-approve-btn' onClick={()=> handleApprove(i.id)}>Approve Space</button>
                    <button className='admin-delete-btn'>Delete Space</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admindashboard