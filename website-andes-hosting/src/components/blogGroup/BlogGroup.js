import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import zonezs from '../../img/zenless-zone-zero.webp'
import proximamente from '../../img/Proximamente.webp'
import { Link } from 'react-router-dom';

const BlogGroup = () => {
    return (
        <CardGroup>
            <Card className="mb-5 mx-3 rounded overflow-hidden">
                <Link to='/blog/Zenless-Zone-Zero-La-Nueva-Joya-de-HoYoverse' style={{ textDecoration: 'none', color: 'inherit'}}>
                <Card.Img variant="top" src={zonezs} />
                <Card.Body>
                    <Card.Title className='fs-2'>Zenless Zone Zero: La Nueva Joya de HoYoverse</Card.Title>
                    <Card.Text className='fs-4'>
                    Una aventura Cyberpunk que llega para impactar nuestras pantallas. Adentrémonos a un Futuro Distópico con Combates Inolvidables.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Fecha: 02 de Julio del 2024</small>
                </Card.Footer>
                </Link>
            </Card>
            <Card className="mb-5 mx-3 rounded overflow-hidden">
                <Card.Img variant="top" src={proximamente} className='img-thumbnail' />
                <Card.Body>
                    <Card.Title>Proximamente</Card.Title>
                    <Card.Text>
                        {/* This card has supporting text below as a natural lead-in to
                        additional content.{' '} */}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{/* Last updated 3 mins ago */}</small>
                </Card.Footer>
            </Card>
            <Card className="mb-5 mx-3 rounded overflow-hidden">
                <Card.Img variant="top" src={proximamente} className='img-thumbnail' />
                <Card.Body>
                    <Card.Title>Proximamente</Card.Title>
                    <Card.Text>
                        {/* This is a wider card with supporting text below as a natural lead-in
                        to additional content. */}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{/* Last updated 3 mins ago */}</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default BlogGroup