import React from 'react'
import './hostpage.css'
import { RiCheckboxCircleLine } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { PiNumberCircleFourFill } from "react-icons/pi";
import { PiNotePencil } from "react-icons/pi";
import { BsBuildingCheck } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";

const Hostpage = () => {
  return (
    <div className='becomeBody'>
    <div className='becomeHead'>
        <div className='becomeHeadbox'>
            <div className='becomeHeadbox1'>
                <h1 className='headBoxFont'>Maximize Your Space's Potential</h1>
                <p className='headBoxpara'>At Hubspot, we help coworking hubs and creative spaces unlock thier <br />
                    potential by connecting them with professionals seeking inspiring work <br />
                    environments. Showcase your space effortlessly, fill your schedule, and <br />
                    turn idle areas into thriving hubs of productivity and creativity.</p>
                <button className='headFontbutton'>List Your Space</button>
            </div>
        </div>
    </div>

    <div className='becomeMiddle'>
        <div className='becomeMiddle1'>
            <h1 className='middleHeading'>How to Become a Host on Hubspot </h1>
            <div className='middleMiddle'>
                <div className='middleMiddle1'>

                    <div className='middleMiddle1A'>
                        <div className='becomemiddleIcon'>
                            <PiNumberCircleOneFill size={35} color='navy' />

                            <PiNotePencil size={65} color='navy' />
                        </div>
                        <h3 className='becomemiddleFonts'> Sign Up & Create Your Profile</h3>
                        <p className='becomemiddlePara'> Register for an account and complete your host <br />
                            profile with your details </p>
                    </div>
                    <div className='middleMiddle1C'>
                        <div className='becomemiddleIcon'>
                            <PiNumberCircleThreeFill size={35} color='navy' />

                            <LuBadgeCheck size={65} color='navy' />
                        </div>

                        <h3 className='becomemiddleFonts'>Verify Your Space</h3>
                        <p className='becomemiddlePara'> Complete the verification process to ensure your <br />
                            space meets our quality standards</p>
                    </div>

                </div>

                <div className='middleMiddle2'>
                    <div className='middleMiddle1B'>
                        <div className='becomemiddleIcon'>
                            <PiNumberCircleTwoFill size={35} color='navy' />

                            <BsBuildingCheck size={65} color='navy' />
                        </div>
                        <h3 className='becomemiddleFonts'> List Your Space</h3>
                        <p className='becomemiddlePara'> Add your coworking or creative hub space, including <br />
                            images , a brief overview and key details.</p>
                    </div>


                    <div className='middleMiddle1D'>
                        <div className='becomemiddleIcon'>
                            <PiNumberCircleFourFill size={35} color='navy' />
                            <FaCalendarDays size={65} color='navy' />
                        </div>
                        <h3 className='becomemiddleFonts'>Manage Bookings</h3>
                        <p className='becomemiddlePara'>Receive booking requests and easily manage your <br />
                            reservations through your dashboard.</p>
                    </div>
                </div>
            </div>


        </div>

    </div>

    <div className='becomeThirdbody'>
        <div className='becomeThirdbody1'>
            <h1 className='becomeThirdbodyfont'>What Our Hosts Have to Say</h1>

            <div className='becomeThirdbodydiv'>

                <div className='becomeThirdbodydivA'>
                    <div className='becomeThirdbodydiv1'>
                        <p className='becomeThirdbodypara'>
                            "Hubspot's user-friendly platform has <br />
                            streamlined my booking process. It's a <br />game changer for busy hosts looking to <br />
                            maximize their space's potential."
                        </p>

                        <h3 className='becomeThirdbodyfontA'>Urban Collective</h3>
                        <p className='becomeThirdbodypara2'>Cynthia Afolayan</p>

                    </div> 

                    <div className='becomeThirdbodydiv2'> <img className='hostSayimage' src="" alt="" /> </div>

                </div>

                <div className='becomeThirdbodydivA'>
                    <div className='becomeThirdbodydiv1'>
                        <div className="arrow"></div>
                        <p className='becomeThirdbodypara'>
                            "Hubspot's clean intuitive design has <br />
                            brought steady inquiries to Idea Forge, <br /> letting me focus on my work rather than<br />
                            marketing."
                        </p>

                        <h3 className='becomeThirdbodyfontA'>Idea Forge</h3>
                        <p className='becomeThirdbodypara2'>Michael Okoro</p>
                    </div>
                    <div className='becomeThirdbodydiv2'> <img className='hostSayimage' src="" alt="" /></div>
                </div>

                <div className='becomeThirdbodydivA'>
                    <div className='becomeThirdbodydiv1'>
                        <div className="arrow"></div>
                        <p className='becomeThirdbodypara'>
                            "Hubspot's user-friendly platform has <br />
                            streamlined my booking process. It's a <br />game changer for busy hosts looking to <br />
                            maximize their space's potential."
                        </p>

                        <h3 className='becomeThirdbodyfontA'>Rainbow Spaces</h3>
                        <p className='becomeThirdbodypara2'>John Hancock</p>

                    </div>
                    <div className='becomeThirdbodydiv2'> <img className='hostSayimage' src="" alt="" /></div>
                </div>

            </div>

        </div>
    </div>
    <div className='becomeFourthbody'>
        <div className='becomeFourthbody1'>
            <div className='fourthbuttonDiv'>
                <button className='fourthButton'>Monthly</button>
                <button className='fourthButton'>Yearly</button>
            </div>

            <div className='becomeFourthbody1A'>
                <div className='becomeFourthbodyLeft'>
                    <div className='FourthbodyLeftdiv'>

                        <h2 className='FourthbodyLeftdivfont'>Standard Plan</h2>
                        <div className='FourthbodyLeftdivPrice'>
                            <p className='priceDiv'> <strike>N</strike>10,000</p>
                            <p className='priceDiv2'>Per month</p>
                        </div>


                        <div className='FourthbodyLeftdivfeat'>
                            <div className='FourthbodyLeftdivA'><p className='FourthbodyLeftdivAicon'> < RiCheckboxCircleLine color='orange' /></p> List up to 3 spaces</div>
                            <div className='FourthbodyLeftdivA' > <p className='FourthbodyLeftdivAicon'> < RiCheckboxCircleLine color='orange' /></p> Access to host dashboard <br />
                                for managing listing</div>
                            <div className='FourthbodyLeftdivA'> <p className='FourthbodyLeftdivAicon'> < RiCheckboxCircleLine color='orange' /></p> Recieve booking requests and <br />
                                inquiries</div>
                            <div className='FourthbodyLeftdivA'> <p className='FourthbodyLeftdivAicon'> < RiCheckboxCircleLine color='orange' /></p> Basic analytics on space view <br />
                                and bookings</div>
                        </div>

                        <div className='FourthbodyLeftdivbtnhold'>
                            <button className='FourthbodyLeftdivbutton'>Get Started</button>
                        </div>

                    </div>
                </div>

                <div className='becomeFourthbodyLeft'>
                    <div className='FourthbodyLeftdiv'>

                        <h2 className='FourthbodyLeftdivfont'>Premium Plan</h2>
                        <div className='FourthbodyLeftdivPrice'>
                            <p className='priceDiv'> <strike>N</strike>21,000</p>
                            <p className='priceDiv2'>Per month</p>
                        </div>

                        <div className='FourthbodyLeftdivfeat'>

                            <div className='FourthbodyLeftdivA'> <p className='FourthbodyLeftdivAicon'>< RiCheckboxCircleLine color='orange'/></p> List unlimited spaces</div>
                            <div className='FourthbodyLeftdivA'><p className='FourthbodyLeftdivAicon'>< RiCheckboxCircleLine color='orange' /></p> All Standard Plan benefits</div>
                            <div className='FourthbodyLeftdivA'><p className='FourthbodyLeftdivAicon'>< RiCheckboxCircleLine color='orange' /></p> Enhanced analytics with booking<br />
                                trends and user insights</div>
                            <div className='FourthbodyLeftdivA'><p className='FourthbodyLeftdivAicon'> < RiCheckboxCircleLine color='orange' /></p> Featured placement on the <br />
                                platform's search results </div>
                        </div>
                        <div className='FourthbodyLeftdivbtnhold'>
                            <button className='FourthbodyLeftdivbutton'>Get Started or Upgrade</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
    <div className='becomeFourthbodylast'>
        <div className='becomeFourthbodylast1'>
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className='fourthbodylastFull'>
            <div className='becomeFourthbodylastleft'>
                <div className='becomeFourthbodylastleftA'> <p className='becomeFourthbodylastpara'>How do i list my space on Hubspot?  </p>  <GrAdd color='orange' size={20} />  </div>
                <div className='becomeFourthbodylastleftA'> <p className='becomeFourthbodylastpara' >How do booking requests work? </p> <GrAdd color='orange' size={20} /> </div>
                <div className='becomeFourthbodylastleftA'> <p className='becomeFourthbodylastpara'>How do i manage renters inquiries and <br /> communications? </p><GrAdd color='orange' size={20} /> </div>
            </div>

            <div className='becomeFourthbodylastleft'>
                <div className='becomeFourthbodylastleftA'> <p className='becomeFourthbodylastpara'> What is the Verification process?</p> <GrAdd color='orange' size={20} /></div>
                <div className='becomeFourthbodylastleftA'> <p className='becomeFourthbodylastpara'> Can i update my listing after it's live?</p><GrAdd color='orange' size={20} /></div>
                <div className='becomeFourthbodylastleftA'> <p className='becomeFourthbodylastpara'> What support is available for hosts?</p><GrAdd color='orange' size={20} /> </div>
            </div>
        </div>
    </div>


    <div className='becomeLastdiv'>
        <h1 className='lastdivFont'>Unlock the Actual Value of Your Space</h1>
        <button className='lastdivButton'>List Your Space</button>
    </div>

</div>
)
  
}

export default Hostpage

