import React, {useState} from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import smoothScroll from '../../utils/smoothScroll'
import Bubble from '../bubble/Bubble'

function Footer() {
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);

  const handleHelpClick = () => {
    setIsBubbleOpen(!isBubbleOpen); // Cambia el estado de Bubble al hacer clic en el enlace
  };

  return (
    <section className='footerConainer'>
      <section className='links'>
        <div className='juegos'>
          <h3>Juegos</h3>
          <Link to={"/"} onClick={() => smoothScroll('planes')}>Minecraft</Link>
          <Link to={"/"} onClick={() => smoothScroll('planes')}>ARK</Link>
          <Link to={"/"} onClick={() => smoothScroll('planes')}>Palworld</Link>
        </div>

        <div className='planes'>
          <h3>Planes</h3>
          <a href='https://shlink.andes-hosting.com/P8POu' target='_blank'>Planes Fijos</a>
          <a href='https://shlink.andes-hosting.com/miFoG' target='_blank'>Planes Personalizados</a>
        </div>

        <div className='aboutUs'>
          <h3>¿Quiénes somos?</h3>
          <a href='#about'>¿Por qué Andes Hosting?</a>
        </div>

        <div className='Soporte'>
          <h3>Soporte</h3>
          <span onClick={handleHelpClick} >Necesito ayuda</span>
          <a href='#faq'>Preguntas frecuentes</a>
        </div>

        <div className='RedesSociales'>
          <h3>Redes Sociales</h3>
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