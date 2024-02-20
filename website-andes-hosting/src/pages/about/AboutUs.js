import React from 'react'
import "./AboutUs.scss"
import map from "../../img/latam.png"
import Pterodactyl from '../../components/pterodactyl/Pterodactyl'

const AboutUs = () => {
  return (
    <>
      <div className= "location-container">
        <img src={map} alt="Sudamérica"/>
        <div className="location-text-container">
          <h3 className="location-over-title">Tenemos</h3>
          <h2 className="location-title">LA UBICACIÓN IDEAL</h2>
          <p className="location-text">Experimenta el rendimiento excepcional de nuestros servidores, combinado con una ubicación estratégica que asegura la mejor latencia en Sudamérica. Ofrecemos un servicio premium a un costo incomparable en toda la región. <span>Tu éxito es nuestra prioridad!</span></p>
        </div>
      </div>
      <div className="about-container">
        <h2 className="about-title">¿QUIÉNES SOMOS?</h2>
        <p className="about-text">En Andes, <span>somos una comunidad apasionada y comprometida</span>. Con un equipo joven y entusiasta, nos esforzamos por proporcionar una <span>experiencia de alta calidad a un precio asequible</span>. Nuestro compromiso humano y nuestra transparencia son los pilares de nuestro negocio, y nos esforzamos por construir relaciones sólidas y duraderas con nuestros clientes. Al igual que la majestuosidad de la <span>cordillera de los Andes</span>, nuestro objetivo es <span>unir a los países sudamericanos en una comunidad de jugadores vibrante y unida</span>. ¡Únete a nosotros en este viaje y experimenta la diferencia con Andes!</p>
      </div>
      <Pterodactyl/>
    </>
  )
}

export default AboutUs