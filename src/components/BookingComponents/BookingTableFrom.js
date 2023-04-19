import '../styles.css';
import '../../App.css';
import './formStyles.css'
import React, { useState } from 'react';
import { handleInputChange } from '../../functions/handleInputChange';
import ErrorMessage from '../ErrorMessage';
import { formStyles } from './formStyles';

import arrowIcon from '../../assets/arrow.png'
import cuttleryIcon from '../../assets/cuttlery.png'
import weddingIcon from '../../assets/ring.png'
import birthdayIcon from '../../assets/birthday.png'
import specialIcon from '../../assets/special.png'
import dateIcon from '../../assets/date.png'

const BookingForm = ({
  availableTimes,
  updateTimes,
  handleSubmit,
  timeState,
  date,
  occasion,
  bookingData,
  guests,
  handleChange,
  request
}) => {

  const [timeSelected, setTimeSelected] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const [guestsValue, setGuestsValue] = useState(guests.value)

  const selectStyles = {
    ocassionSelect: {
      backgroundImage: `url(${cuttleryIcon}), url(${arrowIcon})`,
    },
    timeSelect: {
      backgroundColor: timeSelected ? '#495E57' : 'transparent',
      color: timeSelected ? 'white' : 'black',
      backgroundImage: timeSelected ? 'none' : `none, url(${arrowIcon})`
    },
    dateSelect: {
      backgroundColor: dateSelected ? '#495E57' : 'transparent',
      color: dateSelected ? 'white' : 'black',
    }
  }

  const inputStyles = occasion.isTouched && guests.isTouched && guests.value < 2
  ? { border: '1px solid red'}
  : {}

  if (occasion.value === 'birthday') {
    selectStyles.ocassionSelect.backgroundImage = `url(${birthdayIcon}), none`;
    selectStyles.ocassionSelect.color = 'white';
  } else if (occasion.value === 'anniversary') {
    selectStyles.ocassionSelect.backgroundImage = `url(${weddingIcon}), none`;
    selectStyles.ocassionSelect.color = 'white';
  } else if (occasion.value === 'special') {
    selectStyles.ocassionSelect.backgroundImage = `url(${specialIcon}), none`;
    selectStyles.ocassionSelect.color = 'white';
  }
  if (occasion.value === 'Choose') {
    selectStyles.ocassionSelect.backgroundColor = 'transparent'
  } else {
    selectStyles.ocassionSelect.backgroundColor = '#495E57'
  }

  const availableTimesOptions = availableTimes.map((timeObj) =>
  <option style={timeObj.style} key={timeObj.time} value={timeObj.time} disabled={!timeObj.isAvailable}>
    {timeObj.time}
  </option>
  )

  function handleDateChange(e) {
    const newDate = new Date(e.target.value)
    const newBookingData = {
      ...bookingData,
      date: {
        value: newDate,
        isTouched: true,
      },
    }
    handleChange(newBookingData)
    setDateSelected(true)
  }

  function handleTimeChange(e) {
    const newBookingData = {
      ...bookingData,
      timeState: e.target.value
    }
    handleChange(newBookingData)
    setTimeSelected(true)
  }


function handleRequestMessageChange(e) {
  const newBookingData = {
    ...bookingData,
    requestMessage: {
      value: e.target.value
    }
  }
  handleChange(newBookingData)
}

function handleIncrement() {
  if (guestsValue < 10) {
    setGuestsValue((prev) => prev + 1);
    handleChange({
      ...bookingData,
      guests: {
        value: guestsValue + 1,
        isTouched: true,
      },
    });
  }
}

function handleDecrement() {
  if (guestsValue > 1) {
    setGuestsValue((prev) => prev - 1);
    handleChange({
      ...bookingData,
      guests: {
        value: guestsValue - 1,
        isTouched: true,
      },
    });
  }
}

  return (
    <>
      <form
      className="formContainer"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(bookingData)
      }}
      >
        <fieldset>
          <h1 className='heading pBold-18'> Reserve a Table </h1>
          <div className='guestsInput'>
            <div>
              <label htmlFor='guests'>
                  Diners <sup>*</sup>
              </label>
            </div>
            <div
            className='guestsInputButtons'
            >
              <button className='guestsButton' type='button' onClick={handleDecrement}>-</button>
              <input
                className='guest'
                type='number'
                placeholder='1'
                min='1'
                max='10'
                id='guests'
                value={guestsValue}
                onBlur={(e) => handleInputChange(e, 'guests', bookingData, handleChange)}
                style={{...inputStyles}}
              />
              <button className='guestsButton' type='button' onClick={handleIncrement}>+</button>
            </div>
           </div>
          {guests.isTouched && guests.value < 2 ? (
              <ErrorMessage message='Minimum number of guests for a reservation is 2.'/>
          ) : null }
          <label htmlFor='res-date'>
            Choose Date <sup>*</sup>
            </label>
          <input
            type='date'
            id='res-date'
            value={new Date(date.value).toISOString().slice(0, 10)}
            onChange={handleDateChange}
            style={selectStyles.dateSelect}
          />
          <label htmlFor='res-time'>
            Choose Time <sup>*</sup>
          </label>
          <select
          id='res-time'
          value={timeState}
          onChange={handleTimeChange}
          style={selectStyles.timeSelect}
          >
            {availableTimesOptions}
          </select>
          <label htmlFor='occasion'>
            Occasion <sup>*</sup>
            </label>
          <select
          id='occasion'
          value={occasion.value}
          onChange={(e) => handleInputChange(e, 'occasion', bookingData, handleChange)}
          onBlur={(e) => handleInputChange(e, 'occasion', bookingData, handleChange)}
          style={selectStyles.ocassionSelect}
          >
            <option value='Choose'>Choose your Motivation</option>
            <option value='birthday'>Birthday</option>
            <option value='anniversary'>Anniversary</option>
            <option value='special'>Special Meeting</option>
          </select>
          {occasion.isTouched && occasion.value === 'Choose' ? (
              <ErrorMessage message='Please select one of the available options.'/>
          ) : null }
          <label htmlFor='request'>
              Special Request
          </label>
          <textarea
          id='request'
          value={request.value}
          onChange={handleRequestMessageChange}
          onBlur={handleRequestMessageChange}
          />
          <button
            style={
              guests.value < 2 || guests.value > 10 || occasion.value === 'Choose'
                ? { ...formStyles.button, ...formStyles.buttonDisabled }
                : formStyles.button
            }
            disabled={guests.value < 2 || guests.value > 10 || occasion.value === 'Choose'}
            onClick={handleSubmit}
          >
            Add Personal Details
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default BookingForm;


