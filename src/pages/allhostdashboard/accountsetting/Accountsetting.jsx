import React, { useState } from 'react'
import './accountsetting.css'
import { IoIosArrowDown } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { TiLocation } from "react-icons/ti";
import { MdLocalPhone } from "react-icons/md";
import { RiSimCard2Fill } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa6";

const Accountsetting = () => {
  const [image, setImage] = useState(null)

  const handleimage = (e) => {
    const file = e.target.files[0]

    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }
  return (
    <div className='Accountsettingbody'>
      <main className='Accountsettinmain'>
        <div className='Accountsettingcontainer1'>
          <h3 className='Accountsettingcontainer1p'>Personal Details</h3>
          <div className='Accountsettingcontainer1span'>
            <input type="file"
              id='isxx'
              accept='image/*'
              hidden
              onChange={handleimage}
            />
            <label htmlFor="isxx" className='Accountsettingcontainer1spanlabal'>
              {
                image ? (
                  <img src={image} className='Accountsettingcontainer1spanimg' />
                ) : (
                  <FaCircleUser className='Accountsettingcontainer1spanicon' />
                )
              }
            </label>
          </div>
        </div>
        <div className='Accountsettingcontainer2'>
          <input type="text" className='Accountsettingcontainer2input' 
           value= "Ismail Ola"
          />
          <span className='Accountsettingcontainer2input'>
            <MdLocalPhone className='Accountsettingcontainer2inputicon'/>
            <input type="text" 
           placeholder='Mobile Number'
           className='Accountsettingcontainer2inputinX'
          
            />

          </span>
          <span className='Accountsettingcontainer2input'>
            <TiLocation className='Accountsettingcontainer2inputicon'/> 
          <input type="text" placeholder='Residential Address' 
          className='Accountsettingcontainer2inputin'
          />
          </span>
        </div>
        <div className='Accountsettingcontainer3'>
          <div className='Accountsettingcontainer3div'>
          Means of Identification
          <span className='Accountsettingcontainer3divspan'>National Identity Number (NIN)
              <IoIosArrowDown className='Accountsettingcontainer3divicon'/></span>
          </div>
          <input type="text" className='Accountsettingcontainer3input' 
          value={"899023451678"}
          />
          <span className='Accountsettingcontainer3input'>
            <RiSimCard2Fill className='Accountsettingcontainer3inputicon'/>
            <input type="text" className='Accountsettingcontainer3inputin'/>
          </span>
          <div className='Accountsettingcontainer3but'>
          <button className='Accountsettingcontainer3butx'>Update</button>
          </div>
        </div>
        <div className='Accountsettingcontainer3'>
          <h3 className='Accountsettingcontainer3h3'>Host Details</h3>
          <span className='Accountsettingcontainer3input'>
            <TbMailFilled className='Accountsettingcontainer3inputicon'/>
          <input type="text" className='Accountsettingcontainer3inputin' 
          value={"Get Money Nigeria Limited"}
          />
          </span>
          <span className='Accountsettingcontainer3input'>
            <TiLocation  className='Accountsettingcontainer3inputicon'/>
          <input type="text" className='Accountsettingcontainer3inputin' 
          value={"15, Oyerokun Surulere, Lagos"}
          />
          </span>
          <div className='Accountsettingcontainer3but'>
          <button className='Accountsettingcontainer3butx'>Update</button>
          </div>
        </div>
        <div className='Accountsettingcontainer3'>
          <h3 className='Accountsettingcontainer3h3'>Bank Account Details</h3>
          <span className='Accountsettingcontainer3input'>
            <FaMoneyCheck  className='Accountsettingcontainer3inputicon'/>
          <input type="text"  className='Accountsettingcontainer3inputin'
          value={"Bank Name"}
          />
          </span>
          <span className='Accountsettingcontainer3input'>
          <FaMoneyCheck  className='Accountsettingcontainer3inputicon'/>
          <input type="text"  className='Accountsettingcontainer3inputin' 
          value={"Bank Account Number"}
          />
          </span>
          <span className='Accountsettingcontainer3input'>
          <FaMoneyCheck  className='Accountsettingcontainer3inputicon'/>
          <input type="text"  className='Accountsettingcontainer3inputin' 
          value={"Bank Account Name"}
          />
          </span>
          <div className='Accountsettingcontainer3but'>
          <button className='Accountsettingcontainer3butx'>Update</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Accountsetting
