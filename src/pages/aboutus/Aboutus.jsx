import React from 'react'
import "./aboutus.css"
import { LuMapPinned } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineStars } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";






const Aboutus = () => {
    return (
        <div className='aboutBody'>
            <div className='aboutusHead'>
                <div className='aboutusHeadlist'>
                    <h1 className='aboutHeading'>Empowering Creators, Connecting Spaces </h1>
                    <p className='aboutDescription'> Hubspot is dedicated to connecting you with workspaces that fuel
                        <br />
                        creativity, collaboration, and growth. Our platform makes it easy for <br />
                        hosts to share thier spaces and for users to discover the perfect <br /> environment across Lagos '10 major locations, helping everyone<br />
                        work smarter, faster, and with more passion.</p>
                </div>

            </div>

            <div className='aboutMiddle'>
                <div className='aboutMiddlelist'>
                    <div className='aboutMiddlelistleft'>
                        <div className='middlehHeaderleft'>
                            <LuMapPinned size={70} color='orange' />
                            <h1 className='alpha1'> Discover Flexible Spaces </h1>
                            <p className='pdescrip1'> Whether you're a freelancer, creative, or business owner discover<br /> the ideal workspace or studio in Lagos top locations. </p>
                        </div>

                        <div className='middlehHeaderleft'>
                            <MdOutlineStars size={70} color='orange' />
                            <h1 className='alpha1'> Transparent & Reliable</h1>
                            <p className='pdescrip1'>Enjoy peace of mind with verified spaces, clear pricing <br /> and direct communication with space owners.</p>
                        </div>

                    </div>

                    <div className='aboutMiddlelistright'>
                        <div className='middlehHeaderright'>
                            <SlCalender size={70} color='orange' />
                            <h1 className='alpha1'> Hassle-Free Experience</h1>
                            <p className='pdescrip1'>Effortlessly book or manage spaces with our seamless <br /> platform, designed to save you time and effort.</p>
                        </div>

                        <div className='middlehHeaderright'>
                            <HiOutlineLightBulb size={70} color='orange' />
                            <h1 className='alpha1'> Unlock New Opportunities</h1>
                            <p className='pdescrip1'> Whether you're hosting or booking, Hubspot helps you <br />unlock growth, creativity, and business opportunites</p>
                        </div>
                    </div>



                </div>
            </div>

            <div className='aboutLastdiv'>
                <div className='aboutLastdiv1'>
                    <div className='aboutLastdivleft'>
                        <div className='aboutSmallbox1'>
                            <div className='aboutSmallbox2'>
                                <img className='smallBoximage' src="" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='aboutLastdivright'>
                        <div className='missionDiv'>
                            <h1 className='missionName'> OUR MISSION </h1>
                            <p className='missiondescript'> At Hubspot, our mission is to tranform the way<br />
                                Lagos works and creates by seamlessly connecting <br />professionals and creatives with flexible, high- <br /> quality workspaces. We empower our community <br /> with innovative, verified environments that spark <br /> collaboration, boost productivity, and unlock thier <br />
                                full potential. </p>
                        </div>

                        <div className='missionDiv'>
                            <h1 className='missionName'> OUR VISION</h1>
                            <p className='missiondescript'> We envision a future where every professional and <br /> creative in Lagos thrives in inspiring workspaces<br />
                                that drive innovation and sustainable growth.<br />
                                Hubspot aims to build a dynamic ecosystem across <br /> Lagos major locations, redefining work-life balance<br />
                                and propelling the city to new heights in global<br />  creativity and collaboration.</p>
                        </div>
                    </div>
                </div>

                <div className='meetOurTeam'>
                    <div className='teamDiv'>
                        <h1 className='teamFont'>MEET OUR TEAM</h1>
                        <div className='teampicDiv'>
                           <div className='teampicDiv1'> 
                                <div className='teamPic'>  <img className='teamImage' src="" alt="" /> </div> 
                                <span  className='nameDesignated'>David Tokode</span>
                                 <p className='nameSpecs'> Product designer</p>
                           </div>

                            <div className='teampicDiv1'> 
                                <div className='teamPic'> <img className='teamImage' src="" alt="" /></div> 
                                <span  className='nameDesignated'>Chika Odimgbe</span>
                                 <p className='nameSpecs'> Product designer</p>
                            </div>
                            <div className='teampicDiv1'>
                                 <div className='teamPic'> <img className='teamImage' src="" alt="" /></div> 
                                 <span  className='nameDesignated'>Perpetual Nwoyeocha</span>
                                 <p className='nameSpecs'> Front-End Developer</p>
                                 
                                 </div>
                        </div>

                        <div className='teampicDiv'>
                           <div className='teampicDiv1'> 
                                <div className='teamPic'> <img className='teamImage' src="" alt="" /></div> 
                                <span  className='nameDesignated'>Ismail Mohammed</span>
                                 <p className='nameSpecs'> Front-End Developer</p>
                           </div>

                            <div className='teampicDiv1'> 
                                <div className='teamPic'> <img className='teamImage' src="" alt="" /></div> 
                                <span  className='nameDesignated'>Sudais Diko</span>
                                 <p className='nameSpecs'> Front-End Developer</p>
                            </div>
                            <div className='teampicDiv1'>
                                 <div className='teamPic'> <img className='teamImage' src="" alt="" /></div> 
                                 <span  className='nameDesignated'>Chinasa Acha</span>
                                 <p className='nameSpecs'> Back-End Developer</p>
                                 
                                 </div>
                        </div>

                        <div className='teampicDiv'>
                           <div className='teampicDiv1'> 
                                <div className='teamPic'> <img className='teamImage' src="" alt="" /></div> 
                                <span className='nameDesignated'>Kelvin Oliseh</span>
                                 <p className='nameSpecs'>Back-End Developer</p>
                           </div>
                        </div>

                        
                    
                    </div>
                </div>


                <div className='lastDiv'>
                    <div className='lastdivClass'>
                        <h1 className='discoverFont'>Discover Your Ideal Workspace</h1>
                        <button className='findButton'>Find Your Space</button>
                    </div>
                </div>







            </div>










        </div>
    )
}

export default Aboutus
