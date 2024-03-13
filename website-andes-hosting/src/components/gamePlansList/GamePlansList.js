import React from 'react'
import PlanCard from '../planCard/PlanCard'
import "./GamePlansList.scss"

const GamePlansList = ({game, currency}) => {
  return (
    <div  className="plansListContainer">
      <div className='gameLogo'>{game.logo}</div>

      <div className='gameListRow'>
        {game.plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} currency={currency}/>
        ))}
      </div>
    </div>
  )

}

export default GamePlansList