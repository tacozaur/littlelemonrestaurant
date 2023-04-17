import { validateEmail } from "../components/BookingComponents/SecondBookingForm"

export function handleInputChange(e, field, bookingData, handleChange) {
  const newBookingData = {
    ...bookingData,
    [field]: {
      value: e.target.value,
      isTouched: true
    }
  }
  handleChange(newBookingData)

  // get the input field element by id
  const inputField = document.getElementById(field)

  // check if the input field is valid
  let isValid = true
  if (field === 'name') {
    isValid = e.target.value.length >= 4
  } else if (field === 'email') {
    isValid = validateEmail(e.target.value)
  } else if (field === 'phoneNumber') {
    isValid = e.target.value.length >= 6
  } else if (field === 'requestMessage') {

  }

  // set the background color and text color based on the validation status
  if (isValid) {
    inputField.style.backgroundColor = '#495E57'
    inputField.style.color = 'white'
  } else {
    inputField.style.backgroundColor = 'white'
    inputField.style.color = 'black'
  }
}
