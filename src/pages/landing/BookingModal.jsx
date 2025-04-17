import React, { useState, useEffect, useRef } from 'react'
import './BookingModal.css'
import { initializeBooking, verifyBooking, verifyDayBooking, getDetails } from '../Hubspotapi'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import BookingTypeSelector from './BookingSelector';

const BookingModal = ({ isOpen, onClose, spaceId, onSubmit, initialDuration = 1, initialDurationType = 'hourly' }) => {
    const userToken = useSelector((state) => state.hubspot.userToken);
    const navigate = useNavigate();
    const verificationAttempted = useRef(false);

    const [spaceDetails, setSpaceDetails] = useState(null);
    const [bookingData, setBookingData] = useState({
        duration: initialDuration,
        durationType: initialDurationType,
        startDate: '',
        checkinTime: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [iframeUrl, setIframeUrl] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState({
        status: 'idle',
        message: '',
        data: null
    });

    useEffect(() => {
        if (isOpen && spaceId) {
            const handleDetailsResponse = (response) => {
                if (response.data?.data) {
                    setSpaceDetails(response.data.data);
                }
            };
            getDetails(handleDetailsResponse, spaceId);
        }
    }, [isOpen, spaceId]);

    useEffect(() => {
        setBookingData(prev => ({
            ...prev,
            duration: initialDuration,
            durationType: initialDurationType
        }));
    }, [initialDuration, initialDurationType]);

    const calculateTotalPrice = () => {
        if (!spaceDetails) return 0;

        if (bookingData.durationType === 'hourly') {
            return spaceDetails.pricePerHour * bookingData.duration;
        } else {
            return spaceDetails.pricePerDay * bookingData.duration;
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(price);
    };

    const resetAllStates = () => {
        setBookingData({
            duration: 1,
            durationType: 'hourly',
            startDate: '',
            checkinTime: ''
        });
        setLoading(false);
        setError('');
        setIframeUrl(null);
        setPaymentStatus({
            status: 'idle',
            message: '',
            data: null
        });
        verificationAttempted.current = false;
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleTypeChange = (type) => {
        setBookingData(prev => ({
            ...prev,
            durationType: type
        }))
    }

    const handleVerificationLoading = (isLoading) => {
        setLoading(isLoading)
    }

    const handleVerificationResponse = (response) => {
        if (response.res) {
            setPaymentStatus({
                status: 'success',
                message: 'Payment and booking verified successfully!',
                data: { reference: localStorage.getItem('pendingBookingReference'), verificationData: response.res.data }
            });
            setTimeout(() => {
                localStorage.removeItem('pendingBookingReference');
                resetAllStates();
                onClose();
                navigate('/', { state: { paymentSuccess: true } });
            }, 2000);
        } else if (response.err) {
            const errorMessage = response.err.response?.data?.message || 'Verification failed'
            setPaymentStatus({
                status: 'error',
                message: `Verification failed: ${errorMessage}`,
                data: { reference: localStorage.getItem('pendingBookingReference') }
            });

            toast.error(`Verification failed: ${errorMessage}`, {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#1E398A',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '10px',
                    textAlign: 'center'
                },
                icon: '❌',
            });
        }
    }

    const handleloading = (isLoading) => {
        setLoading(isLoading)
    }

    const handleResponse = (response) => {
        if (response.res) {
            localStorage.setItem('pendingBookingReference', response?.res?.data?.data?.reference)
            const checkoutUrl = response.res.data?.data?.checkout_url;

            if (checkoutUrl) {
                setIframeUrl(checkoutUrl);
                setPaymentStatus({ status: 'processing', message: 'Launching payment modal...' });
                onSubmit(response.res.data);
            }
        } else if (response.err) {
            const errorMessage = response.err.response?.data?.message || 'Booking failed'
            setError(errorMessage)
            setBookingData({
                duration: 1,
                durationType: 'hourly',
                startDate: '',
                checkinTime: ''
            })
            setIframeUrl(null);
            setPaymentStatus({
                status: 'failed',
                message: errorMessage,
                data: response.err
            });

            toast.error(errorMessage, {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#1E398A',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '10px',
                    textAlign: 'center'
                },
                icon: '❌',
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!userToken) {
            setError('You must be logged in to book a space')
            toast.error('You must be logged in to book a space', {
                duration: 4000,
                position: 'top-center',
            });
            return
        }

        initializeBooking(spaceId, bookingData, handleloading, handleResponse, userToken.userToken)
    }

    const verifyBookingOnce = async (reference) => {
        if (verificationAttempted.current) {
            console.log('Verification already attempted, skipping duplicate call');
            return;
        }

        verificationAttempted.current = true;

        await verifyBooking(reference, handleVerificationLoading, handleVerificationResponse);
    };

    const verifyDayBookingOnce = async (reference) => {
        if (verificationAttempted.current) {
            console.log('Verification already attempted, skipping duplicate call');
            return;
        }

        verificationAttempted.current = true;

        await verifyDayBooking(reference, handleVerificationLoading, handleVerificationResponse);
    };

    useEffect(() => {
        const handlePaymentEvent = (event) => {
            if (event.type === 'message') {
                const rawData = event.data;
                try {
                    const parsedData = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;

                    if (parsedData && parsedData.result) {
                        processPaymentResult(parsedData.result);
                    }
                } catch (err) {
                    console.error('Failed to parse payment message:', err);
                }
            }
        };

        const processPaymentResult = async (result) => {
            switch (result) {
                case 'success': {
                    setPaymentStatus({
                        status: 'success',
                        message: 'Your payment was successful!',
                        data: { reference: localStorage.getItem('pendingBookingReference') }
                    });
                    const reference = localStorage.getItem('pendingBookingReference');
                    if (reference) {
                        if (bookingData.durationType === 'daily') {
                            await verifyDayBookingOnce(reference);
                        } else {
                            await verifyBookingOnce(reference);
                        }
                    } else {
                        setPaymentStatus({
                            status: 'error',
                            message: 'No booking reference found.',
                            data: null
                        });
                    }
                    break;
                }

                case 'failed':
                    setPaymentStatus({
                        status: 'failed',
                        message: 'Payment failed. Please try again.',
                        data: { reference: localStorage.getItem('pendingBookingReference') }
                    });
                    toast.error('Payment failed. Please try again.', {
                        duration: 4000,
                        position: 'top-center',
                    });
                    break;

                case 'close':
                    setPaymentStatus({
                        status: 'closed',
                        message: 'Payment window closed.',
                        data: null
                    });
                    setIframeUrl(null);
                    break;

                case 'pending':
                    break;
            }
        };

        window.addEventListener('message', handlePaymentEvent);

        return () => {
            window.removeEventListener('message', handlePaymentEvent);
            verificationAttempted.current = false;
        };
    }, [navigate, onClose, userToken?.userToken, bookingData.durationType]);

    useEffect(() => {
        if (!isOpen) {
            verificationAttempted.current = false;
        }
    }, [isOpen]);

    if (!isOpen) return null

    return (
        <>
            {paymentStatus.status !== 'idle' && paymentStatus.status !== 'processing' && (
                <div className="payment-status-overlay">
                    <div className="payment-status-modal">
                        {paymentStatus.status === 'success' && (
                            <>
                                <div className="status-icon success">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="status-title success">Payment Successful!</h3>
                                <p className="status-message">{paymentStatus.message}</p>
                                <p className="status-reference">Reference: {paymentStatus.data?.reference}</p>
                            </>
                        )}

                        {paymentStatus.status === 'failed' && (
                            <>
                                <div className="status-icon error">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="status-title error">Payment Failed</h3>
                                <p className="status-message">{paymentStatus.message}</p>
                                {paymentStatus.data?.reference && (
                                    <p className="status-reference">Reference: {paymentStatus.data.reference}</p>
                                )}
                                <button
                                    onClick={() => {
                                        setPaymentStatus({ status: 'idle' })
                                        setError('')
                                        verificationAttempted.current = false;
                                    }}
                                    className="status-button"
                                >
                                    Try Again
                                </button>
                            </>
                        )}

                        {paymentStatus.status === 'closed' && (
                            <>
                                <div className="status-icon closed">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="status-title">Payment Window Closed</h3>
                                <p className="status-message">{paymentStatus.message}</p>
                                <button
                                    onClick={() => {
                                        setPaymentStatus({ status: 'idle' })
                                        verificationAttempted.current = false;
                                    }}
                                    className="status-button"
                                >
                                    Try Again
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>Book This Space</h2>
                        <button className="close-button" onClick={onClose}>&times;</button>
                    </div>
                    <form onSubmit={handleSubmit} className="booking-form">
                        <div className="form-group">
                            <label htmlFor="durationType">Duration Type</label>
                            <BookingTypeSelector
                                selectedType={bookingData.durationType}
                                onTypeChange={handleTypeChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="duration">
                                Duration {bookingData.durationType === 'hourly' ? '(hours)' : '(days)'}
                            </label>
                            <input
                                type="number"
                                id="duration"
                                name="duration"
                                value={bookingData.duration}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={bookingData.startDate}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="checkinTime">Check-in Time</label>
                            <input
                                type="time"
                                id="checkinTime"
                                name="checkinTime"
                                value={bookingData.checkinTime}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {spaceDetails && (
                            <div className="price-display">
                                <div className="price-breakdown">
                                    <p className="price-item">
                                        <span>Price per {bookingData.durationType === 'hourly' ? 'hour' : 'day'}:</span>
                                        <span>{formatPrice(bookingData.durationType === 'hourly' ? spaceDetails.pricePerHour : spaceDetails.pricePerDay)}</span>
                                    </p>
                                    <p className="price-item">
                                        <span>Duration:</span>
                                        <span>{bookingData.duration} {bookingData.duration === 1 ? (bookingData.durationType === 'hourly' ? 'hour' : 'day') : (bookingData.durationType === 'hourly' ? 'hours' : 'days')}</span>
                                    </p>
                                    <div className="total-price">
                                        <span>Total Price:</span>
                                        <span>{formatPrice(calculateTotalPrice())}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {error && <div className="error-message">{error}</div>}
                        <div className="note">
                            <small>You will be redirected to a secure payment page to complete your booking.</small>
                        </div>
                        <div className="form-actions">
                            <button type="button" onClick={onClose} className="cancel-button">
                                Cancel
                            </button>
                            <button type="submit" className="submit-button" disabled={loading}>
                                {loading ? 'Processing...' : `Pay ${formatPrice(calculateTotalPrice())}`}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {iframeUrl && (
                <div className="iframe-overlay">
                    <div className="iframe-container">
                        <iframe
                            src={iframeUrl}
                            title="Payment"
                            allow="payment"
                            width="100%"
                            height="100%"
                            onLoad={() => console.log("Payment iframe loaded")}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default BookingModal
