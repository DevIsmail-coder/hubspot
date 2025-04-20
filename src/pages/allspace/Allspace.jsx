import React, { useEffect, useState } from 'react'
import './allspace.css'
import { FiAlertCircle } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import { getAllspace } from '../Hubspotapi';
import BookingModal from '../landing/BookingModal';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Allspace = () => {
    const userToken = useSelector((state) => state.hubspot.userToken);
    const navigate = useNavigate();
    const location = useLocation();
    const [allSpace, setAllSpace] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSpaceId, setSelectedSpaceId] = useState(null);

    const handleResponse = (mess) => {
        if (mess.data?.data) {
            setAllSpace(mess.data?.data);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getAllspace(handleResponse);
    }, []);

    useEffect(() => {
        if (location.state?.paymentSuccess) {
            toast.success('Your payment was successful and your booking has been confirmed!', {
                duration: 7000,
                position: 'top-center',
                style: {
                    background: '#1E398A',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '10px',
                    textAlign: 'center'
                },
                icon: '🎉',
            });
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    const handleBookNowClick = (spaceId) => {
        if (!userToken?.userToken) {
            navigate('/login');
            return;
        }
        setSelectedSpaceId(spaceId);
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedSpaceId(null);
    }

    const handleBookingSubmit = (result) => {
        console.log('Booking result:', result);
    }

    const SkeletonCard = () => (
        <div className='Allspacecontainer2wrap'>
            <div className='Allspacecontainer2wrapXX'>
                <div className='skeleton-image' style={{ height: '250px', width: '100%' }}></div>
            </div>
            <div className='Allspacecontainer2wrapXXX'>
                <article className='Allspacecontainer2wrapXXX1'>
                    <div className='skeleton-title' style={{ height: '24px', width: '70%', marginBottom: '10px' }}></div>
                    <div className='skeleton-text' style={{ height: '60px', width: '100%' }}></div>
                    <div className='skeleton-icons' style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <div className='skeleton-icon' style={{ height: '20px', width: '20px', borderRadius: '50%' }}></div>
                        <div className='skeleton-icon' style={{ height: '20px', width: '20px', borderRadius: '50%' }}></div>
                        <div className='skeleton-icon' style={{ height: '20px', width: '20px', borderRadius: '50%' }}></div>
                        <div className='skeleton-icon' style={{ height: '20px', width: '20px', borderRadius: '50%' }}></div>
                    </div>
                    <div className='skeleton-text' style={{ height: '20px', width: '50%', marginTop: '10px' }}></div>
                </article>
                <article className='Allspacecontainer2wrapXXX2'>
                    <div className='skeleton-text' style={{ height: '20px', width: '40%', marginBottom: '10px' }}></div>
                    <div className='skeleton-button' style={{ height: '40px', width: '100%', marginTop: '10px' }}></div>
                </article>
            </div>
        </div>
    );

    return (
        <div className='Allspacebody'>
            <main className='Allspacemain'>
                <article className='Allspacecontainer1'></article>
                <article className='Allspacecontainer2'>
                    {isLoading ? (
                        Array(6).fill().map((_, index) => (
                            <SkeletonCard key={`skeleton-${index}`} />
                        ))
                    ) : (
                        allSpace.map((i, id) => (
                            <div className='Allspacecontainer2wrap' key={id}>
                                <div className='Allspacecontainer2wrapXX' onClick={() => navigate(`/detailpage/${i.id}`)}>
                                    {
                                        i.images && i.images.length > 0 && (
                                            <img src={i.images[0].imageUrl} className='Allspacecontainer2wrapXXing' alt={i.name} />
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
                                        <p className='Allspacecontainer2wrapXXX1d2'>{i.overview.slice(0, 75)}...</p>
                                        <div className='Allspacecontainer2wrapXXX1d3'>
                                            {
                                                i.amenities && i.amenities.split(",").slice(0, 4).map((amenity, index) => (
                                                    <span key={index} className='admin-amenity-icon '>{amenity}</span>
                                                ))
                                            }
                                        </div>
                                    
                                    </article>
                                    <article className='Allspacecontainer2wrapXXX2'>
                                        <div className='Allspacecontainer2wrapXXX2d1'>
                                        </div>
                                        <div className='Allspacecontainer2wrapXXX2d2'>
                                        <div className='Allspacecontainerlocation'>
                                            <IoLocationOutline className='Allspacecontainerlocationxx' />
                                            {i.location}
                                        </div>
                                            <main className='Allspacecontainer2wrapXXX2d2main1'>
                                                <p>NGN {i.pricePerDay.toLocaleString()}/Hour</p>
                                            </main>
                                            <main className='Allspacecontainer2wrapXXX2d2main2'>
                                    
                                                <button
                                                    className='Allspacecontainer2wrapXXX2d2mainbut'
                                                    onClick={() => handleBookNowClick(i.id)}
                                                >
                                                    Book 1 day
                                                </button>
                                            </main>
                                        </div>

                                        <div className='Allspacecontainer2wrapXXX2d2XX'>
                                            <main className='Allspacecontainer2wrapXXX2d2main1x'>
                                                <div className='Allspacecontainer2wrapXXX2d2main1xwrap'>
                                                    {/* <span className='Allspacecontainer2wrapXXX2d2main1xwrapdiv1'>
                                                        <p>-</p>
                                                        <p>1</p>
                                                        <p>+</p>
                                                    </span> */}
                                                    <span className='Allspacecontainer2wrapXXX2d2main1xwrapdiv2'>Add more days</span>
                                                </div>
                                                <p className='Allspacecontainer2wrapXXX2d2main1xwrappp'>NGN {i.pricePerDay}/Hour</p>
                                            </main>
                                            <button
                                                className='Allspacecontainer2wrapXXX2d2mainbut'
                                                onClick={() => handleBookNowClick(i.id)}
                                            >
                                                Book 1 day
                                            </button>
                                        </div>
                                        <main className='mainerror'><FiAlertCircle className='mainerroricon'/> Space is closed on Sat & Sun</main>
                                    </article>
                                </div>
                            </div>
                        ))
                    )}
                </article>
            </main>

            <BookingModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                spaceId={selectedSpaceId}
                onSubmit={handleBookingSubmit}
            />
        </div>
    )
}

export default Allspace