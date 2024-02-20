import React from 'react'
import FaqItem from '../../components/faqItem/faqItem'
import { Col, Row } from 'react-bootstrap'
import faq from '../../faq'
import './FAQ.scss'

const FAQ = () => {
  return (
    <div className="FAQContainer">
      <h2 className='FAQtitle'>PREGUNTAS FRECUENTES</h2>
      <Row>
        {faq.map((item, index) => (
          <Col key={index} xs={12} sm={6} lg={6}>
            <FaqItem eventKey={index} question={item.question} answer={item.answer} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default FAQ