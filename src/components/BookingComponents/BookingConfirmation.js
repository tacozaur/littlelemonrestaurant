import React from 'react';
import '../styles.css';
import './formStyles.css'

const ConfirmedBooking = () => {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));

    return (
        <div className='confirmedBookingContainer'>
            <h1>Booking Confirmation</h1>
            <p>Thank you for booking with us! Here are the details of your booking:</p>
            <p>Name: {bookingData.name.value}</p>
            <p>Email: {bookingData.email.value}</p>
            <p>Phone Number: {bookingData.phoneNumber.value}</p>
            <p>Occasion: {bookingData.occasion.value}</p>
            <p>Guests: {bookingData.guests.value}</p>
        </div>
    );
};

export default ConfirmedBooking;
