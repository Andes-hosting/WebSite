import React from 'react'
import "./SidebarNet.scss"
import IgIcon from '../igIcon/IgIcon.js'
import DsIcon from '../dsIcon/DsIcon.js'
import TtIcon from '../ttIcon/TtIcon.js'
import YtIcon from '../ytIcon/YtIcon.js'
import XICON from '../xIcon/XIcon.js'

const SidebarNet = () => {
  return (
    <div class="sidebarContainer">
        <YtIcon/>
        <DsIcon/>
        <XICON/>
        <TtIcon/>
        <IgIcon/>
    </div>
  )
}

export default SidebarNet