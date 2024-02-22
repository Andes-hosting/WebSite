import React from 'react'
import Navbar from '../navbar/NavBar.js'
import CarouselHeader from '../carousel/Carousel.js'
import Sidebar from '../sidebarNet/SidebarNet.js'

function Header() {
  return (
    <>
      <Navbar/>
      <CarouselHeader/>
      <Sidebar/>
    </>  
  )
}

export default Header