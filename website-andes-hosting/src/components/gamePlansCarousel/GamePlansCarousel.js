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

  )

}

export default GamePlansCarousel