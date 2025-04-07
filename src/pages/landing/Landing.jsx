import React from 'react'
import './landing.css'
import { IoIosWifi } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { MdSolarPower } from "react-icons/md";
import { PiSecurityCameraFill } from "react-icons/pi";
import userData from '../../components/hubdata';
import Works from '../works/Works';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
   const navigate = useNavigate()
    return (
        <>
            <div className='Landingbody'>
                <div className='Landingcontainer1'>
                    <article className='Landingcontainer1XX'>
                        <main className='Landingcontainer1XXmain'>
                            <h1 className='Landingcontainer1XXh1'>Find The Perfect <span className='Landingcontainer1XXh1span'>Workspace</span> Anywhere in <span className='Landingcontainer1XXh1span'>Lagos</span></h1>
                            <p className='Landingcontainer1XXp'>Skip the long commutes and expensive offices. Discover affordable, verified
                                coworking spaces and creative hubs built for productivity and collaboration near you.</p>
                            <button className='Landingcontainer1XXcoverbut' onClick={() => navigate("/allspace")}>Find Your Space</button>
                        </main>
                    </article>
                    <article className='Landingcontainer1XXX'>
                        <div className='Landingcontainer1XXXmain'>
                            <img src='public/house.jpeg' className='Landingcontainer1XXXmainimg' />
                        </div>
                    </article>
                </div>
                <div className='Landingcontainer2'>
                    <h3 className='Landingcontainer2h1'>Discover Flexible Spaces for Work or Creativity</h3>
                    <main className='Landingcontainer2main'>
                        {
                            userData.map((i, index) => (
                                <div className='Landingcontainer2wrap' key={index}>
                                <article className='Landingcontainer2wrapart1'>
                                    <img src= {i.img} className='Landingcontainer2wrapart1img' />
                                </article>
                                <article className='Landingcontainer2wrapart2'>
                                    <h3 className='Landingcontainer2wrapart2h3'>{i.title}</h3>
                                    <p className='Landingcontainer2wrapart2hp'>{i.about}</p>
                                        <div className='Landingcontainer2iconwrap'>
                                            <IoIosWifi /> 
                                            <GiCoffeeCup />
                                            <MdSolarPower />
                                            <PiSecurityCameraFill />
                                        </div>
                                        <div className='Landingcontainer2butwrap'>
                                            <button className='Landingcontainer2butwrap1'>Space Details</button>
                                            <button className='Landingcontainer2butwrap2'>Book Now</button>
                                        </div>
                                </article>
                            </div>
                            ))
                        }
                      
                    </main>      
                </div>
                <Works />
            </div>
        </>
    )
}

export default Landing
