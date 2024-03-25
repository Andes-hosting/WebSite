import React from 'react'
import Navbar from '../navbar/NavBar.js'
import CarouselHeader from '../carousel/Carousel.js'
import Sidebar from '../sidebarNet/SidebarNet.js'
import BannerTop from '../bannerTop/BannerTop.js'
import './Header.scss'

function Header() {
  return (
    <>
      <BannerTop/>
      <Navbar/>
      <CarouselHeader/>
      <Sidebar/>
      {/* <Btn otherClass='helpBtn'>
        <img src={helpIcon} alt='botón de ayuda'/>
      </Btn> */}
    </>
  )
}

export default Header