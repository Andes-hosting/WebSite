import NavBar from "../../../components/navbar/NavBar"
import Footer from "../../../components/footer/Footer"
import './Blog3.scss'
import eden from '../../../img/Eden-Genesis.webp'
import BlogContent from "../components/blogContent/BlogContent"
import SidebarNet from "../../../components/sidebarNet/SidebarNet"

const Blog3 = () => {
    const blogContent = (
        <div className="container-fluid d-flex flex-column text-start p-1 m-1">
            <br></br>
            <p className="fs-3">Este juego de acción y plataformas en 2D, creado por Aeternum Game Studios, estará disponible el 6 de agosto de 2024 para la gran mayoría de plataformas incluidos PC. Y para los que juegan en Nintendo Switch, habrá que esperar hasta septiembre. Si te gustan los mundos futuristas y los desafíos estilo metroidvania, este juego es para ti.</p>
            <br></br>
            <p className="fs-3">En Edén Genesis, serás Leah Anderson, una cíborg que lucha contra una enfermedad mortal causada por sus implantes cibernéticos. La historia te enganchará desde el primer minuto. En un futuro dominado por mega corporaciones, Leah se somete a un tratamiento experimental para encontrar una cura. Durante el juego, tendrás que superar emocionantes pruebas para desbloquear el potencial de su mente y limpiar sus implantes de corrupción.</p>
            <br></br>
            <p className="fs-3">El juego destaca por su ritmo frenético y su amplio mundo para explorar, lleno de desafíos y puzles que pondrán a prueba las habilidades de combate y plataformas de los jugadores. Con controles precisos y un equilibrio entre accesibilidad y desafíos opcionales, Edén Genesis ofrece una experiencia gratificante tanto para jugadores casuales como para los más experimentados. A medida que Leah adquiere nuevas habilidades y libera enlaces neuronales, los jugadores podrán mejorar sus tiempos de finalización en las distintas pruebas.</p>
            <br></br>
            <p className="fs-3">Pero eso no es todo. Edén Genesis también incluye un modo multijugador con crossplay, para que puedas enfrentar desafíos junto a tus amigos sin importar en qué plataforma jueguen. Recomendamos un buen servidor de videojuegos para disfrutar de la mejor experiencia multijugador. Edén Genesis promete ser uno de los juegos más épicos del año, así que no te lo pierdas.</p>
            <br></br>
            <p className="fs-3">Como dato la banda sonora, es simplemente espectacular. Si estás en Latinoamérica, marca el 6 de agosto en tu calendario y prepárate para sumergirte en esta increíble aventura futurista.</p>
        </div>
    );

    return (
        <div className="blog3">
            <NavBar/>
            <div className="container-blog3 border text-white rounded">
            <BlogContent
                title="¡Eden Genesis: ¡La Aventura que No Te Puedes Perder!"
                date="19 de Julio, 2024"
                image={eden}
                content={blogContent}
            />
            </div>
            <Footer/>
            <SidebarNet/>
        </div>
    )
}

export default Blog3