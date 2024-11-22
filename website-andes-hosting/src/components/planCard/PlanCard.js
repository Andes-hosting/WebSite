import React from 'react';
import Card from 'react-bootstrap/Card';
import "./PlanCard.scss";
import Btn from '../btn/Btn.js';

const PlanCard = ({ plan, currency }) => {
  let dir;
  if (plan.game === 'Minecraft') {
    if (plan.name === 'BEDROCK') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    } else if (plan.name === 'JAVA VANILLA') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    } else if (plan.name === 'CON MODS') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    } else if (plan.name === 'PERSONALIZADO') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    }
  }
  if (plan.game === 'ARK') {
    if (plan.name === 'BRONCE') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    } else if (plan.name === 'PLATA') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    } else if (plan.name === 'ORO') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    } else if (plan.name === 'PERSONALIZADO') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    }
  }
  if (plan.game === 'Palworld') {
    if (plan.name === 'BRONCE') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    } else if (plan.name === 'PLATA') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    } else if (plan.name === 'ORO') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    } else if (plan.name === 'PERSONALIZADO') {
      dir = 'https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien';
    }
  }

  return (
    <Card className={plan.prominent ? "containerCard prominentCard" : "containerCard"} >
      <Card.Body className="containerCardBody">

        <div className="titleCardContainer">
          <Card.Title className="titlePack">PACK</Card.Title>
          <Card.Title className="titleCard">{plan.name}</Card.Title>
          {plan.prominent ?
            <Card.Title className="prominentLabel">EL MÁS ELEGIDO</Card.Title>
            :
            ''
          }
        </div>

        <div className="priceContainer">
          {plan.name === 'PERSONALIZADO' ?
            <>
              <Card.Subtitle className="textRam">{plan.ram} <span>RAM</span></Card.Subtitle>
              <Card.Subtitle className="textRam"><span id='Perz'>∞</span></Card.Subtitle>
            </>
            :
            <Card.Subtitle className="textRam">{plan.ram + ' GB '}<span>RAM</span></Card.Subtitle>
          }
          {plan.name === 'PERSONALIZADO' ?
            ''
            :
            <Card.Subtitle className="textPrice">{currency === 'CLP' ? '$ ' + plan.price.CLP : '$ ' + plan.price.USD + ' USD'}</Card.Subtitle>
          }
        </div>

        <div className="textBodyContainer">
          <Card.Text className="textBody"> ALMACENAMIENTO: {plan.storage} GB</Card.Text>
          <Card.Text className="textBody"> JUGADORES RECOMENDADOS: {plan.recomendedPlyers} </Card.Text>
        </div>

        <Btn text="¡ME INTERESA!" dir={dir} />


      </Card.Body>
    </Card>
  );
};

export default PlanCard;