import React, {useState} from 'react'
import GamePlansCarousel from '../../components/gamePlansCarousel/GamePlansCarousel'
import './Plans.scss'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Plans = () => {
  const [currency, setCurrency] = useState('CLP')
  
  return (
    <div className="plans">
      
      <DropdownButton id="dropdown-basic-button" title={ currency==='CLP'? `${currency} $ `: `${currency} `}>
        <Dropdown.Item onClick={()=>setCurrency('CLP')}>CLP $</Dropdown.Item>
        <Dropdown.Item onClick={()=>setCurrency('USD')}>USD</Dropdown.Item>
      </DropdownButton>

      <p>TENEMOS UN PLAN PARA CADA NECESIDAD</p>
      <h2>EXPLORA NUESTRAS OFERTAS!</h2>
      <GamePlansCarousel currency={currency}/>
    </div>
  )
}

export default Plans