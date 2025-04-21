
import React, { useState } from 'react';
import './hostpage.css';
import { RiCheckboxCircleLine } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill, PiNotePencil } from "react-icons/pi";
import { BsBuildingCheck } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
import { VscChromeMinimize } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import SubscriptionModal from './hostSubscriptionModal';
const Hostpage = () => {
    const navigate = useNavigate();
    const [openFAQIndexes, setOpenFAQIndexes] = useState([]);
    const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
    const [subscriptionType, setSubscriptionType] = useState('standard');
    const [isYearly, setIsYearly] = useState(false);
      const hostShowToken = useSelector((state) => state.hubspot.hostToken);
      const spaceToken = hostShowToken.hostToken

    const hostToken = useSelector((state) => state.hubspot.hostToken);


    const handleNavigate = () => {
        if(!spaceToken){
            navigate("/hostlogin")
        }else{
            navigate("/listspace")
        }
    }

    const toggleFAQ = (index) => {
        if (openFAQIndexes.includes(index)) {
            setOpenFAQIndexes(openFAQIndexes.filter(i => i !== index));
        } else {
            setOpenFAQIndexes([...openFAQIndexes, index]);
        }
    };

    const handleSubscriptionClick = (type) => {
        if (!hostToken) {
            toast.error('You need to login as a host first to subscribe', {
                duration: 4000,
                position: 'top-center',
            });
            navigate('/hostlogin');
            return;
        }

        setSubscriptionType(type);
        setShowSubscriptionModal(true);
    };

    const handleCloseModal = () => {
        setShowSubscriptionModal(false);
    };

    const toggleBillingPeriod = (period) => {
        setIsYearly(period === 'yearly');
    };

    const faqList = [
        {
            question: "How do I list my space on Hubspot?",
            answer: "Sign up, complete your host profile, and fill out the listing form with your space details and images."
        },
        {
            question: "How do booking requests work?",
            answer: "When a renter books, payment is processed instantly and the booking is confirmed, with details emailed to you."
        },
        {
            question: "How do I manage renters inquiries and communications?",
            answer: "All communications with renters are handled via email. You'll receive notifications and booking details directly in your inbox."
        },
        {
            question: "What is the verification process?",
            answer: "Once you submit your listing, our team reviews it against our quality standards and notifies you when it's approved."
        },
        {
            question: "Can I update my listing after it's live?",
            answer: "Hosts can request to edit their listing. Once submitted, our team will review your update request before the changes go live."
        },
        {
            question: "How do I receive payments?",
            answer: "Payments are processed on Hubspot and credited to a virtual account. You'll get email alerts and can withdraw funds anytime via your dashboard."
        },
    ];

    const standardPrice = isYearly ? '100,000' : '10,000';
    const premiumPrice = isYearly ? '210,000' : '21,000';
    const standardPeriod = isYearly ? 'Per year' : 'Per month';
    const premiumPeriod = isYearly ? 'Per year' : 'Per month';

    return (
        <div className='becomeBody'>
            <SubscriptionModal
                isOpen={showSubscriptionModal}
                onClose={handleCloseModal}
                subscriptionType={subscriptionType}
            />

            <div className='becomeHead'>
                <div className='becomeHeadbox'>
                    <div className='becomeHeadbox1'>
                        <h1 className='headBoxFont'>Maximize Your Space's Potential</h1>
                        <p className='headBoxpara'>
                            At Hubspot, we help coworking hubs and creative spaces unlock their <br />
                            potential by connecting them with professionals seeking inspiring work <br />
                            environments. Showcase your space effortlessly, fill your schedule, and <br />
                            turn idle areas into thriving hubs of productivity and creativity.
                        </p>
                        <button className='headFontbutton' onClick={handleNavigate}>List Your Space</button>
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
                                <h3 className='becomemiddleFonts'>Sign Up & Create Your Profile</h3>
                                <p className='becomemiddlePara'>Register for an account and complete your host <br /> profile with your details</p>
                            </div>

                            <div className='middleMiddle1C'>
                                <div className='becomemiddleIcon'>
                                    <PiNumberCircleTwoFill size={35} color='navy' />
                                    <BsBuildingCheck size={65} color='navy' />
                                </div>
                                <h3 className='becomemiddleFonts'>List Your Space</h3>
                                <p className='becomemiddlePara'>Add your coworking or creative hub space, including <br /> images, a brief overview and key details.</p>
                            </div>
                        </div>

                        <div className='middleMiddle2'>
                            <div className='middleMiddle1B'>
                                <div className='becomemiddleIcon'>
                                    <PiNumberCircleThreeFill size={35} color='navy' />
                                    <LuBadgeCheck size={65} color='navy' />
                                </div>
                                <h3 className='becomemiddleFonts'>Verify Your Space</h3>
                                <p className='becomemiddlePara'>Complete the verification process to ensure your <br /> space meets our quality standards</p>
                            </div>

                            <div className='middleMiddle1D'>
                                <div className='becomemiddleIcon'>
                                    <PiNumberCircleFourFill size={35} color='navy' />
                                    <FaCalendarDays size={65} color='navy' />
                                </div>
                                <h3 className='becomemiddleFonts'>Manage Bookings</h3>
                                <p className='becomemiddlePara'>Receive booking requests and easily manage your <br /> reservations through your dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='becomeThirdbody'>
                <div className='becomeThirdbody1'>
                    <h1 className='becomeThirdbodyfont'>What Our Hosts Have to Say</h1>
                    <div className='becomeThirdbodydiv'>
                        {[
                            {
                                quote: `"Hubspot's user-friendly platform has streamlined my booking process. It's a game changer for busy hosts looking to maximize their space's potential."`,
                                space: 'Urban Collective',
                                person: 'Cynthia Afolayan',
                                images: "/house3.png"
                            },
                            {
                                quote: `"Hubspot's clean intuitive design has brought steady inquiries to Idea Forge, letting me focus on my work rather than marketing."`,
                                space: 'Idea Forge',
                                person: 'Michael Okoro',
                                  images: "/house1.png"
                            },
                            {
                                quote: `"Hubspot's user-friendly platform has streamlined my booking process. It's a game changer for busy hosts looking to maximize their space's potential."`,
                                space: 'Rainbow Spaces',
                                person: 'John Hancock',
                                  images: "/house2.png"
                            }
                        ].map((testimonial, index) => (
                            <div className='becomeThirdbodydivA' key={index}>
                                <div className='becomeThirdbodydiv1'>
                                    <p className='becomeThirdbodypara'>{testimonial.quote}</p>
                                    <h3 className='becomeThirdbodyfontA'>{testimonial.space}</h3>
                                    <p className='becomeThirdbodypara2'>{testimonial.person}</p>
                                </div>
                                <div className='becomeThirdbodydiv2'>
                                    <img className='hostSayimage' src={testimonial.images} alt='' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='becomeFourthbody'>
                <div className='becomeFourthbody1'>
                    <div className='fourthbuttonDiv'>
                        <button
                            className={`fourthButton ${!isYearly ? 'active-billing' : ''}`}
                            onClick={() => toggleBillingPeriod('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={`fourthButton ${isYearly ? 'active-billing' : ''}`}
                            onClick={() => toggleBillingPeriod('yearly')}
                        >
                            Yearly
                        </button>
                    </div>

                    <div className='becomeFourthbody1A'>
                        {[{
                            title: 'Standard Plan',
                            price: standardPrice,
                            period: standardPeriod,
                            features: [
                                'List up to 3 spaces',
                                'Access to host dashboard for managing listing',
                                'Receive booking requests and inquiries',
                                'Basic analytics on space view and bookings'
                            ],
                            button: 'Get Started',
                            type: 'standard'
                        }, {
                            title: 'Premium Plan',
                            price: premiumPrice,
                            period: premiumPeriod,
                            features: [
                                'List unlimited spaces',
                                'All Standard Plan benefits',
                                'Enhanced analytics with booking trends and user insights',
                                "Featured placement on the platform's search results"
                            ],
                            button: 'Get Started or Upgrade',
                            type: 'premium'
                        }].map((plan, index) => (
                            <div className='becomeFourthbodyLeft' key={index}>
                                <div className='FourthbodyLeftdiv'>
                                    <h2 className='FourthbodyLeftdivfont'>{plan.title}</h2>
                                    <div className='FourthbodyLeftdivPrice'>
                                        <p className='priceDiv'><strike>N</strike>{plan.price}</p>
                                        <p className='priceDiv2'>{plan.period}</p>
                                    </div>
                                    <div className='FourthbodyLeftdivfeat'>
                                        {plan.features.map((feat, i) => (
                                            <div className='FourthbodyLeftdivA' key={i}>
                                                <p className='FourthbodyLeftdivAicon'>
                                                    <RiCheckboxCircleLine color='orange' />
                                                </p>
                                                {feat}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='FourthbodyLeftdivbtnhold'>
                                        <button
                                            className='FourthbodyLeftdivbutton'
                                            onClick={() => handleSubscriptionClick(plan.type)}
                                        >
                                            {plan.button}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='becomeFourthbodylast'>
                <div className='becomeFourthbodylast1'>
                    <h1 className='faqs'>Frequently Asked Questions</h1>
                </div>
                <div className='fourthbodylastFull'>
                    {[0, 3].map((startIndex) => (
                        <div className='becomeFourthbodylastleft' key={startIndex}>
                            {faqList.slice(startIndex, startIndex + 3).map((item, index) => {
                                const realIndex = startIndex + index;
                                const isOpen = openFAQIndexes.includes(realIndex);
                                return (
                                    <div key={realIndex} className='becomeFourthbodylastleftA'>
                                        <p className='becomeFourthbodylastpara'>
                                            {isOpen ? item.answer : item.question}
                                        </p>
                                        {isOpen ? (
                                            <VscChromeMinimize color='orange' size={30} onClick={() => toggleFAQ(realIndex)} />
                                        ) : (
                                            <GrAdd color='orange' size={20} onClick={() => toggleFAQ(realIndex)} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            <div className='becomeLastdiv'>
                <h1 className='lastdivFont'>Unlock the Actual Value of Your Space</h1>
                <button className='lastdivButton' onClick={handleNavigate}>List Your Space</button>
            </div>
        </div>
    );
};

export default Hostpage;