import React, { useState } from 'react'
import './listingspace.css'
import { useNavigate } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { TfiGallery } from "react-icons/tfi";

const Listingspace = () => {
  const navigate = useNavigate()
  const [listData, setListData] = useState({
    name: "",
    overview: "",
    amenities: [

    ],
    pricePerDay: "",
    pricePerHour: "",
    capacity: "",
    availability: "",
    spaceType: "",
    location: "",
    spaceAdress: "",
    images: [

    ]
  })


  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];


  return (
    <div className='Listingspacebody'>
      <div className='Listingspaceheader'>
        <div className='Listingspacelogo'>
          <img src="/hubspot-logo.png" alt="HubSpot" />
        </div>
        <div className='Listingspacedashboard' onClick={() => navigate("/dashboardLayout/hostdashboard")}>
          <p>Go back to Dashboard</p>
          <div className='Listingspaceprofile'>
            <div className='Listingspaceprofileicon'></div>
          </div>
        </div>
      </div>

      <form className='Listingspacemain'>
        <div className='Listingspaceimages'>
          <div className='Listingspacemainimage'>
            <div className='Listingspaceimageplaceholder'>
              <input type="text" 
              hidden
              />
            <img src="" alt="" />
            </div>
            <div className='Listingspacemainimagein'>
              <input type="text" placeholder="Space Name" className='Listingspacemainimageininput' />
            </div>
          </div>
          <div className='Listingspacethumbnails'>
            <div className='Listingspacethumbnail'>
              <img src="" alt="" />
            </div>
            <div className='Listingspacethumbnail'>
              <img src="" alt="" />
            </div>
            <div className='Listingspacethumbnail'>
              <img src="" alt="" />
            </div>
            <div className='Listingspacethumbnail'>
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className='Listingspaceform'>
          <div className='Listingspaceleft'>
            <div className='Listingspaceformgroup'>
              <input type="text" className='Listingspaceinput' placeholder='Space Address' />
            </div>

            <div className='Listingspaceformgroup'>
              <select className='Listingspaceinputselect'>
                <option>Select ID Type</option>
              </select>
            </div>

            <div className='Listingspaceformgroup'>
              <label className='Listingspacelabel'>Space Overview</label>
              <textarea className='Listingspacetextareadd' placeholder="Write a brief space overview"></textarea>
            </div>

            <div className='Listingspaceformgroup'>
              <button className='Listingspacesubmitbtn'>Submit</button>
            </div>
          </div>

          <div className='Listingspaceright'>

            <div className="availability-container">
              <h2 className="availability-title">Space Availability</h2>
              <div className="availability-header">
                <span className="day-header">Days</span>
                <span className="time-header">Opening Hours</span>
                <span className="dash">—</span>
                <span className="time-header">Closing Hours</span>
              </div>

              {daysOfWeek.map((i, index) => (
                <div className="availability-row" key={index}>
                  <input type="checkbox" className="availability-checkbox" />
                  <span className="day-name">{i}</span>

                  <div className="time-input">
                    <FaClock className="clock-icon" />
                    <input type="time" className="time-picker" />
                  </div>

                  <span className="dash">—</span>

                  <div className="time-input">
                    <FaClock className="clock-icon" />
                    <input type="time" className="time-picker" />
                  </div>

                  <FaPlus className="icon plus-icon" />
                  <FaMinus className="icon minus-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='Listingspacebuttom'>

          <div className='Listingspaceformgroup'>
            <label className='Listingspacelabel'>Space Capacity</label>
            <div className='Listingspacecapacity'>
              <span>Maximum number of occupants:</span>
              <input type="number" className='Listingspaceinput Listingspacesmall' />
            </div>
          </div>

          <div className='Listingspaceformgroup'>
            <label className='Listingspacelabel'>Space Amenities</label>
            <div className='Listingspaceamenities'>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="wifi" />
                  <label htmlFor="wifi">Free Wifi</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="projector" />
                  <label htmlFor="projector">Projector</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="ac" />
                  <label htmlFor="ac">Air Conditioning</label>
                </div>
              </div>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="meeting" />
                  <label htmlFor="meeting">Private meeting room</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="workstation" />
                  <label htmlFor="workstation">Private workstation</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="solar" />
                  <label htmlFor="solar">Solar Power</label>
                </div>
              </div>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="parking" />
                  <label htmlFor="parking">Parking available</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="wheelchair" />
                  <label htmlFor="wheelchair">Wheelchair accessibility</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="microwave" />
                  <label htmlFor="microwave">Microwave</label>
                </div>
              </div>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="printer" />
                  <label htmlFor="printer">Printer & Scanner</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="coffee" />
                  <label htmlFor="coffee">Free Coffee</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="cctv" />
                  <label htmlFor="cctv">CCTV Surveillance</label>
                </div>
              </div>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="sound" />
                  <label htmlFor="sound">Sound Recording equipment</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input type="checkbox" id="video" />
                  <label htmlFor="video">Video Recording equipment</label>
                </div>
              </div>
            </div>
          </div>

          <div className='Listingspaceformgroup'>
            {/* <label className='Listingspacelabel'>Space Prices</label> */}
            <label className='Listingspacelabel'>Pricing</label>
            <div className='Listingspaceprices'>
              <div className='Listingspaceprice'>
                <label>Hourly Rate:</label>
                <input type="text" className='Listingspaceinput Listingspacesmall' />
              </div>
              <div className='Listingspaceprice'>
                <label>Daily Rate:</label>
                <input type="text" className='Listingspaceinput Listingspacesmall' />
              </div>
            </div>
          </div>

          <div className='Listingspaceformgroup1'>
            <button className='Listingspaceaddbtn1'>ADD SPACE</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Listingspace
