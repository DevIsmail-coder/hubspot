import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { verifyBooking, verifyDayBooking } from '../Hubspotapi';
import { toast } from 'react-toastify';

const BookingVerification = () => {
    const location = useLocation();
    const [verificationAttempted, setVerificationAttempted] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState('idle');

    useEffect(() => {
        const needsVerification = location.state?.needVerification === true;
        const reference = sessionStorage.getItem('bookingReference');
        const durationType = sessionStorage.getItem('bookingDurationType');

        if (needsVerification && reference && !verificationAttempted) {
            setVerificationAttempted(true);
            verifyBookingPayment(reference, durationType);
        }
    }, [location, verificationAttempted]);

    const handleVerificationLoading = (isLoading) => {
        if (isLoading) {
            setVerificationStatus('loading');
        }
    };

    const clearStorageData = () => {
        try {
            sessionStorage.removeItem('bookingReference');
            sessionStorage.removeItem('bookingDurationType');
            localStorage.removeItem('reference');

            localStorage.removeItem('refrence');

            console.log('Storage cleared successfully');
        } catch (err) {
            console.error('Error clearing storage:', err);
        }
    };

    const handleVerificationResponse = (response) => {
        if (response.res) {
            setVerificationStatus('success');

            toast.success('Booking verified successfully! check mail for booking details', {
                duration: 5000,
                position: 'top-center',
                style: {
                    background: '#1E398A',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '10px',
                    textAlign: 'center'
                },
                icon: '✅',
            });
            clearStorageData();

        } else if (response.err) {
            const errorResponse = response.err.response || {};
            const errorMessage = errorResponse.data?.message || 'Verification failed';

            if (errorResponse.status === 400 && errorMessage.includes('already confirmed')) {
                setVerificationStatus('success');

                toast.success('Your booking was already confirmed!', {
                    duration: 5000,
                    position: 'top-center',
                    style: {
                        background: '#1E398A',
                        color: '#fff',
                        padding: '16px',
                        borderRadius: '10px',
                        textAlign: 'center'
                    },
                    icon: '✅',
                });

                clearStorageData();
            } else {
                setVerificationStatus('error');
                clearStorageData();
            }
        }
    };

    const verifyBookingPayment = async (reference, durationType) => {
        try {
            if (durationType === 'daily') {
                await verifyDayBooking(reference, handleVerificationLoading, handleVerificationResponse);
            } else {
                await verifyBooking(reference, handleVerificationLoading, handleVerificationResponse);
            }
        } catch (error) {
            console.error('Verification error:', error);
            setVerificationStatus('error');

            toast.error('An unexpected error occurred during verification', {
                duration: 5000,
                position: 'top-center',
            });
        }
    };

    useEffect(() => {
        return () => {
            if (verificationStatus === 'success') {
                clearStorageData();
            }
        };
    }, [verificationStatus]);

    return null;
};

export default BookingVerification;
