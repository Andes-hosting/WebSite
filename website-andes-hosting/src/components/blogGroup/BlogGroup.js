import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import PalworldImage from './Palworld.webp';
import image_fullscreen1 from './image_fullscreen1.png';
import { Link } from 'react-router-dom';

const BlogGroup = () => {
    return (
        <CardGroup>
            <Card className="mb-5 mx-3 rounded overflow-hidden">
                <Link to='/blog/blog1' style={{ textDecoration: 'none', color: 'inherit'}}>
                <Card.Img variant="top" src={PalworldImage} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Link>
            </Card>
            <Card className="mb-5 mx-3 rounded overflow-hidden">
                <Card.Img variant="top" src={image_fullscreen1} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="mb-5 mx-3 rounded overflow-hidden">
                <Card.Img variant="top" src={PalworldImage} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default BlogGroup