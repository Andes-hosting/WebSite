import NavBar from "../../../components/navbar/NavBar"
import Footer from "../../../components/footer/Footer"
import './Blog2.scss'
import kimetsu from '../../../img/kimetsu2.webp'
import BlogContent from "../components/blogContent/BlogContent"
import SidebarNet from "../../../components/sidebarNet/SidebarNet"


const Blog2 = () => {
    const blogContent = (
        <div className="container-fluid d-flex flex-column text-start p-1 m-1">
            <br></br>
            <p className="fs-2">El anime Demon Slayer: ¡Kimetsu no Yaiba hace su debut en los juegos de mesa virtuales! Disponible a partir del 16 de julio de 2024 y vendido por Bandai Namco, podrás disfrutar de eventos y minijuegos con hasta cuatro jugadores, tanto offline como online, y competir para convertirte en el espadachín cazador de demonios más fuerte. </p>
            <br></br>
            <p className="fs-2">Al igual que en los servidores de video juegos, la diversión multijugador está garantizada. En este juego, avanzarás en el tablero virtual lanzando los dados y visitando ubicaciones icónicas del anime como Mt. Fujikasane y Asakusa. Durante el día, te prepararás con eventos y minijuegos, mientras que por la noche buscarás demonios para derrotar. ¡Tu objetivo es convertirte en el mejor cazador de demonios, donde tu seas el más fuerte!</p>
            <br></br>
            <p className="fs-2">Elige entre tus personajes favoritos del Cuerpo de Exterminio de Demonios, incluidos Tanjiro, Zenitsu, Inosuke y los Hashira. Nezuko también aparece en el tablero para apoyar a los jugadores como un personaje de soporte. Este juego recuerda la personalización y elección de personajes como en otros juegos de calidad premium.</p>
            <br></br>
            <p className="fs-2">Enfréntate a poderosos demonios como Akaza en diversos minijuegos, ya sea compitiendo o colaborando. Únete a otros jugadores para derrotar a estos formidables enemigos y demuestra que eres el mejor cazador de demonios. Experimenta la misma emoción y colaboración que al jugar con tus personajes favoritos del manga. Para los aficionados que buscan una experiencia de juego fluida y sin interrupciones, contar con un buen servicio de hosting de videojuegos es esencial. Asegúrate de tener la mejor conexión y rendimiento en tus partidas multijugador para disfrutar al máximo de tus juegos favoritos.</p>
        </div>
    );

    return (
        <div className="blog2">
            <NavBar/>
            <div className="container-blog2 border text-white rounded">
            <BlogContent
                title="Demon Slayer: Kimetsu no Yaiba llega al Tablero Virtual"
                date="10 de Julio, 2024"
                image={kimetsu}
                content={blogContent}
            />
            </div>
            <Footer/>
            <SidebarNet/>
        </div>
    )
}

export default Blog2