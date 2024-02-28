import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <section className='footerConainer'>

      <section className='links'>

        <div className='minecraftHosting'>
            <h3>MinecraftHosting</h3>
            <a href='#'>Contratar un servidor</a>
        </div>
        
        <div className='juegos'>
          <h3>Juegos</h3>
          <a href='#'>Minecraft</a>
          <a href='#'>ARK</a>
          <a href='#'>Palworld</a>
        </div>

        <div className='planes'>
          <h3>Planes</h3>
          <a href='#'>Minecraft</a>
          <a href='#'>ARK</a>
          <a href='#'>Palworld</a>
        </div>

        <div className='aboutUs'>
          <h3>¿Quiénes somos?</h3>
          <a href='#'>¿Por qué Andes Hosting?</a>
        </div>

        <div className='Soporte'>
          <h3>Soporte</h3>
          <a href='#'>Necesito ayuda</a>
          <a href='#'>Guías y tutoriales</a>
          <a href='#'>Preguntas frecuentes</a>
        </div>

      </section>

      <section className='copyright'>
        <p>Copyright ©2024 AndesHosting. Todos los derechos reservados.</p>
      </section>

    </section>
  )
}

export default Footer