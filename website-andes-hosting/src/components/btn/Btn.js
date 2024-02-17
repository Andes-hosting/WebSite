import React from 'react'
import './Btn.scss'


const Btn = ({children, text}) => {
  return (
    <button  className="btn">
        {children}
        {text}
    </button>
  )
}

export default Btn