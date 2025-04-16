import React, { useState } from 'react'
import './listingspace.css'
import { useNavigate } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { TfiGallery } from "react-icons/tfi";
import { createSpace } from '../Hubspotapi';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const Listingspace = () => {
  const navigate = useNavigate()
  const [imageFiles, setImageFiles] = useState({});
    const [loading, setLoading] = useState(false)
    const hostShowToken = useSelector((state) => state.hubspot.hostToken);
    const spaceToken = hostShowToken.hostToken
  const [listData, setListData] = useState({
    name: "",
    overview: "",
    amenities: [],
    pricePerDay: "",
    pricePerHour: "",
    capacity: "",
    availability: {
      "Mon": {
        "opening": "",
        "closing": ""
      },
      "Tue": {
        "opening": "",
        "closing": ""
      },
      "Wed": {
        "opening": "",
        "closing": ""
      },
      "Thu": {
        "opening": "",
        "closing": ""
      },
      "Fri": {
        "opening": "",
        "closing": ""
      },
      "Sat": {
        "opening": "",
        "closing": ""
      },
      "Sun": {
        "opening": "",
        "closing": ""
      }
    },
    spaceType: "",
    location: "",
    spaceAdress: "",
    images: [
      {
        "imageUrl1": "",
        "imageUrl2": "",
        "imageUrl3": "",
        "imageUrl4": "",
        "imageUrl5": "",
      },
    ]
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleAvailabilityChange = (day, field, value) => {
    setListData(prevData => ({
      ...prevData,
      availability: {
        ...prevData.availability,
        [day]: {
          ...prevData.availability[day],
          [field]: value
        }
      }
    }));
  };

  // Handler for amenities checkboxes
  const handleAmenityChange = (e) => {
    const amenity = e.target.id;
    const isChecked = e.target.checked;
    
    setListData(prevData => {
      if (isChecked) {
        return {
          ...prevData,
          amenities: [...prevData.amenities, amenity]
        };
      } else {
        return {
          ...prevData,
          amenities: prevData.amenities.filter(item => item !== amenity)
        };
      }
    });
  };


  const handleImage = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
  
      // Save actual file for submission
      setImageFiles(prev => ({
        ...prev,
        [name]: file
      }));
  
      // Preview file
      const fileURL = URL.createObjectURL(file);
      setListData(prevData => ({
        ...prevData,
        images: [{
          ...prevData.images[0],
          [name]: fileURL
        }]
      }));
    }
  };
  

  const handleResponse = (mess) => {
    console.log(mess.res);
    console.log(mess.err);
    
    if (mess.res?.data?.message) {
        toast.success(mess.res?.data?.message);
        setListData({
          name: "",
          overview: "",
          amenities: [],
          pricePerDay: "",
          pricePerHour: "",
          capacity: "",
          availability: {
            "Mon": {
              "opening": "",
              "closing": ""
            },
            "Tue": {
              "opening": "",
              "closing": ""
            },
            "Wed": {
              "opening": "",
              "closing": ""
            },
            "Thu": {
              "opening": "",
              "closing": ""
            },
            "Fri": {
              "opening": "",
              "closing": ""
            },
            "Sat": {
              "opening": "",
              "closing": ""
            },
            "Sun": {
              "opening": "",
              "closing": ""
            }
          },
          spaceType: "",
          location: "",
          spaceAdress: "",
          images: [
            {
              "imageUrl1": "",
              "imageUrl2": "",
              "imageUrl3": "",
              "imageUrl4": "",
              "imageUrl5": "",
            },
          ]
        })
    } else if (mess.err?.response?.data?.message) {
        toast.error(mess.err?.response?.data?.message);
        console.log(mess.err?.response?.data?.message);
        
    } else {
        toast.error("An error occurred. Please try again.");
    }
}
  
const handleloading = (parameter) => {
  setLoading(parameter)
}

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    formData.append('name', listData.name);
    formData.append('overview', listData.overview);
    formData.append('spaceType', listData.spaceType);
    formData.append('location', listData.location);
    formData.append('spaceAdress', listData.spaceAdress);
    formData.append('pricePerDay', listData.pricePerDay);
    formData.append('pricePerHour', listData.pricePerHour);
    formData.append('capacity', listData.capacity);
    formData.append('availability', JSON.stringify(listData.availability));
    formData.append('amenities', JSON.stringify(listData.amenities));

    
    Object.entries(imageFiles).forEach(([key, file]) => {
      formData.append('images', file);
    });
  
    await createSpace(formData, spaceToken, handleResponse, handleloading);
  };
  

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

      <form className='Listingspacemain' onSubmit={handleSubmit}>
        <div className='Listingspaceimages'>
          <div className='Listingspacemainimage'>
            <label htmlFor='is' className='Listingspaceimageplaceholder'>
              <input type="file" hidden  
              file={listData.images.imageUrl1}
              name='imageUrl1'
              onChange={handleImage}
              id='is'
              accept="image/*"
              />
              <img src={listData.images[0].imageUrl1 || ""} alt="" className='Listingspacethumbnailimg'/>
            </label>
            <div className='Listingspacemainimagein'>
              <input 
                type="text" 
                placeholder="Space Name" 
                className='Listingspacemainimageininput'
                name="name"
                value={listData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='Listingspacethumbnails'>
            <label htmlFor='ism' className='Listingspacethumbnail'>
            <input type="file" hidden  
              file={listData.images.imageUrl2}
              name='imageUrl2'
              onChange={handleImage}
              accept="image/*"
              id='ism'
              />
              <img src={listData.images[0].imageUrl2 || ""} alt="" className='Listingspacethumbnailimg'/>
            </label>
            <label htmlFor='isma' className='Listingspacethumbnail'>
            <input type="file" hidden  
              file={listData.images.imageUrl3}
              name='imageUrl3'
              onChange={handleImage}
              accept="image/*"
              id='isma'
              />
              <img src={listData.images[0].imageUrl3 || ""} alt="" className='Listingspacethumbnailimg'/>
            </label>
            <label htmlFor='ismail' className='Listingspacethumbnail'>
            <input type="file" hidden  
              file={listData.images.imageUrl4}
               onChange={handleImage}
              accept="image/*"
              name='imageUrl4'
              id='ismail'
              />
              <img src={listData.images[0].imageUrl4 || ""} alt=""  className='Listingspacethumbnailimg'/>
            </label>
            <label htmlFor='ismailx' className='Listingspacethumbnail'>
            <input type="file" hidden  
              file={listData.images.imageUrl5}
              onChange={handleImage}
              accept="image/*"
              name='imageUrl5'
              id='ismailx'
              />
              <img src={listData.images[0].imageUrl5 || ""} alt=""  className='Listingspacethumbnailimg'/>
            </label>
          </div>
        </div>

        <div className='Listingspaceform'>
          <div className='Listingspaceleft'>
            <div className='Listingspaceformgroup'>
              <input 
                type="text" 
                className='Listingspaceinput' 
                placeholder='Space Address' 
                name="spaceAdress"
                value={listData.spaceAdress}
                onChange={handleInputChange}
              />
            </div>

            <div className='Listingspaceformgroup'>
              <select 
                className='Listingspaceinputselect'
                name="spaceType"
                value={listData.spaceType}
                onChange={handleInputChange}
              >
                <option value="">Select ID Type</option>
                <option value="office">Office Space</option>
                <option value="meeting">Meeting Room</option>
                <option value="event">Event Space</option>
                <option value="studio">Studio Space</option>
              </select>
            </div>

            <div className='Listingspaceformgroup'>
              <label className='Listingspacelabel'>Space Overview</label>
              <textarea 
                className='Listingspacetextareadd' 
                placeholder="Write a brief space overview"
                name="overview"
                value={listData.overview}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className='Listingspaceformgroup'>
              <input 
                name="location"
                placeholder='location'
                value={listData.location}
                onChange={handleInputChange}
              />
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

              {daysOfWeek.map((day, index) => (
                <div className="availability-row" key={index}>
                  <input 
                    type="checkbox" 
                    className="availability-checkbox"
                    id={`checkbox-${day}`}
                    checked={listData.availability[day] && 
                             (listData.availability[day].opening || listData.availability[day].closing)}
                    onChange={(e) => {
                      if (!e.target.checked) {
                        handleAvailabilityChange(day, "opening", "");
                        handleAvailabilityChange(day, "closing", "");
                      }
                    }}
                  />
                  <span className="day-name">{day}</span>

                  <div className="time-input">
                    <FaClock className="clock-icon" />
                    <input 
                      type="time" 
                      className="time-picker"
                      value={listData.availability[day]?.opening || ""}
                      onChange={(e) => handleAvailabilityChange(day, "opening", e.target.value)}
                    />
                  </div>

                  <span className="dash">—</span>

                  <div className="time-input">
                    <FaClock className="clock-icon" />
                    <input 
                      type="time" 
                      className="time-picker"
                      value={listData.availability[day]?.closing || ""}
                      onChange={(e) => handleAvailabilityChange(day, "closing", e.target.value)}
                    />
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
              <input 
                type="number" 
                className='Listingspaceinput Listingspacesmall'
                name="capacity"
                value={listData.capacity}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='Listingspaceformgroup'>
            <label className='Listingspacelabel'>Space Amenities</label>
            <div className='Listingspaceamenities'>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="wifi"
                    checked={listData.amenities.includes("wifi")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="wifi">Free Wifi</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="projector"
                    checked={listData.amenities.includes("projector")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="projector">Projector</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="ac"
                    checked={listData.amenities.includes("ac")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="ac">Air Conditioning</label>
                </div>
              </div>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="meeting"
                    checked={listData.amenities.includes("meeting")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="meeting">Private meeting room</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="workstation"
                    checked={listData.amenities.includes("workstation")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="workstation">Private workstation</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="solar"
                    checked={listData.amenities.includes("solar")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="solar">Solar Power</label>
                </div>
              </div>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="parking"
                    checked={listData.amenities.includes("parking")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="parking">Parking available</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="wheelchair"
                    checked={listData.amenities.includes("wheelchair")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="wheelchair">Wheelchair accessibility</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="microwave"
                    checked={listData.amenities.includes("microwave")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="microwave">Microwave</label>
                </div>
              </div>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="printer"
                    checked={listData.amenities.includes("printer")}
                    onChange={handleAmenityChange} 
                  />
                  <label htmlFor="printer">Printer & Scanner</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="coffee"
                    checked={listData.amenities.includes("coffee")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="coffee">Free Coffee</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="cctv"
                    checked={listData.amenities.includes("cctv")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="cctv">CCTV Surveillance</label>
                </div>
              </div>
              <div className='Listingspaceamenitiesrow'>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="sound"
                    checked={listData.amenities.includes("sound")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="sound">Sound Recording equipment</label>
                </div>
                <div className='Listingspaceamenity'>
                  <input 
                    type="checkbox" 
                    id="video"
                    checked={listData.amenities.includes("video")}
                    onChange={handleAmenityChange}
                  />
                  <label htmlFor="video">Video Recording equipment</label>
                </div>
              </div>
            </div>
          </div>

          <div className='Listingspaceformgroup'>
            <label className='Listingspacelabel'>Pricing</label>
            <div className='Listingspaceprices'>
              <div className='Listingspaceprice'>
                <label>Hourly Rate:</label>
                <input 
                  type="text" 
                  className='Listingspaceinput Listingspacesmall'
                  name="pricePerHour"
                  value={listData.pricePerHour}
                  onChange={handleInputChange}
                />
              </div>
              <div className='Listingspaceprice'>
                <label>Daily Rate:</label>
                <input 
                  type="text" 
                  className='Listingspaceinput Listingspacesmall'
                  name="pricePerDay"
                  value={listData.pricePerDay}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className='Listingspaceformgroup1'>
            <button type="submit" className='Listingspaceaddbtn1'>{loading ? "Loading..." : "ADD SPACE"}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Listingspace