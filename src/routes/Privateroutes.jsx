import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Privateroutes = ({ children }) => {
    const hostToken = useSelector((state) => state.hubspot.hostToken);

    return hostToken ? children : <Navigate to="/hostLogin" />;
};

export default Privateroutes;



