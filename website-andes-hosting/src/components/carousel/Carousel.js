import './Carousel.scss';
import Carousel from 'react-bootstrap/Carousel';

import ark from '../../img/carousel/ark.png'
import minecraft from '../../img/carousel/minecraft.png'
import palworld from '../../img/carousel/palworld.png'
import Btn from '../btn/Btn';
import RocketIcon from '../rocketIcon/RocketIcon';



const CarouselHeader = () => {

    return (
        <div className='carouselContainer'>

            <div className='carouselInfo'>
                <h1>Bienvenido a <span>ANDES HOSTING</span></h1>
                <p>Tu mejor aliado para servidores de videojuegos. Con CPU ilimitada y hosting de baja latencia, garantizamos una experiencia de juego sin igual. Asistencia personalizada y servidores privados para una diversión libre de trolls. Únete ahora y lleva tu experiencia de juego al siguiente nivel.</p>
                <Btn text="¡Contratar un servidor ahora!">
                    <RocketIcon/>
                </Btn>
            </div>

            <Carousel interval={3000}>  
                <Carousel.Item>
                    <img className='imgs' src={palworld}/>    
                </Carousel.Item>

                <Carousel.Item>
                    <img className='imgs'  src={ark}/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='imgs' src={minecraft}/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default CarouselHeader