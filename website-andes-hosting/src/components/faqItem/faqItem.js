import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './faqItem.scss'
import DOMPurify from 'dompurify'; /* library to sanitize strings with html inputs for security */

const FaqItem = ({question, answer, eventKey}) => {

  const ANSWER = DOMPurify.sanitize(answer);
  return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>

          <Accordion.Item eventKey={eventKey}>

            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body dangerouslySetInnerHTML={{__html: ANSWER}}></Accordion.Body>

          </Accordion.Item> 
        </Accordion>

      );
}

export default FaqItem