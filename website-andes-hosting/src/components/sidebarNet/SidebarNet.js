import React from 'react'
import "./SidebarNet.scss"
import IgIcon from '../igIcon/IgIcon.js'
import TtIcon from '../ttIcon/TtIcon.js'
import FbIcon from '../FbIcon/FbIcon.js'
import DsIcon from '../dsIcon/DsIcon.js'

const SidebarNet = () => {
  return (
    <div class="sidebarContainer">
      <DsIcon/>
      <IgIcon/>
      <TtIcon/>
      <FbIcon/>
    </div>
  )
}

export default SidebarNet