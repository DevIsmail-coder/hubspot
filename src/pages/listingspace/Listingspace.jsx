import React, { useState } from 'react'
import './listingspace.css'
import { useNavigate } from 'react-router-dom';

const Listingspace = () => {
    const navigate = useNavigate()
  const [availability, setAvailability] = useState({
    Sun: { checked: false, openingHours: "00:00", closingHours: "00:00" },
    Mon: { checked: false, openingHours: "00:00", closingHours: "00:00" },
    Tue: { checked: false, openingHours: "00:00", closingHours: "00:00" },
    Wed: { checked: false, openingHours: "00:00", closingHours: "00:00" },
    Thur: { checked: false, openingHours: "00:00", closingHours: "00:00" },
    Fri: { checked: false, openingHours: "00:00", closingHours: "00:00" },
    Sat: { checked: false, openingHours: "00:00", closingHours: "00:00" }
  });

  const handleAvailabilityChange = (day, field, value) => {
    setAvailability(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

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

            </div>
            <div className='Listingspacemainimagein'>
              <input type="text" placeholder="Space Name" className='Listingspacemainimageininput' />
            </div>
          </div>
          <div className='Listingspacethumbnails'>
            <div className='Listingspacethumbnail'>

            </div>
            <div className='Listingspacethumbnail'>

            </div>
            <div className='Listingspacethumbnail'>

            </div>
            <div className='Listingspacethumbnail'>

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
{/* 
          <div className='Listingspaceright'>
            <div className='Listingspaceformgroup'>
              <label className='Listingspacelabel'>Space Availability</label>
              <div className='Listingspaceavailability'>
                <div className='Listingspaceavailabilityheader'>
                  <div className='Listingspacedays'>Days</div>
                  <div className='Listingspacehours'>Opening Hours</div>
                  <div className='Listingspacehours'>Closing Hours</div>
                  <div className='Listingspaceactions'></div>
                </div>
                
                {Object.entries(availability).map(([day, data]) => (
                  <div key={day} className='Listingspaceavailabilityrow'>
                    <div className='Listingspacedays'>
                      <input 
                        type="checkbox" 
                        id={day} 
                        checked={data.checked}
                        onChange={(e) => handleAvailabilityChange(day, 'checked', e.target.checked)}
                      />
                      <label htmlFor={day}>{day}</label>
                    </div>
                    <div className='Listingspacehours'>
                      <input 
                        type="time" 
                        value={data.openingHours}
                        onChange={(e) => handleAvailabilityChange(day, 'openingHours', e.target.value)}
                      />
                    </div>
                    <div className='Listingspacehours'>
                      <input 
                        type="time" 
                        value={data.closingHours}
                        onChange={(e) => handleAvailabilityChange(day, 'closingHours', e.target.value)}
                      />
                    </div>
                    <div className='Listingspaceactions'>
                      <button type="button" className='Listingspaceaddhours'>+</button>
                      <button type="button" className='Listingspaceremovehours'>-</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
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
