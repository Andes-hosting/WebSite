import React from 'react'
import "./BenefitsCard.scss"
import Card from 'react-bootstrap/Card'

const BenefitsCard = ({icon,title,text}) => {
  return (
    <Card className="benefits-card">
      <Card.Body className="benefits-text-container">
        <div className="icon-container">
            {icon}
        </div>
        <div>
          <Card.Title className="benefits-card-title">{title}</Card.Title>
          <Card.Text className="benefits-card-text">{text}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

export default BenefitsCard