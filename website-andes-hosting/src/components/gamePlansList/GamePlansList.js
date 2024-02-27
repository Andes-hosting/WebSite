import React from 'react'
import PlanCard from '../planCard/PlanCard'
import { Col} from 'react-bootstrap'
import "./GamePlansList.scss"

const GamePlansList = ({game, currency}) => {
  return (
    <div  className="plansListContainer">
      <div className='gameLogo'>{game.logo}</div>

      <div className='gameListRow'> 
        {game.plans.map((plan, index) => (
          <Col key={index} xs={12} sm={6} lg={3}>
            <PlanCard plan={plan} currency={currency} />
          </Col>
        ))}
      </div>
    </div>
  )

}

export default GamePlansList