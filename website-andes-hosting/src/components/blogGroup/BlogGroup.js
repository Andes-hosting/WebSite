import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import zonezs from '../../img/zenless-zone-zero.webp'
import kimetsu from '../../img/kimetsu.webp'
import eden from '../../img/Eden-Genesis.webp'
/* import proximamente from '../../img/Proximamente.webp' */
import { Link } from 'react-router-dom';
import './BlogGroup.scss'

const BlogGroup = () => {
    return (
        <CardGroup>
            <Card as={Link} to={'/blog/Eden-Genesis'} style={{ textDecoration: 'none', color: 'inherit'}} className="mb-5 mx-3 rounded overflow-hidden">
                <Card.Img variant="top" src={eden} className='equal-height-img' />
                <Card.Body>
                    <Card.Title className='fs-2'>¡Eden Genesis: ¡La Aventura que No Te Puedes Perder!</Card.Title>
                    <Card.Text className='fs-5'>
                    ¡Eden Genesis: ¡La Aventura que No Te Puedes Perder!
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Fecha: 19 de Julio del 2024</small>
                </Card.Footer>
            </Card>

            <Card as={Link} to={'/blog/Demon-Slayer-Kimetsu-no-Yaiba-llega-al-Tablero-Virtual'} style={{ textDecoration: 'none', color: 'inherit'}} className="mb-5 mx-3 rounded overflow-hidden">
                <Card.Img variant="top" src={kimetsu} className='equal-height-img' />
                <Card.Body>
                    <Card.Title className='fs-2'>Demon Slayer: Kimetsu no Yaiba llega al Tablero Virtual</Card.Title>
                    <Card.Text className='fs-5'>
                    Conviértete en el cazador Más Fuerte en este Nuevo Juego de Mesa virtual.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Fecha: 10 de Julio del 2024</small>
                </Card.Footer>
            </Card>

            <Card as={Link} to={'/blog/Zenless-Zone-Zero-La-Nueva-Joya-de-HoYoverse'} style={{ textDecoration: 'none', color: 'inherit'}} className="mb-5 mx-3 rounded overflow-hidden">
                <Card.Img variant="top" src={zonezs} className='equal-height-img' />
                <Card.Body>
                    <Card.Title className='fs-2'>Zenless Zone Zero: La Nueva Joya de HoYoverse</Card.Title>
                    <Card.Text className='fs-5'>
                    Una aventura Cyberpunk que llega para impactar nuestras pantallas. Adentrémonos a un Futuro Distópico con Combates Inolvidables.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Fecha: 02 de Julio del 2024</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default BlogGroup