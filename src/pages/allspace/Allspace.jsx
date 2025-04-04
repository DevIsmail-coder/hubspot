import React from 'react'
import Header from '../../components/header/Header'
import './allspace.css'
import { IoIosWifi } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { MdSolarPower } from "react-icons/md";
import { PiSecurityCameraFill } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";
import { getAll } from '../../components/hubdata';
import { IoLocationOutline } from "react-icons/io5";
import Footer from '../../components/footer/Footer';

const Allspace = () => {
    return (
        <div className='Allspacebody'>
            <Header />
            <main className='Allspacemain'>
                <article className='Allspacecontainer1'></article>
                <article className='Allspacecontainer2'>
                    {
                        getAll.map((i, index) => (
                            <div className='Allspacecontainer2wrap' key={index}>
                                <div className='Allspacecontainer2wrapXX'>
                                    <img src={i.img} className='Allspacecontainer2wrapXXing' />
                                </div>
                                <div className='Allspacecontainer2wrapXXX'>
                                    <article className='Allspacecontainer2wrapXXX1'>
                                        <div className='Allspacecontainer2wrapXXX1d1'>
                                            <h3 className='Allspacecontainer2wrapXXX1d1h3'>{i.title}</h3>
                                            <span className='Allspacecontainer2wrapXXX1d1h3icon'>
                                                <IoStarSharp />
                                                <IoStarSharp />
                                                <IoStarSharp />
                                                <IoStarSharp />
                                            </span>
                                        </div>
                                        <p className='Allspacecontainer2wrapXXX1d2'>{i.about}</p>
                                        <div className='Allspacecontainer2wrapXXX1d3'>
                                            <IoIosWifi />
                                            <GiCoffeeCup />
                                            <MdSolarPower />
                                            <PiSecurityCameraFill />
                                        </div>
                                        <div className='Allspacecontainer2wrapXXX1d4'> <IoLocationOutline className='Allspacecontainer2wrapXXX1d4ii'/>  {i.location}</div>
                                    </article>
                                    <article className='Allspacecontainer2wrapXXX2'>
                                        <div className='Allspacecontainer2wrapXXX2d1'>
                                            <main className='Allspacecontainer2wrapXXX2d1main'>check in </main>
                                            <main className='Allspacecontainer2wrapXXX2d1main'>check out</main>
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
                                    </article>
                                </div>
                            </div>
                        ))
                    }
                </article>
            </main>
            <Footer />
        </div>
    )
}

export default Allspace
