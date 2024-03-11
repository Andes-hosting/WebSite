import React from 'react'
import './Btn.scss'
import { Link } from 'react-router-dom'
import smoothScroll from '../../utils/smoothScroll'


const BtnSection = ({ href, children, text, otherClass='' }) => {
  const handleClick = (event) => {
    // Evitar que se ejecute el comportamiento predeterminado de navegación si href comienza con #
    if (href.startsWith('#')) {
      event.preventDefault();
      // Enlaces internos - desplázate a la sección correspondiente
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth' // Desplazamiento suave
        });
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} className={`btn ${otherClass}`} >
      {children}
      {text}
    </a>
  );
};

export default BtnSection;