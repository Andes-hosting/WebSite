import React from 'react'
import Card from 'react-bootstrap/Card'
import "./PlanCard.scss"
import Btn from '../btn/Btn.js'
import BtnPersonalized from '../btnPersonalized/BtnPersonalized.js'

const PlanCard = ({plan, currency}) => {
  let dir;
  if (plan.game === 'Minecraft') {
    if (plan.name === 'BEDROCK') {
      dir = 'https://shlink.andes-hosting.com/P8POu?videojuego=Minecraft&plan_minecraft=Pack%20Bedrock'
    } else if (plan.name === 'JAVA VANILLA'){
      dir = 'https://shlink.andes-hosting.com/P8POu?videojuego=Minecraft&plan_minecraft=Pack%20Java%20Vanilla'
    } else if (plan.name === 'CON MODS') {
      dir = 'https://shlink.andes-hosting.com/P8POu?videojuego=Minecraft&plan_minecraft=Pack%20con%20Mods'
    } else if (plan.name === 'PERSONALIZADO') {
      dir = 'https://shlink.andes-hosting.com/miFoG?videojuego=Minecraft'
    }
  }
  if (plan.game === 'ARK') {
    if (plan.name === 'BRONCE') {
      dir = 'https://shlink.andes-hosting.com/P8POu?videojuego=Ark:%20Survival%20Ascended&plan_ark_survival_ascended=Pack%20Bronce'
    } else if (plan.name === 'PLATA'){
      dir = 'https://shlink.andes-hosting.com/P8POu?videojuego=Ark:%20Survival%20Ascended&plan_ark_survival_ascended=Pack%20Plata'
    } else if (plan.name === 'ORO') {
      dir = 'https://shlink.andes-hosting.com/P8POu?videojuego=Ark:%20Survival%20Ascended&plan_ark_survival_ascended=Pack%20Oro'
    } else if (plan.name === 'PERSONALIZADO') {
      dir = 'https://shlink.andes-hosting.com/miFoG?videojuego=Ark:%20Survival%20Ascended&ram=13&disk=16&port=3&advanced=Avanzadas'
    }
  }
  if (plan.game === 'Palworld') {
    if (plan.name === 'BRONCE') {
      dir = 'https://shlink.andes-hosting.com/P8POu?videojuego=Palworld&plan_palworld=Pack%20Bronce'
    } else if (plan.name === 'PLATA'){
      dir = 'https://shlink.andes-hosting.com/P8POu?videojuego=Palworld&plan_palworld=Pack%20Plata'
    } else if (plan.name === 'ORO') {
      dir = 'https://shlink.andes-hosting.com/P8POu?videojuego=Palworld&plan_palworld=Pack%20Oro'
    } else if (plan.name === 'PERSONALIZADO') {
      dir = 'https://shlink.andes-hosting.com/miFoG?videojuego=Palworld&ram=8&disk=6'
    }
  }

  return (
  <Card className= { plan.prominent? "containerCard prominentCard" : "containerCard"} >
    <Card.Body className="containerCardBody">

      <div className="titleCardContainer">
        <Card.Title className="titlePack">PACK</Card.Title>
        <Card.Title className="titleCard">{plan.name}</Card.Title>
        {plan.prominent?
        <Card.Title className="prominentLabel">EL MÁS ELEGIDO</Card.Title>
        :
        ''
        }
      </div>

      <div className="priceContainer">
        {plan.name === 'PERSONALIZADO'?
        <>
          <Card.Subtitle className="textRam">{plan.ram} <span>RAM</span></Card.Subtitle>
          <Card.Subtitle className="textRam"><span id='Perz'>∞</span></Card.Subtitle>
        </>
        :
          <Card.Subtitle className="textRam">{plan.ram + ' GB '}<span>RAM</span></Card.Subtitle>
        }
        {plan.name === 'PERSONALIZADO'?
        ''
        :
        <Card.Subtitle className="textPrice">{currency==='CLP'? '$ '+plan.price.CLP : '$ ' + plan.price.USD + ' USD'}</Card.Subtitle>
        }
      </div>

      <div className="textBodyContainer">
        <Card.Text className="textBody"> ALMACENAMIENTO: {plan.storage} GB</Card.Text>
        <Card.Text className="textBody"> JUGADORES RECOMENDADOS: {plan.recomendedPlyers} </Card.Text>
      </div>

      <Btn text="¡ME INTERESA!" dir={dir} />


    </Card.Body>
  </Card>
  )
}

export default PlanCard