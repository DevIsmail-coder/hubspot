import React, { useEffect, useState } from 'react'
import './landing.css'
import Works from '../works/Works';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAllspace } from '../Hubspotapi';
import BookingModal from './BookingModal';
import { useSelector } from 'react-redux';
import BookingVerification from './BookingVerification';

const Landing = () => {
    const userToken = useSelector((state) => state.hubspot.userToken);
    const navigate = useNavigate()
    const location = useLocation();
    const [allSpace, setAllSpace] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedSpaceId, setSelectedSpaceId] = useState(null)
    const [selectedDurationType, setSelectedDurationType] = useState('hourly') // Add state for duration type

    const handleResponse = (mess) => {
        if (mess.data?.data) {
            setAllSpace(mess.data?.data)
            console.log("show", mess.data?.data?.data?.amenities);

            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (location.state?.paymentSuccess) {
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    useEffect(() => {
        setIsLoading(true)
        getAllspace(handleResponse)
    }, [])

    const handleBookNowClick = (spaceId) => {
        if (!userToken.userToken) {
            navigate('/login')
            return
        }
        setSelectedSpaceId(spaceId)
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setSelectedSpaceId(null)
    }

    const handleBookingSubmit = (result) => {
        console.log('Booking result:', result)
    }

    // Loading skeleton component
    const SkeletonCard = () => (
        <div className='Landingcontainer2wrap'>
            <article className='Landingcontainer2wrapart1'>
                <div className='skeleton-image'></div>
            </article>
            <article className='Landingcontainer2wrapart2'>
                <div className='skeleton-title'></div>
                <div className='skeleton-text'></div>
                <div className='skeleton-text'></div>
                <div className='Landingcontainer2iconwrap'>
                    <div className='skeleton-icon'></div>
                    <div className='skeleton-icon'></div>
                    <div className='skeleton-icon'></div>
                    <div className='skeleton-icon'></div>
                </div>
                <div className='Landingcontainer2butwrap'>
                    <div className='skeleton-button'></div>
                    <div className='skeleton-button'></div>
                </div>
            </article>
        </div>
    )

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
                            <img src='/house.jpeg' className='Landingcontainer1XXXmainimg' />
                        </div>
                    </article>
                </div>
                <div className='Landingcontainer2'>
                    <h3 className='Landingcontainer2h1'>Discover Flexible Spaces for Work or Creativity</h3>
                    <main className='Landingcontainer2main'>
                        {isLoading ? (
                            Array(6).fill().map((_, index) => (
                                <SkeletonCard key={`skeleton-${index}`} />
                            ))
                        ) : (
                            allSpace.slice(0, 6).map((i, id) => (
                                <div className='Landingcontainer2wrap' key={id}>
                                    <article className='Landingcontainer2wrapart1'>
                                        {i.images && i.images.length > 0 && (
                                            <img src={i.images[0].imageUrl} className='Landingcontainer2wrapart1img' onClick={() => navigate(`/detailpage/${i.id}`)} />
                                        )}
                                    </article>
                                    <article className='Landingcontainer2wrapart2'>
                                        <h3 className='Landingcontainer2wrapart2h3'>{i.name}</h3>
                                        <p className='Landingcontainer2wrapart2hp'>{i.overview.slice(0, 75)}....</p>
                                        <div className='Landingcontainer2iconwrap'>
                                            {
                                                (Array.isArray(i.amenities)
                                                    ? i.amenities
                                                    : typeof i.amenities === 'string'
                                                        ? i.amenities.split(",")
                                                        : []
                                                ).slice(0, 4).map((amenity, index) => (
                                                    <span key={index} className='admin-amenity-icon'>{amenity}</span>
                                                ))
                                            }
                                        </div>
                                        <div className='Landingcontainer2butwrap'>
                                            <button
                                                className='Landingcontainer2butwrap1'
                                                onClick={() => navigate(`/detailpage/${i.id}`)}
                                            >
                                                Space Details
                                            </button>
                                            <button
                                                className='Landingcontainer2butwrap2'
                                                onClick={() => handleBookNowClick(i.id)}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </article>
                                </div>
                            ))
                        )}
                    </main>
                </div>
                <Works />
            </div>
            <BookingModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                spaceId={selectedSpaceId}
                durationType={selectedDurationType}
                onDurationTypeChange={setSelectedDurationType}
                onSubmit={handleBookingSubmit}
            />
            {
                location.state?.paymentSuccess && (
                    <BookingVerification />
                )
            }
        </>
    )
}

export default Landing