import React from 'react'
import './Btn.scss'


const Btn = ({ children, text, otherClass='', dir }) => {
  return (
    <a href={dir} target='_blank' className={`btn ${otherClass}`}>
        {children}
        {text}
    </a>
  )
}

export default Btn