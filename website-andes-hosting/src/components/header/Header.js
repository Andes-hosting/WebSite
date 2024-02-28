import React from 'react'
import Navbar from '../navbar/NavBar.js'
import CarouselHeader from '../carousel/Carousel.js'
import Sidebar from '../sidebarNet/SidebarNet.js'
import BannerTop from '../bannerTop/BannerTop.js'

function Header() {
  return (
    <>
      <BannerTop/>
      <Navbar/>
      <CarouselHeader/>
      <Sidebar/>
    </>  
  )
}

export default Header