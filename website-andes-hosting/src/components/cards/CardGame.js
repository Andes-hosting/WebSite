import React from 'react'
import Card from 'react-bootstrap/Card'
import "./CardGame.scss"
import Btn from '../btn/Btn.js'

const CardGame = ({plan}) => {
  return (
  <Card className="containerCard">
    <Card.Body className="containerCardBody">
      <Card.Title className="titleCard">PACK {plan.name}</Card.Title>
      <Card.Subtitle className="titleCard">{plan.ram} GB RAM</Card.Subtitle>
      <Card.Subtitle className="titleCard">${plan.price}</Card.Subtitle>
      <Card.Text> ALMACENAMIENTO: {plan.storage} GB</Card.Text>
      <Card.Text> JUGADORES RECOMENDADOS: {plan.recomendedPlyers} </Card.Text>
      <Btn text="¡ME INTERESA!"/>
    </Card.Body>
  </Card>
  )
}

export default CardGame