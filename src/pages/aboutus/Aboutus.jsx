import React from 'react'
import './aboutus.css'
import { useNavigate } from 'react-router-dom';


const Aboutus = () => {
    const navigate = useNavigate()
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
                           <img src='/0607_Location_1 (1) (1).png' className='aboutImage'/>
                            <h1 className='alpha1'> Discover Flexible Spaces </h1>
                            <p className='pdescrip1'> Whether you're a freelancer, creative, or business owner discover<br /> the ideal workspace or studio in Lagos top locations. </p>
                        </div>

                        <div className='middlehHeaderleft'>
                        <img src='/star.png' className='aboutImage'/>
                            <h1 className='alpha1'> Transparent & Reliable</h1>
                            <p className='pdescrip1'>Enjoy peace of mind with verified spaces, clear pricing <br /> and direct communication with space owners.</p>
                        </div>

                    </div>

                    <div className='aboutMiddlelistright'>
                        <div className='middlehHeaderright'>
                        <img src='/calender.png' className='aboutImage'/>
                            <h1 className='alpha1'> Hassle-Free Experience</h1>
                            <p className='pdescrip1'>Effortlessly book or manage spaces with our seamless <br /> platform, designed to save you time and effort.</p>
                        </div>

                        <div className='middlehHeaderright'>
                        <img src='/bulb.png' className='aboutImage'/>
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
                                <img className='smallBoximage' src = "/2df4fe65e8e9efcc474458f9287773f7.jpg" alt = "" />
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
                                <div className='teamPic'>  <img className='teamImage' src = "/david.png" alt = "" /> </div> 
                                <span  className='nameDesignated'>David Tokode</span>
                                 <p className='nameSpecs'> Product designer</p>
                           </div>

                            <div className='teampicDiv1'> 
                                <div className='teamPic'> <img className='teamImage' src = "/picture (1).png" alt = "" /></div> 
                                <span  className='nameDesignated'>Chika Odimgbe</span>
                                 <p className='nameSpecs'> Product designer</p>
                            </div>
                            <div className='teampicDiv1'>
                                 <div className='teamPic'> <img className='teamImage' src = "/picture (2).png" alt = "" /></div> 
                                 <span  className='nameDesignated'>Perpetual Nwoyeocha</span>
                                 <p className='nameSpecs'> Front-End Developer</p>
                                 
                                 </div>
                        </div>

                        <div className='teampicDiv'>
                           <div className='teampicDiv1'> 
                                <div className='teamPic'> <img className='teamImage' src = "" alt = "" /></div> 
                                <span  className='nameDesignated'>Ismail Mohammed</span>
                                 <p className='nameSpecs'> Front-End Developer</p>
                           </div>

                            <div className='teampicDiv1'> 
                                <div className='teamPic'> <img className='teamImage' src = "/picture (5).png" alt = "" /></div> 
                                <span  className='nameDesignated'>Sudais Dikko</span>
                                 <p className='nameSpecs'> Front-End Developer</p>
                            </div>
                            <div className='teampicDiv1'>
                                 <div className='teamPic'> <img className='teamImage' src = "/acha.png" alt = "" /></div> 
                                 <span  className='nameDesignated'>Chinasa Acha</span>
                                 <p className='nameSpecs'> Back-End Developer</p>
                                 
                                 </div>
                        </div>

                        <div className='teampicDiv'>
                           <div className='teampicDiv1'> 
                                <div className='teamPic'> <img className='teamImage' src = "/picture (3).png" alt = "" /></div> 
                                <span className='nameDesignated'>Kelvin Oliseh</span>
                                 <p className='nameSpecs'>Back-End Developer</p>
                           </div>
                        </div>

                        
                    
                    </div>
                </div>


                <div className='lastDiv'>
                    <div className='lastdivClass'>
                        <h1 className='discoverFont'>Discover Your Ideal Workspace</h1>
                        <button className='findButton' onClick={() => navigate("/allspace")}>Find Your Space</button>
                    </div>
                </div>







            </div>










        </div>
    )
}

export default Aboutus
