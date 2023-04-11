import './styles.css'

const ErrorMessage = (props) => {
    return (
      <p className='fieldError'>{props.message}</p>
    )
  }

  export default ErrorMessage