import React from 'react'
import Card from 'react-bootstrap/Card'
import "./CardGame.scss"
import Btn from '../btn/Btn.js'

const CardGame = ({plan}) => {
  return (
  <Card className="containerCard">
    <Card.Body className="containerCardBody">
      <div className="titleCardContainer">
        <Card.Title className="titlePack">PACK</Card.Title>
        <Card.Title className="titleCard">{plan.name}</Card.Title>
      </div>
      <div className="priceContainer">
        <Card.Subtitle className="textRam">{plan.ram} <span>RAM</span></Card.Subtitle>
        <Card.Subtitle className="textPrice">{plan.price}</Card.Subtitle>
      </div>
      <div className="textBodyContainer">
        <Card.Text className="textBody"> ALMACENAMIENTO: {plan.storage} GB</Card.Text>
        <Card.Text className="textBody"> JUGADORES RECOMENDADOS: {plan.recomendedPlyers} </Card.Text>
      </div>
      <Btn text="¡ME INTERESA!"/>
    </Card.Body>
  </Card>
  )
}

export default CardGame