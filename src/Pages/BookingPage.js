import React, {useEffect, useReducer, useState} from 'react';

import { fetchAPI, submitAPI } from './api.js'
import { useNavigate } from 'react-router-dom';

import '../components/styles.css'
import '../App.css';
import BookingForm from '../components/BookingComponents/BookingTableFrom.js'
import SecondBookingForm from '../components/BookingComponents/SecondBookingForm.js'
import ConfirmedBooking from '../components/BookingComponents/BookingConfirmation.js'

const styles = {
  BookingPageContainer: {
      height: '100%',
      display: 'flex',
      position: 'relative',
      top: '9vh',
      backgroundColor: '#0F2027',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
}

const BookingPage = () => {

  const navigate = useNavigate()

  const [bookingData, setBookingData] = useState(() => {
    const savedBookingData = JSON.parse(localStorage.getItem('bookingData'));
  return savedBookingData || {
    occasion: {
      value: 'Choose',
      isTouched: false,
    },
    guests: {
      value: 1,
      isTouched: false,
    },
    date: {
      value: new Date(),
      isTouched: false,
    },
    requestMessage: {
      value: ''
    },
    timesState: [],
    name: {
      value: '',
      isTouched: false,
    },
    email: {
      value: '',
      isTouched: false,
    },
    phoneNumber: {
      value: '',
      isTouched: false
    }
  };
});

  const [isFirstFormSubmitted, setisFirstFormSubmitted] = useState(false)
  const [isSecondFormSubmitted, setisSecondFormSubmitted] = useState(false)

  const [isBookingConfirmationDisplayed, setisBookingConfirmationDisplayed] = useState(false)
  const [isFirstFormDisplayed, setisFirstFormDisplayed] = useState(false)

  const [timesState, dispatch] = useReducer(
    (state, action) => {
        switch (action.type) {
            case 'init':
                return action.payload
            case 'update':
                return action.payload
            default:
                return state
        }
    },
    []
  )

  const [bookingDataFromLocalStorage, setBookingDataFromLocalStorage] = useState(null)

  function initializeTimes() {
    fetchAPI(bookingData.date).then((times) => {
      setBookingData({
        ...bookingData,
        timesState: times
      })
      dispatch({type: 'init', payload: times})
  })}

  const updateTimes = (newDate) => {
    fetchAPI(newDate).then((times) => {
      setBookingData({
        ...bookingData,
        timesState: times
      })
      dispatch({type: 'update', payload: times})
    });
  };

  useEffect(() => {
    initializeTimes()

    const savedBookingData = JSON.parse(localStorage.getItem('testJSON'))
    if (savedBookingData) {
      setBookingDataFromLocalStorage(savedBookingData)
      // setBookingData(savedBookingData)
    }
  }, [])


  const handleChange = (newBookingData) => {
    setBookingData(newBookingData);
    setBookingDataFromLocalStorage(newBookingData)
    localStorage.setItem('testJSON', JSON.stringify({
      ...bookingData,
      date: {
        value: newBookingData.date.value,
        isTouched: newBookingData.date.isTouched,
      }
    }));
      }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      bookingData.guests.value < 2 ||
      bookingData.guests.value > 10 ||
       bookingData.occasion.value === 'Choose'
       ) {
      alert('Please fill out all fiealds and select a valid time.')
    } else {
      setisFirstFormSubmitted(true)
      setisFirstFormDisplayed(true)
    }
  }


  const handleSecondSubmit = (e) => {
    e.preventDefault()
    if (submitAPI(bookingData)) {
      setisFirstFormDisplayed(false)
      setisSecondFormSubmitted(true)
      setisBookingConfirmationDisplayed(true)
      localStorage.setItem('bookingData', JSON.stringify(bookingData))
      navigate('/confirmedReservation')
    } else {
      alert('Failed to submit booking.')
    }
  }


  return (
    <>
      <div style={styles.BookingPageContainer}>
          {isFirstFormSubmitted && !isSecondFormSubmitted && !isBookingConfirmationDisplayed ? (
            <SecondBookingForm
              bookingData={bookingData}
              handleChange={handleChange}
              handleSubmit={handleSecondSubmit}
              name={bookingData.name}
              email={bookingData.email}
              phoneNumber={bookingData.phoneNumber}
            />
          ) : null}
          {isSecondFormSubmitted && isBookingConfirmationDisplayed ? (
            <ConfirmedBooking
              name={bookingData.name}
              email={bookingData.email}
              phoneNumber={bookingData.phoneNumber}
              occasion={bookingData.occasion}
              guests={bookingData.guests}
              request={bookingData.requestMessage.value}
              bookingDataFromLocalStorage={bookingDataFromLocalStorage}
            />
          ) : null}
          {!isFirstFormSubmitted && !isSecondFormSubmitted && !isBookingConfirmationDisplayed ? (
            <BookingForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              availableTimes={bookingData.timesState}
              updateTimes={updateTimes}
              date={bookingData.date}
              dateTouched={bookingData.date.isTouched}
              bookingData={bookingData}
              occasion={bookingData.occasion}
              guests={bookingData.guests}
              request={bookingData.requestMessage}
              setBookingData={setBookingData}
            />
          ) : null}
        </div>
    </>
  );
}

export default BookingPage