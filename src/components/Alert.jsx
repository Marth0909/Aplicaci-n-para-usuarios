import './styles/Alert.css'

const Alert = ( { setAlertClose, userDelete, deleteUser, setUserDelete } ) => {

  const handleAlertExit = () => {
    setAlertClose(true)
    setUserDelete()
  }

  const handleSuccess = () => {
    deleteUser(userDelete.id)
    setAlertClose(true)
  }

  return (
    <div className="alert">
      <div className="alert__x" onClick={handleAlertExit}>x</div>
      <div className='alert__icon__div'><i className='alert__icon bx bx-error-circle'></i></div>
      <h2 className="alert__tittle">You're sure?</h2>
      <h3 className="alert__message">Press "OK" to permanently remove <span className='alert__message--span'> { userDelete ? `${userDelete.first_name} ${userDelete.last_name}` : ''} </span></h3>
      <button className="alert__btn alert__btn--success" onClick={handleSuccess}>OK</button>
      <div className="alert__btn alert__btn--cancel" onClick={handleAlertExit}>Cancel</div>
    </div>
  )
}

export default Alert