import React from 'react'
import CheckIcon from '../checkicon/CheckIcon'
import "./CheckListItem.scss"

const CheckListItem = ({text}) => {
  return (
    <div className= "check-list-item">
        <CheckIcon/>
        {text}
    </div>
  )
}

export default CheckListItem