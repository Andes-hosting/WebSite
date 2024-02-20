import React from 'react'
import "./CheckList.scss"
import Btn from '../btn/Btn'
import CheckListItem from '../checklistitem/CheckListItem'
import RocketIcon from '../rocketIcon/RocketIcon'
import InfoLink from '../infolink/InfoLink'

const CheckList = () => {
  return (
    <div className="check-list">
        <h2 className='check-list-title'>JUEGA SIN FRONTERAS</h2>
        < div className="check-list-items">
            
            <CheckListItem text="Servidores privados para jugar con tu grupo de amigos"/>
            <CheckListItem text="CPU ilimitada para un excelente rendimiento en cualquier juego"/>
            <CheckListItem text="Baja latencia para Latinoamérica, permitiendo una mejor experiencia de juego"/>
            <CheckListItem text="Soporte personalizado y ayuda en todo momento, sin tickets ni largas esperas"/>
            <CheckListItem text="Servidores con almacenamiento SSD: inicia los juegos mucho más rápido"/>
            <CheckListItem text="Tutoriales de instalación y configuración de tu servidor"/>
        </div>
        <div className="check-list-items">
         <Btn text="¡Contratar un servidor ahora!">
            <RocketIcon/>
          </Btn>
          <InfoLink/>
        </div>
    </div>
  )
}

export default CheckList