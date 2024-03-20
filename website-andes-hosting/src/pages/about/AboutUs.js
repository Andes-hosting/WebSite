import React from 'react'
import "./AboutUs.scss"
import map from "../../img/latam.png"
import chile from '../../img/chile.png'
import ChileFlag from '../../components/chileFlag/ChileFlag.js'

import Pterodactyl from '../../components/pterodactyl/Pterodactyl'
import Btn from '../../components/btn/Btn'
import RocketIcon from '../../components/rocketIcon/RocketIcon'
import InfoLink from '../../components/infolink/InfoLink.js'
import Benefits from '../../components/benefits/Benefits.js'
import BtnSection from '../../components/btnSection/BtnSection.js'

const AboutUs = () => {
  return (
    <>
      <Benefits />
      <div className='gradien'>
        <div className="location-container">
          <img className='map' src={map} alt="Sudamérica" />
          <div className="location-text-container">
            <h3 className="location-over-title">Tenemos</h3>
            <h2 className="location-title">LA UBICACIÓN IDEAL</h2>
            <p className="location-text">Experimenta el rendimiento excepcional de nuestros servidores, combinado con una ubicación estratégica que asegura la mejor latencia en Sudamérica. Ofrecemos un servicio premium a un costo incomparable en toda la región. <span className='about-bold'>Tu éxito es nuestra prioridad!</span></p>
            <p className='about-location'>Valparaíso, Chile <ChileFlag /></p>
            {/* <p className='about-location-ms'>123ms</p> */}
          </div>
        </div>
      </div>
      <div className="about-container">
        <h2 className="about-title">¿QUIÉNES SOMOS?</h2>
        <p className="about-text">En Andes, <span className='about-bold'>somos una comunidad apasionada y comprometida</span>. Con un equipo joven y entusiasta, nos esforzamos por proporcionar una <span className='about-bold'>experiencia de alta calidad a un precio asequible</span>. Nuestro compromiso humano y nuestra transparencia son los pilares de nuestro negocio, y nos esforzamos por construir relaciones sólidas y duraderas con nuestros clientes.<br/><br/> Al igual que la majestuosidad de la <span className='about-bold'>cordillera de los Andes</span>, nuestro objetivo es <span className='about-bold'>unir a los países sudamericanos en una comunidad de jugadores vibrante y unida</span>. ¡Únete a nosotros en este viaje y experimenta la diferencia con Andes!</p>
        <BtnSection text="¡Contratar un servidor ahora!" href="#planes">
          <RocketIcon />
        </BtnSection>
        {/* <InfoLink/> */}
      </div>
      <Pterodactyl />
    </>
  )
}

export default AboutUs