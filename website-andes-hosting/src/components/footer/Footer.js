import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import smoothScroll from '../../utils/smoothScroll'

function Footer() {
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
          <a href='#'>Planes Fijos</a>
          <a href='#'>Planes Personalizados</a>
        </div>

        <div className='aboutUs'>
          <h3>¿Quiénes somos?</h3>
          <a href='#'>¿Por qué Andes Hosting?</a>
        </div>

        <div className='Soporte'>
          <h3>Soporte</h3>
          <a href='#'>Necesito ayuda</a>
          <a href='#'>Preguntas frecuentes</a>
        </div>

        <div className='RedesSociales'>
          <h3>Redes Sociales</h3>
          <a href='#'>Instagram</a>
          <a href='#'>TikTok</a>
          <a href='#'>Facebook</a>
          <a href='#'>LinkedIn</a>
          <a href='#'>GitHub</a>
        </div>

      </section>

      <section className='copyright'>
        <p>Copyright ©2024 AndesHosting. Todos los derechos reservados.</p>
      </section>

    </section>
  )
}

export default Footer