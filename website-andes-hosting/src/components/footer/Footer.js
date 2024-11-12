import React, {useState} from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import Bubble from '../bubble/Bubble'
/* import Tyc from '../../pages/Tyc/Tyc' */

function Footer() {
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);

  const handleHelpClick = () => {
    setIsBubbleOpen(!isBubbleOpen); // Cambia el estado de Bubble al hacer clic en el enlace
  };

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
    <section className='footerConainer'>
      <section className='links'>
        <div className='juegos'>
          <h3>Juegos</h3>
          <Link to={"/#plans"} onClick={() => handleLinkClick('planes')}>Minecraft</Link>
          <Link to={"/#plans"} onClick={() => handleLinkClick('planes')}>ARK</Link>
          <Link to={"/#plans"} onClick={() => handleLinkClick('planes')}>Palworld</Link>
        </div>

        <div className='planes'>
          <h3>Planes</h3>
          <a href='https://shlink.andes-hosting.com/P8POu' target='_blank'>Planes Fijos</a>
          <a href='https://shlink.andes-hosting.com/miFoG' target='_blank'>Planes Personalizados</a>
        </div>

        <div className='aboutUs'>
          <h3>Nosotros</h3>
          <Link to={"/#about"} onClick={() => handleLinkClick('about')}>¿Por qué Andes Hosting?</Link>
          <Link to='/Tyc' onClick={ () => smoothScrollTarget('top')} >Términos y Condiciones</Link>
          <Link to='/Tyc' onClick={ () => smoothScrollTarget('top')} >Politica de Privacidad</Link>
        </div>

        <div className='Soporte'>
          <h3>Soporte</h3>
          <span onClick={handleHelpClick} >Necesito ayuda</span>
          <Link to={"/#faq"} onClick={() => handleLinkClick('faq')}>Preguntas frecuentes</Link>
        </div>

        <div className='RedesSociales'>
          <h3>Redes Sociales</h3>
          <a href='https://shlink.andes-hosting.com/MmRsK' target='_blank'>Discord</a>
          <a href='https://shlink.andes-hosting.com/LvEPt' target='_blank'>Instagram</a>
          <a href='https://shlink.andes-hosting.com/FCKcq' target='_blank'>TikTok</a>
          <a href='https://shlink.andes-hosting.com/XQRLu' target='_blank'>Facebook</a>
          <a href='https://shlink.andes-hosting.com/Nx38s' target='_blank'>LinkedIn</a>
          <a href='https://shlink.andes-hosting.com/UUQdF' target='_blank'>GitHub</a>
        </div>

      </section>

      <section className='copyright'>
        <p>Copyright ©2024 AndesHosting. Todos los derechos reservados.</p>
      </section>
      <Bubble isOpen={isBubbleOpen} toggleDropdown={handleHelpClick} />
    </section>
  )
}

export default Footer