import React from 'react'
import FaqItem from '../../components/faqItem/faqItem'
import { Col, Row } from 'react-bootstrap'
import faq from '../../faq'
import './FAQ.scss'
import BtnSection from '../../components/btnSection/BtnSection'
import RocketIcon from '../../components/rocketIcon/RocketIcon'

const FAQ = () => {
  //creo 2 columnas indemendientes
  const totalItems = faq.length;
  const halfItems = Math.ceil(totalItems / 2);
  const leftColumn = faq.slice(0, halfItems);
  const rightColumn = faq.slice(halfItems, totalItems);

  return (
    <div className="FAQContainer">
      <h2 className='FAQtitle'>PREGUNTAS FRECUENTES</h2>

      <div className="FAQAcordionsContainer">

        <Row>
          <Col xs={12} sm={6} lg={6}>
            {leftColumn.map((item, index) => (
              <FaqItem key={index} eventKey={index} question={item.question} answer={item.answer} url={item.url} answer2={item.answer2} />
            ))}
          </Col>

          <Col xs={12} sm={6} lg={6}>
            {rightColumn.map((item, index) => (
              <FaqItem key={index + halfItems} eventKey={index + halfItems} question={item.question} answer={item.answer} url={item.url} answer2={item.answer2} />
            ))}
          </Col>
        </Row>
      </div>

    </div>
  )
}

export default FAQ