import '../styles.css';
import '../../App.css';
import './formStyles.css'
import { handleInputChange } from '../../functions/handleInputChange';
import ErrorMessage from '../ErrorMessage';
import { formStyles } from './formStyles';

const BookingForm = ({
  availableTimes,
  updateTimes,
  handleSubmit,

  date,
  occasion,
  bookingData,
  guests,
  handleChange,
  request
}) => {

  const availableTimesOptions = availableTimes.map((timeObj) =>
  <option style={timeObj.style} key={timeObj.time} value={timeObj.time} disabled={!timeObj.isAvailable}>
    {timeObj.time}
  </option>
  )

  function handleDateChange(e) {
    const newBookingData = {
      ...bookingData,
      date: {
        value: new Date(e.target.value).toISOString().slice(0, 10),
        isTouched: true,
      }
    }
    handleChange(newBookingData)
  }

  function handleTimeChange(e) {
    const newBookingData = {
      ...bookingData,
      timeState: e.target.value
    }
    handleChange(newBookingData)
  }

  const inputStyles = occasion.isTouched && guests.isTouched && guests.value < 2
  ? { border: '1px solid red'}
  : {}


  return (
    <>
      <form
      style={{margin: '2.5rem 0 1.25rem 0'}}
      className="formContainer"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(bookingData)
      }}
      >
        <fieldset>
          <h1 className='heading pBold-18'> Reserve a Table </h1>
          <label htmlFor='guests'>
              Diners <sup>*</sup>
          </label>
          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            value={guests.value}
            onChange={(e) => handleInputChange(e, 'guests', bookingData, handleChange)}
            onBlur={(e) => handleInputChange(e, 'guests', bookingData, handleChange)}
            style={{...inputStyles}}
          />
          {guests.isTouched && guests.value < 2 ? (
              <ErrorMessage message='Minimum number of guests for a reservation is 2.'/>
          ) : null }
          <label htmlFor='res-date'>
            Choose Date <sup>*</sup>
            </label>
          <input
            type='date'
            id='res-date'
            value={date.value}
            onChange={handleDateChange}
          />
          <label htmlFor='res-time'>
            Choose Time <sup>*</sup>
          </label>
          <select
          id='res-time'
          value={availableTimes}
          onChange={handleTimeChange}
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
          >
            <option value='Choose'>Choose your Motivation</option>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
            <option value='Special'>Special Meeting</option>
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
          onChange={(e) => handleInputChange(e, 'requestMessage', bookingData, handleChange)}
          onBlur={(e) => handleInputChange(e, 'requestMessage', bookingData, handleChange)}

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


