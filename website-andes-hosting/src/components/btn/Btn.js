import React from 'react';
import './Btn.scss';
import iniciarPago from '../../utils/iniciarPagoPixel';


const Btn = ({ children, text, otherClass = '', dir }) => {
  return (
    <a href={dir} target='_blank' className={`btn ${otherClass}`} onClick={iniciarPago}>
      {children}
      {text}
    </a>
  );
};

export default Btn;