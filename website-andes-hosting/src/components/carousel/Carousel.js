import './Carousel.scss';
import Carousel from 'react-bootstrap/Carousel';

import ark from '../../img/carousel/ark.png'
import minecraft from '../../img/carousel/minecraft.png'
import palworld from '../../img/carousel/palworld.png'
import RocketIcon from '../rocketIcon/RocketIcon';
import BtnSection from '../btnSection/BtnSection';



const CarouselHeader = () => {

    return (
        <div className='carouselContainer'>

            <div className='carouselInfo'>
                <h1>Bienvenido a <span>ANDES HOSTING</span></h1>
                <p>Tu mejor aliado para servidores de videojuegos. Con CPU ilimitada y hosting de baja latencia, garantizamos una experiencia de juego sin igual. Asistencia personalizada y servidores privados para una diversión libre de trolls. Únete ahora y lleva tu experiencia de juego al siguiente nivel.</p>

                <BtnSection className='carouselButton' text="¡Contratar un servidor ahora!" href="#planes" >
                    <RocketIcon className='carouselIcon' />
                </BtnSection>

            </div>

            <Carousel pause={false} fade interval={3000}>
                <Carousel.Item>
                    <img className='imgs' src={palworld} alt='Palworld'/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='imgs'  src={ark} alt='Ark'/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='imgs' src={minecraft} alt='Minecraft'/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default CarouselHeader