import React from 'react'
import './Btn.scss'


const Btn = ({ children, text, otherClass='' }) => {
  return (
    <a href='https://shlink.andes-hosting.com/P8POu' target='_blank' className={`btn ${otherClass}`}>
        {children}
        {text}
    </a>
  )
}

export default Btn