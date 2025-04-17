
import React from 'react';
import './BookingModal.css';

const BookingTypeSelector = ({ selectedType, onTypeChange }) => {
    return (
        <div className="booking-type-selector">
            <label htmlFor="duration-type">Duration Type:</label>
            <select
                id="duration-type"
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
                className="duration-select"
            >
                <option value="hourly">Hours</option>
                <option value="daily">Days</option>
            </select>
        </div>
    );
};

export default BookingTypeSelector;
