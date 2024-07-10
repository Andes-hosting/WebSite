import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import zonezs from '../../img/zenless-zone-zero.webp'
import kimetsu from '../../img/kimetsu.webp'
/* import proximamente from '../../img/Proximamente.webp' */
import { Link } from 'react-router-dom';
import './BlogGroup.scss'

const BlogGroup = () => {
    return (
        <CardGroup>
            <Card className="mb-5 mx-3 rounded overflow-hidden">
                <Link to='/blog/Demon-Slayer-Kimetsu-no-Yaiba-llega-al-Tablero-Virtual' style={{ textDecoration: 'none', color: 'inherit'}}>
                <Card.Img variant="top" src={kimetsu} className='equal-height-img' />
                <Card.Body>
                    <Card.Title className='fs-1'>Demon Slayer: Kimetsu no Yaiba llega al Tablero Virtual</Card.Title>
                    <Card.Text className='fs-4'>
                    Conviértete en el cazador Más Fuerte en este Nuevo Juego de Mesa virtual.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Fecha: 10 de Julio del 2024</small>
                </Card.Footer>
                </Link>
            </Card>
            <Card className="mb-5 mx-3 rounded overflow-hidden">
                <Link to='/blog/Zenless-Zone-Zero-La-Nueva-Joya-de-HoYoverse' style={{ textDecoration: 'none', color: 'inherit'}}>
                <Card.Img variant="top" src={zonezs} className='equal-height-img' />
                <Card.Body>
                    <Card.Title className='fs-1'>Zenless Zone Zero: La Nueva Joya de HoYoverse</Card.Title>
                    <Card.Text className='fs-4'>
                    Una aventura Cyberpunk que llega para impactar nuestras pantallas. Adentrémonos a un Futuro Distópico con Combates Inolvidables.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Fecha: 02 de Julio del 2024</small>
                </Card.Footer>
                </Link>
            </Card>{/*
            <Card className="mb-5 mx-3 rounded overflow-hidden">
                <Card.Img variant="top" src={proximamente} className='img-fluid' />
            </Card> */}
        </CardGroup>
    )
}

export default BlogGroup