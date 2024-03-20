import React, { useState } from 'react'
import games from "../../games.js"
import "./GamePlansCarousel.scss"
import GamePlansList from '../gamePlansList/GamePlansList.js'
import Carousel from 'react-bootstrap/Carousel';

const GamePlansCarousel = ({currency='CLP'}) => {
  const [interval, setInterval] = useState(5000);

  const handleSlide = () => {
    setInterval(10000);
  }

  return (
    <div className='carouselPlansContainer'>
      <Carousel interval={interval} onSlide={handleSlide}>
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