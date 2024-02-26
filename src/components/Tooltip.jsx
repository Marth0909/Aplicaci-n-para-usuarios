import React, {useState} from 'react'
import './styles/Tooltip.css'

const Tooltip = ({ text, children}) => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div
    className='tooltip__container'
    onMouseEnter={() => setIsVisible(true) }
    onMouseLeave={() => setIsVisible(false) }
    >
        {children}
        {isVisible && <div className='tooltip'>{text}</div>}
    
    </div>
  )
}

export default Tooltip