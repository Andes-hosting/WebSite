import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.scss'
import logo from '../../img/logo_andes.png'

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container className='container'>

          <Navbar.Brand href="home"><img src={logo} alt='Andes Hosting'/></Navbar.Brand>
        
          <Nav className="me-auto nav" >
            <Nav.Link href="Planes" className='navLinks'>Planes</Nav.Link>
            <Nav.Link href="¿Quiénes somos?" className='navLinks'>¿Quiénes somos?</Nav.Link>
            <Nav.Link href="Soporte" className='navLinks'>FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar