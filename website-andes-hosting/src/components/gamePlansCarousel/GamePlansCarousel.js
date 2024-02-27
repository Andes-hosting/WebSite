import React from 'react'
import games from "../../games.js"
import "./GamePlansCarousel.scss"
import GamePlansList from '../gamePlansList/GamePlansList.js'
import Carousel from 'react-bootstrap/Carousel';

const GamePlansCarousel = ({currency='CLP'}) => {

  return (
    <div className='carouselPlansContainer'>
      <Carousel interval={10000000000000}>  
          <Carousel.Item>
            <GamePlansList game={games.minecraft} currency={currency}/>     
          </Carousel.Item>

          <Carousel.Item>
            <GamePlansList game={games.ark} currency={currency}/>
          </Carousel.Item>

          <Carousel.Item>
            <GamePlansList game={games.palworld} currency={currency}/>
          </Carousel.Item>
      </Carousel>
  </div>



/*     <div className="game-list-container">
    <Container className="game-list-container">
      <Row>
        <Col>
          <h2 className="titlePlan">NUESTROS PLANES</h2>
          <GamePlansList game={games.minecraft} />
          <GamePlansList game={games.ark} />
          <GamePlansList game={games.palworld} />
        </Col>
      </Row>
    </Container>
    </div> */
  )

}

export default GamePlansCarousel