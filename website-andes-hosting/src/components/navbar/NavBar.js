import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss'
import Logo from '../logo/Logo';
import smoothScroll from '../../utils/smoothScroll';

const NavBar = () => {
  /* const handleLogoClick = () => {
    window.location.reload();
  }; */
  const smoothScrollTarget = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const handleLinkClick = (targetId) => {
    setTimeout(() => {
      smoothScrollTarget(targetId)
    }, 200)
  }
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" >
        <Container className='container'>
          <Navbar.Brand as={Link} to='/' /* onClick={handleLogoClick} */>
            <Logo class="logo-andes" /* width={280} height={100} */ />
            {/* <img className='logo' src={logo} alt='Andes Hosting' /> */}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav">
              <Nav.Link><Link to="/" onClick={() => handleLinkClick('planes')} className='navLinks'>Planes</Link></Nav.Link>
              <Nav.Link><Link to="/" onClick={() => handleLinkClick('about')} className='navLinks'>¿Quiénes somos?</Link></Nav.Link>
              <Nav.Link><Link to="/" onClick={() => handleLinkClick('faq')} className='navLinks'>FAQ</Link></Nav.Link>
              <Nav.Link><Link to="/blog" className='navLinks'>Blog</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar