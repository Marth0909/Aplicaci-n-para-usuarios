import { useEffect } from 'react'
import './styles/Modal.css'

const Modal = ( {comment} ) => {

  return (
    <div className="modal">
    <div className='modal__icon__div'><i className='modal__icon bx bx-check-circle'></i></div>
    <h2 className="modal__tittle">Success!</h2>
    <h3 className="modal__message"> {comment} <span className='modal__message--span'></span></h3>
  </div>

  )
}

export default Modal