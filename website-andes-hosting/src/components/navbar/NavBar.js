import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss'
import logo from '../../img/logo_andes.png'

const NavBar = () => {
  
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar>
        <Container className='container'>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt='Andes Hosting' />
        </Navbar.Brand>
        <Nav className="me-auto nav">
          <Link to="/" onClick={() => smoothScroll('planes')} className='navLinks'>Planes</Link>
          <Link to="/" onClick={() => smoothScroll('about')} className='navLinks'>¿Quiénes somos?</Link>
          <Link to="/" onClick={() => smoothScroll('faq')} className='navLinks'>FAQ</Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar