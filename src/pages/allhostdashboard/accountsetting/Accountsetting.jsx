import React, { useEffect, useState } from 'react'
import './accountsetting.css'
import { IoIosArrowDown } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { TiLocation } from "react-icons/ti";
import { MdLocalPhone } from "react-icons/md";
import { RiSimCard2Fill } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { hostSetting } from '../../Hubspotapi';
import { toast } from 'react-toastify';


const Accountsetting = () => {
  const hostShowData = useSelector((state) => state.hubspot.host);
    const hostShowToken = useSelector((state) => state.hubspot.hostToken);
    const spaceToken = hostShowToken.hostToken
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hostBank, setHostbank] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
    bankCode: "",
  })


  const handlebank = (e) => {
    const { name, value } = e.target;
    setHostbank({ ...hostBank, [name]: value });
  }
  


  const handleimage = (e) => {
    const file = e.target.files[0]

    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }
// console.log("host token", spaceToken);

  const handleResponse = (mess) => {
    if (mess.res?.data?.message) {
        toast.success(mess.res?.data?.message);
        setHostbank({
          bankName: "",
          accountNumber: "",
          accountName: "",
          bankCode: 0,
        })
        // navigate("/email")  
    } else if (mess.err?.response?.data?.message) {
        toast.error(mess.err.response.data?.message);
    } 

}

    const handleloading = (parameter) => {
        setLoading(parameter)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        hostSetting(hostBank, handleloading, handleResponse, spaceToken)
    }


  useEffect(() => {
    if (hostBank.bankName === "Access") {
      setHostbank(prev => ({ ...prev, bankCode: "044" }));
    } else if (hostBank.bankName === "UBA") {
      setHostbank(prev => ({ ...prev, bankCode: "033" }));
    } else if (hostBank.bankName === "GTB") {
      setHostbank(prev => ({ ...prev, bankCode: "058" }));
    } else {
      setHostbank(prev => ({ ...prev, bankCode: "" }));
    }
  }, [hostBank.bankName]);

  return (
    <div className='Accountsettingbody'>
      <form className='Accountsettinmain' onSubmit={handleSubmit}>
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
            value={hostShowData?.host?.fullName || ""}
          />
          <span className='Accountsettingcontainer2input'>
            <MdLocalPhone className='Accountsettingcontainer2inputicon' />
            <input type="text"
              placeholder='Mobile Number'
              className='Accountsettingcontainer2inputinX'

            />

          </span>
          <span className='Accountsettingcontainer2input1'>
            <TiLocation className='Accountsettingcontainer2inputicon' />
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
            value={hostShowData.host.idCardNumber || ""}
          />
          <span className='Accountsettingcontainer3input'>
            <RiSimCard2Fill className='Accountsettingcontainer3inputicon' />
            <input type="text" className='Accountsettingcontainer3inputin'
              value={hostShowData.host.meansOfIdentification || ""}
            />
          </span>
          <div className='Accountsettingcontainer3but'>
            <button className='Accountsettingcontainer3butx'>Update</button>
          </div>
        </div>
        <div className='Accountsettingcontainer3'>
          <h3 className='Accountsettingcontainer3h3'>Host Details</h3>
          <span className='Accountsettingcontainer3input'>
            <TbMailFilled className='Accountsettingcontainer3inputicon' />
            <input type="text" className='Accountsettingcontainer3inputin'
              value={"Get Money Nigeria Limited"}
            />
          </span>
          <span className='Accountsettingcontainer3input'>
            <TiLocation className='Accountsettingcontainer3inputicon' />
            <input type="text" className='Accountsettingcontainer3inputin'
              value={hostShowData.host.companyAddress || ""}
            />
          </span>
          <div className='Accountsettingcontainer3but'>
            <button className='Accountsettingcontainer3butx'>Update</button>
          </div>
        </div>
        <div className='Accountsettingcontainer3'>
          <h3 className='Accountsettingcontainer3h3'>Bank Account Details</h3>
          <span className='Accountsettingcontainer3input'>
            <FaMoneyCheck className='Accountsettingcontainer3inputicon' />
            <select type="text" className='Accountsettingcontainer3inputinX'
              value={hostBank.bankName}
              name='bankName'
              onChange={handlebank}
              placeholder='Bank Name'
            >
              <option value="">BankName</option>
              <option value="Access">Access</option>
              <option value="UBA">UBA</option>
              <option value="GTB">GTB</option>
            </select>
          </span>
          <span className='Accountsettingcontainer3input'>
            <FaMoneyCheck className='Accountsettingcontainer3inputicon' />
            <input type="text" className='Accountsettingcontainer3inputin'
              value={hostBank.accountNumber}
              name='accountNumber'
              onChange={handlebank}
              placeholder='Bank Account Number'
            />
          </span>
          <span className='Accountsettingcontainer3input'>
            <FaMoneyCheck className='Accountsettingcontainer3inputicon' />
            <input type="text" className='Accountsettingcontainer3inputin'
            onChange={handlebank}
            name='accountName'
              value={hostBank.accountName}
              placeholder='Bank Account Name'
            />
          </span>
          <div className='Accountsettingcontainer3but'>
            <button className='Accountsettingcontainer3butx' type='submit'>{loading ? "processing" : "Update"}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Accountsetting
