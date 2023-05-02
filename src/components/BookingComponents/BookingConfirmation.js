import React from 'react';
import '../styles.css';
import './formStyles.css'
import Button from '../Button.js'

const generateRandomBookingId = () => {
    // Generate a random number between 10000000 and 99999999
    const randomId = Math.floor(Math.random() * 90000000) + 10000000;
    return randomId.toString();
  };

const ConfirmedBooking = () => {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    const confirmationId = generateRandomBookingId()

    return (
        <>
            <div className='confirmedBookingContainer'>
                <div className='confirmedBookingHeading'>
                    <h1>Score a Seat at the Table!</h1>
                    <h2 style={{fontSize: '1.75rem', paddingBottom: '2rem'}}>Your Reservation at Little Lemon is Confirmed.</h2>
                    <sub
                    className='sub'
                    style={{fontWeight: 500, paddingBottom: '1rem'}}
                    >
                        ID: {confirmationId}
                    </sub>
                    <div style={{paddingBottom: '2rem'}}>
                        <p className='pRegular-16'>You booked a table for <span className='pMedium-16'>{bookingData.date.value}</span>.</p>
                        <p className='pRegular-16'>
                            The reservations is for <span className='pMedium-16'>{bookingData.guests.value} guests </span> who's
                            gonna celebrate an <span className='pMedium-16'>{bookingData.occasion.value}</span>
                        </p>
                    </div>
                    <h2 style={{fontSize: '2rem'}}>Your personal details are below: </h2>
                </div>
                <div className='bookingPersonalDetails'>
                    <div className='personalDetailsLabels'>
                        <p className='pMedium-16'>Name:</p>
                        <p className='pMedium-16'>Email:</p>
                        <p className='pMedium-16'>Phone:</p>
                    </div>
                    <div className='personalDetails'>
                        <p className='pRegular-16'>{bookingData.name.value}</p>
                        <p className='pRegular-16'>{bookingData.email.value}</p>
                        <p className='pRegular-16'>{bookingData.phoneNumber.value}</p>
                    </div>
                </div>
                <div className='confirmedBookingDetails'>
                    <p>
                        For further assistance or changes to your reservation,
                        please contact us at
                        <br/>
                        <span><a style={{color: 'white'}} href="">0746 633 883</a></span> or send a message on <span><a style={{color: 'white'}} href="">contact@littlelemon.com</a></span>.
                    </p>
                    <p>
                        Cancellations or changes to your reservation must be made <br/>
                        at least 24 hours prior to the reservation time. <br/>
                        Failure to do so may result in a cancellation fee of $25 per person.
                    </p>
                </div>
                <Button
                to='/'
                hoverBgColor="rgb(244, 120, 50)"
                bgColor="#ff6d00"
                textColor='#fff'
                hoverTextColor='#fff'
                text="Go to Home"
                padding='16px 24px'
                />
            </div>
        </>
    );
};

export default ConfirmedBooking;
