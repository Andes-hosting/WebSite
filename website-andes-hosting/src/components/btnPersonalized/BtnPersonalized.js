import React from 'react'
import './Btn.scss'


const BtnPersonalized = ({children, text, otherClass='', link}) => {
  return (
    <a href='https://shlink.andes-hosting.com/miFoG' target='_blank' className={`btn ${otherClass}`}>
        {children}
        {text}
    </a>
  )
}

export default BtnPersonalized