import '../styles.css';
import '../../App.css';
import './formStyles.css'
import { handleInputChange } from '../../functions/handleInputChange';
import ErrorMessage from '../ErrorMessage';
import { formStyles } from './formStyles';


export const validateEmail = (email) => {
  return String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

const SecondBookingForm = ({
  name,
  email,
  phoneNumber,
  bookingData,
  handleChange,
  handleSubmit
}) => {


  return (
    <>
      <form
      className="formContainer"
      style={{height: '680px', marginTop: '6rem'}}
      onSubmit={handleSubmit}
      >
        <fieldset>
          <h1 className='heading pBold-18'> Reserve a Table </h1>
          <label htmlFor='name'>
              Full Name <sup>*</sup>
          </label>
          <input
            type='text'
            placeholder='John Richard'
            id='name'
            value={name.value}
            onChange={(e) => handleInputChange(e, 'name', bookingData, handleChange)}
            onBlur={(e) => handleInputChange(e, 'name', bookingData, handleChange)}
          />
           {name.isTouched && name.value.length < 4 ? (
              <ErrorMessage message='Please Enter Your Full Name'/>
          ) : null }
          <label htmlFor='email'>
              E-mail Address <sup>*</sup>
          </label>
          <input
            type='email'
            placeholder='email@example.com'
            id='email'
            value={email.value}
            onChange={(e) => handleInputChange(e, 'email', bookingData, handleChange)}
            onBlur={(e) => handleInputChange(e, 'email', bookingData, handleChange)}
          />
           {email.isTouched && !validateEmail(email.value) ? (
              <ErrorMessage message='Please provide a real email address'/>
          ) : null }
          <label htmlFor='phoneNumber'>
              Phone Number<sup>*</sup>
          </label>
          <input
            type='tel'
            placeholder='0202 1245 3467'
            id='phoneNumber'
            value={phoneNumber.value}
            onChange={(e) => handleInputChange(e, 'phoneNumber', bookingData, handleChange)}
            onBlur={(e) => handleInputChange(e, 'phoneNumber', bookingData, handleChange)}
          />
           {phoneNumber.isTouched && phoneNumber.value.length < 6 ? (
              <ErrorMessage message='The phone number should have 6 or more characters'/>
          ) : null }
          <button
          style={
            name.value.length < 4 || !validateEmail(email.value) || phoneNumber.value.length < 6
            ? {...formStyles.button, ...formStyles.buttonDisabled}
            : formStyles.button
          }
          disabled={name.value.length < 4 || !validateEmail(email.value) || phoneNumber.value.length < 6}
          onClick={handleSubmit}
          >
            Reserve a Table
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default SecondBookingForm;


