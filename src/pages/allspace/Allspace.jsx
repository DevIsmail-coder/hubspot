import React, { useEffect, useState } from 'react'
import './allspace.css'
import { IoIosWifi } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { MdSolarPower } from "react-icons/md";
import { PiSecurityCameraFill } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";
import { getAll } from '../../components/hubdata';
import { IoLocationOutline } from "react-icons/io5";
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useNavigate } from 'react-router-dom';
import { getAllspace } from '../Hubspotapi';
const Allspace = () => {
    const navigate = useNavigate()
          const [allSpace, setAllSpace] = useState([])
       
       const handleResponse = (mess) => {
           if(mess.data?.data){
               setAllSpace(mess.data?.data)
           }
       }
       
       useEffect(() => {
           getAllspace(handleResponse)
       }, [])
    return (
        <div className='Allspacebody'>
            <main className='Allspacemain'>
                <article className='Allspacecontainer1'></article>
                <article className='Allspacecontainer2'>
                    {
                        allSpace.map((i, id) => (
                            <div className='Allspacecontainer2wrap' key={id}>
                                <div className='Allspacecontainer2wrapXX'>
                                    {
                                        i.images && i.images.length > 0 && (
                                            <img src={i.images[0].imageUrl} className='Allspacecontainer2wrapXXing'  onClick={() => navigate("/detailpage")}/>
                                        )
                                    }
                                </div>
                                <div className='Allspacecontainer2wrapXXX'>
                                    <article className='Allspacecontainer2wrapXXX1'>
                                        <div className='Allspacecontainer2wrapXXX1d1'>
                                            <h3 className='Allspacecontainer2wrapXXX1d1h3'>{i.name}</h3>
                                            <span className='Allspacecontainer2wrapXXX1d1h3icon'>
                                                <IoStarSharp />
                                                <IoStarSharp />
                                                <IoStarSharp />
                                                <IoStarSharp />
                                            </span>
                                        </div>
                                        <p className='Allspacecontainer2wrapXXX1d2'>{i.overview}</p>
                                        <div className='Allspacecontainer2wrapXXX1d3'>
                                            <IoIosWifi />
                                            <GiCoffeeCup />
                                            <MdSolarPower />
                                            <PiSecurityCameraFill />
                                        </div>
                                        <div className='Allspacecontainer2wrapXXX1d4'> <IoLocationOutline className='Allspacecontainer2wrapXXX1d4ii' />  {i.location}</div>
                                    </article>
                                    <article className='Allspacecontainer2wrapXXX2'>
                                        <div className='Allspacecontainer2wrapXXX2d1'>
                                            <main className='Allspacecontainer2wrapXXX2d1main'>
                                                {/* <p>check in</p> */}
                                                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DateRangePicker 
                                                    localeText={{ start: 'Check-in', end: 'check-out'}} 
                                                    className='Allspacecontainer2wrapXXX2d1maindate' 
                                                    disablePast
                                                    slotProps={{
                                                        textField: {
                                                          variant: 'outlined',
                                                          size: 'small',
                                                          sx: {
                                                            borderRadius: '4px',
                                                            backgroundColor: '',
                                                            fontSize: '10px',
                                                            border: 'hidden'
                                                          },
                                                        },
                                                      }}
                                                    />
                                                </LocalizationProvider> */}
                                            </main>
                                            {/* <main className='Allspacecontainer2wrapXXX2d1main'>check out
                                            </main> */}
                                        </div>
                                        <div className='Allspacecontainer2wrapXXX2d2'>
                                            <main className='Allspacecontainer2wrapXXX2d2main1'><p>NGN 400/Hour</p></main>
                                            <main className='Allspacecontainer2wrapXXX2d2main2'>
                                                <div>
                                                    <span className='Allspacecontainer2wrapXXX2d2main2div1'>
                                                        <p>-</p>
                                                        <p>1</p>
                                                        <p>+</p>
                                                    </span>
                                                    <span className='Allspacecontainer2wrapXXX2d2main2div2'>Add more days</span>
                                                </div>
                                                <button className='Allspacecontainer2wrapXXX2d2mainbut'>Book 1 day</button>
                                            </main>
                                        </div>

                                        <div className='Allspacecontainer2wrapXXX2d2XX'>
                                            <main className='Allspacecontainer2wrapXXX2d2main1x'>
                                                <div className='Allspacecontainer2wrapXXX2d2main1xwrap'>
                                                    <span className='Allspacecontainer2wrapXXX2d2main1xwrapdiv1'>
                                                        <p>-</p>
                                                        <p>1</p>
                                                        <p>+</p>
                                                    </span>
                                                    <span className='Allspacecontainer2wrapXXX2d2main1xwrapdiv2'>Add more days</span>
                                                </div>
                                                <p className='Allspacecontainer2wrapXXX2d2main1xwrappp'>NGN 400/Hour</p>
                                            </main>
                                            <button className='Allspacecontainer2wrapXXX2d2mainbut'>Book 1 day</button>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        ))
                    }
                </article>
            </main>
        </div>
    )
}

export default Allspace
