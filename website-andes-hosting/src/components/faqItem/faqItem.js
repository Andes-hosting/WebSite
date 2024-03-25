import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './faqItem.scss'
/* import DOMPurify from 'dompurify'; library to sanitize strings with html inputs for security */

const FaqItem = ({question, answer, eventKey, url, answer2}) => {

  /* const ANSWER = DOMPurify.sanitize(answer); */

    const link = url === undefined ? null : <a href={url} target='_blank'>este enlace</a>
  return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body >{answer}{link}{answer2}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
}

export default FaqItem