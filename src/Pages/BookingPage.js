import React, {useEffect, useReducer, useState} from 'react';

import { fetchAPI, submitAPI } from './api.js'

import '../components/styles.css'
import '../App.css';
import BookingForm from '../components/BookingComponents/BookingTableFrom.js'
import SecondBookingForm from '../components/BookingComponents/SecondBookingForm.js'
import ConfirmedBooking from '../components/BookingComponents/BookingConfirmation.js'

const styles = {
    BookingPageContainer: {
        height: '100%',
        backgroundColor: '#495E57',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12.5vh 0 3vh 0'
    },

}



const BookingPage = () => {


  const [bookingData, setBookingData] = useState({
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
  })

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

    const savedBookingData = JSON.parse(localStorage.getItem('bookingData'))
    if (savedBookingData) {
      setBookingDataFromLocalStorage(savedBookingData)
    }
  }, [])

  const handleChange = (newBookingData) => {
    setBookingData(newBookingData);
    setBookingDataFromLocalStorage(newBookingData)
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
          />
        ) : null}
      </div>
    </>
  );
}

export default BookingPage