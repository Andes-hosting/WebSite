import React from 'react'
import "./InfoLink.scss"
import ChevronRight from '../chevronright/ChevronRight'

const InfoLink = () => {
  return (
    <div className="info-link-container">
        <a className="info-link" href="!#">Conocer más sobre Andes Hosting<ChevronRight/></a>
    </div>
  )
}

export default InfoLink