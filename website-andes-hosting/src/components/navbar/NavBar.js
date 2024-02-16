import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.scss'
import logo from '../../img/logo_andes.png'

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container className='container'>

          <Navbar.Brand href="home"><img src={logo}/></Navbar.Brand>
        
          <Nav className="me-auto nav" >
            <Nav.Link href="Minecraft hosting" className='navLinks'>Minecraft hosting</Nav.Link>
            <Nav.Link href="Juegos" className='navLinks'>Juegos</Nav.Link>
            <Nav.Link href="Planes" className='navLinks'>Planes</Nav.Link>
            <Nav.Link href="¿Quiénes somos?" className='navLinks'>¿Quiénes somos?</Nav.Link>
            <Nav.Link href="Soporte" className='navLinks'>Soporte</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar