import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
    initializeStandardSubscription,
    initializePremiumSubscription,
    verifyStandardSubscription,
    verifyPremiumSubscription
} from '../Hubspotapi';
import './SubscriptionModal.css';

const SubscriptionModal = ({ isOpen, onClose, subscriptionType = 'standard' }) => {
    const hostToken = useSelector((state) => state.hubspot.hostToken);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [iframeUrl, setIframeUrl] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState({
        status: 'idle',
        message: '',
        data: null
    });

    const planDetails = {
        standard: {
            title: 'Standard Plan',
            price: '₦10,000',
            features: [
                'List up to 3 spaces',
                'Access to host dashboard for managing listing',
                'Receive booking requests and inquiries',
                'Basic analytics on space view and bookings'
            ]
        },
        premium: {
            title: 'Premium Plan',
            price: '₦21,000',
            features: [
                'List unlimited spaces',
                'All Standard Plan benefits',
                'Enhanced analytics with booking trends and user insights',
                "Featured placement on the platform's search results"
            ]
        }
    };

    const selectedPlan = planDetails[subscriptionType];

    useEffect(() => {
        if (!isOpen) {
            resetAllStates();
        }
    }, [isOpen]);

    const resetAllStates = () => {
        setLoading(false);
        setError('');
        setIframeUrl(null);
        setPaymentStatus({
            status: 'idle',
            message: '',
            data: null
        });
    };

    const handleloading = (isLoading) => {
        setLoading(isLoading);
    };

    const handleResponse = (response) => {
        if (response.res) {
            const reference = response?.res?.data?.data?.reference;
            if (reference) {
                localStorage.setItem('subscriptionReference', reference);
                sessionStorage.setItem('subscriptionReference', reference);
                sessionStorage.setItem('subscriptionType', subscriptionType);
            }

            const checkoutUrl = response.res.data?.data?.checkout_url;

            if (checkoutUrl) {
                setIframeUrl(checkoutUrl);
                setPaymentStatus({ status: 'processing', message: 'Launching payment modal...' });
            }
        } else if (response.err) {
            const errorMessage = response.err.response?.data?.message || 'Subscription failed';
            setError(errorMessage);
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
    };

    const handleSubscribe = async () => {
        setError('');
        localStorage.removeItem('subscriptionReference');
        sessionStorage.removeItem('subscriptionReference');
        sessionStorage.removeItem('subscriptionType');

        if (!hostToken) {
            setError('You must be logged in as a host to subscribe');
            toast.error('You must be logged in as a host to subscribe', {
                duration: 4000,
                position: 'top-center',
            });
            navigate('/hostlogin'); // Redirect to host login page
            return;
        }

        if (subscriptionType === 'standard') {
            initializeStandardSubscription(handleloading, handleResponse, hostToken.hostToken);
        } else {
            initializePremiumSubscription(handleloading, handleResponse, hostToken.hostToken);
        }
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
            const reference = localStorage.getItem('subscriptionReference');

            switch (result) {
                case 'success': {
                    setIframeUrl(null);
                    if (subscriptionType === 'standard') {
                        verifyStandardSubscription(reference, handleloading, (verifyResponse) => {
                            if (verifyResponse.res) {
                                toast.success('Standard subscription activated successfully!', {
                                    duration: 4000,
                                    position: 'top-center',
                                });
                                setTimeout(() => {
                                    onClose();
                                    navigate("/dashboardLayout/hostdashboard");
                                }, 500);
                            } else {
                                handleVerificationError();
                            }
                        });
                    } else {
                        verifyPremiumSubscription(reference, handleloading, (verifyResponse) => {
                            if (verifyResponse.res) {
                                toast.success('Premium subscription activated successfully!', {
                                    duration: 4000,
                                    position: 'top-center',
                                });
                                setTimeout(() => {
                                    onClose();
                                    navigate("/dashboardLayout/hostdashboard");
                                }, 500);
                            } else {
                                handleVerificationError();
                            }
                        });
                    }
                    break;
                }

                case 'failed':
                    setPaymentStatus({
                        status: 'failed',
                        message: 'Payment failed. Please try again.',
                        data: { reference }
                    });
                    localStorage.removeItem('subscriptionReference');
                    toast.error('Payment failed. Please try again.', {
                        duration: 4000,
                        position: 'top-center',
                    });
                    setIframeUrl(null);
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

        const handleVerificationError = () => {
            toast.error('Payment verification failed. Please contact support.', {
                duration: 4000,
                position: 'top-center',
            });
            setPaymentStatus({
                status: 'failed',
                message: 'Payment verification failed',
                data: null
            });
        };

        window.addEventListener('message', handlePaymentEvent);

        return () => {
            window.removeEventListener('message', handlePaymentEvent);
        };
    }, [onClose, navigate, subscriptionType]);

    if (!isOpen) return null;

    return (
        <>
            {paymentStatus.status !== 'idle' && paymentStatus.status !== 'processing' && paymentStatus.status !== 'success' && (
                <div className="payment-status-overlay">
                    <div className="payment-status-modal">
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
                                        setPaymentStatus({ status: 'idle' });
                                        setError('');
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
                                        setPaymentStatus({ status: 'idle' });
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
                <div className="modal-content subscription-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>Subscribe to {selectedPlan.title}</h2>
                        <button className="close-button" onClick={onClose}>&times;</button>
                    </div>

                    <div className="subscription-content">
                        <div className="plan-details">
                            <div className="plan-header">
                                <h3>{selectedPlan.title}</h3>
                                <p className="plan-price">{selectedPlan.price} <span>per month</span></p>
                            </div>

                            <div className="plan-features">
                                <h4>Plan Features:</h4>
                                <ul>
                                    {selectedPlan.features.map((feature, index) => (
                                        <li key={index}>
                                            <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <div className="note">
                            <small>You will be redirected to a secure payment page to complete your subscription.</small>
                        </div>

                        <div className="form-actions">
                            <button type="button" onClick={onClose} className="cancel-button">
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleSubscribe}
                                className="subscribe-button"
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : `Subscribe Now (${selectedPlan.price})`}
                            </button>
                        </div>
                    </div>
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
    );
};

export default SubscriptionModal;
