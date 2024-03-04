import React from 'react'
import './Btn.scss'


const Btn = ({children, text, otherClass=''}) => {
  return (
    <a href='#' className={`btn ${otherClass}`}>
        {children}
        {text}
    </a>
  )
}

export default Btn