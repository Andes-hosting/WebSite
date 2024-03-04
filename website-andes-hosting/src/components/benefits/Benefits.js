import React from 'react'
import "./Benefits.scss"
import BenefitsCard from '../benefitsCard/BenefitsCard'
import PlayIcon from '../playIcon/PlayIcon.js'
import PrivateIcon from "../privateIcon/PrivateIcon.js"
import SupportIcon from "../supportIcon/SupportIcon.js"
import TutorialIcon from "../tutorialIcon/TutorialIcon.js"
import MapIcon from "../mapIcon/MapIcon.js"
import PerformanceIcon from "../performanceIcon/PerformanceIcon.js"
import { Container, Row, Col} from 'react-bootstrap'

const Benefits = () => {
  return (
    <div className="container-benefits-page">
      <h2 className="benefits-title">¿POR QUÉ ANDES HOSTING?</h2>

      <div className="benefits-container">    
              <BenefitsCard icon={<PrivateIcon/>} title="SERVIDORES PRIVADOS" text="Disfruta de juegos con tus amigos en un entorno privado y seguro, libre de tramposos y molestias. Aquí, la diversión es pura y auténtica."/>
              <BenefitsCard icon={<PerformanceIcon/>} title="MÁXIMA PERFORMANCE" text="Juega sin límites! Nuestra CPU ilimitada garantiza un rendimiento espectacular en tus juegos. Experimenta la máxima velocidad."/>
              <BenefitsCard icon={<MapIcon/>} title="EXPERIENCIA FLUIDA" text="Nuestra ubicación es la elección perfecta para jugadores en Sudamérica, ofreciendo una latencia mínima para una experiencia de juego sin igual."/>
          
              <BenefitsCard icon={<SupportIcon/>} title="SOPORTE A TODA HORA" text="Asistencia personalizada al instante, sin necesidad de largas esperas. Resolveremos tus problemas de manera rápida y eficiente."/>
              <BenefitsCard icon={<PlayIcon/>} title="JUEGA AL INSTANTE" text="Acelera tu experiencia de juego con nuestro almacenamiento  SSD: ¡Inicia la diversión en segundos y sumérgete en el juego sin demoras."/>
              <BenefitsCard icon={<TutorialIcon/>} title="TUTORIALES SENCILLOS" text="Domina la instalación y configuración de tu servidor con pasos sencillos, para disfrutar de un juego sin complicaciones de principio a fin."/> 
      </div>
    </div>
  )
}

export default Benefits