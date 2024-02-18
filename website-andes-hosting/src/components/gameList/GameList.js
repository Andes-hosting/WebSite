import React from 'react'
import CardGame from '../cards/CardGame'
import { Col, Row } from 'react-bootstrap'
import "./GameList.scss"

const GameList = ({game}) => {
  return (
    <Row>
      <div className='gameLogo'>{game.logo}</div>
      <div className='gameListRow'> 
        {game.plans.map((plan, index) => (
          <Col key={index} xs={12} sm={6} lg={3}>
            <CardGame plan={plan} />
          </Col>
        ))}
      </div>
    </Row>
  )
}

export default GameList