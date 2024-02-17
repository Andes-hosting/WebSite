import React from 'react'
import games from "./../../games.js"
import { Container, Row, Col} from 'react-bootstrap'
import GameList from '../gameList/GameList.js'
import "./GameListContainer.scss"

const GameListContainer = () => {

  return (
    <div className="game-list-container">
    <Container className="game-list-container">
      <Row>
        <Col>
          <h2 className="titlePlan">NUESTROS PLANES</h2>
          <GameList game={games.minecraft} />
          <GameList game={games.ark} />
          <GameList game={games.palworld} />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default GameListContainer