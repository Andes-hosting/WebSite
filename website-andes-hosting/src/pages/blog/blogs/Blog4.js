import NavBar from "../../../components/navbar/NavBar"
import Footer from "../../../components/footer/Footer"
import './Blog4.scss'
import palw from '../../../img/palworld-blog.webp'
import BlogContent from "../components/blogContent/BlogContent"
import SidebarNet from "../../../components/sidebarNet/SidebarNet"

const Blog4 = () => {
    const blogContent = (
        <div className="container-fluid d-flex flex-column text-start p-1 m-1">
            <br></br>
            <p className="fs-3">¿Te molesta quedarte sin resistencia mientras vuelas? Con el mod <strong>Remove Flying Stamina Cost</strong>, podrás volar sin preocuparte por la resistencia. Este mod elimina el costo de resistencia al volar, permitiéndote explorar los cielos sin límites.</p>
            <br></br>
            <p className="fs-3">¿Siempre te falta espacio en tu inventario? El mod <strong>Carry Weight Increase</strong> aumenta la capacidad de carga del jugador, permitiéndote llevar más objetos contigo. Ideal para aquellos que les gusta recolectar de todo durante sus aventuras.</p>
            <br></br>
            <p className="fs-3">El mod <strong>Game Tweaks</strong> realiza varios ajustes en el juego para mejorar la experiencia de juego. Desde pequeños cambios en la jugabilidad hasta mejoras en la interfaz, este mod hace que tu tiempo en <strong>Palworld</strong> sea más fluido y agradable.</p>
            <br></br>
            <p className="fs-3">A veces, necesitas una pantalla despejada para disfrutar mejor del paisaje o para una captura de pantalla perfecta. El mod <strong>Toggle HUD</strong> te permite activar o desactivar la interfaz de usuario del juego fácilmente.</p>
            <br></br>
            <p className="fs-3">¿Dónde encontrar estos mods?</p>
            <br></br>
            <p className="fs-3">Para descubrir estos mods y muchos otros, te sugerimos visitar los siguientes sitios web:</p>
            <br></br>
            <ul>
                <li className="fs-3"><strong>Nexus Mods</strong>: Uno de los sitios más populares para encontrar mods de <strong>Palworld</strong>. Aquí puedes encontrar una gran variedad de mods, desde ajustes de juego hasta nuevas características y elementos. También encontrarás guías sobre cómo instalar los mods en tu <strong>servidor de videojuegos</strong>.</li>
                <br></br>
                <li className="fs-3"><strong>VideoGamer y Vandal</strong>: estos sitios ofrecen información detallada sobre los mejores mods para <strong>Palworld</strong> y cómo descargarlos e instalarlos.</li>
            </ul>
            <br></br>
            <p className="fs-3">Explora estos mods y mejora tu experiencia de juego en Palworld. Si buscas una experiencia sin lag, asegúrate de elegir un hosting de Palworld con recursos ilimitados y servidores dedicados sin lag ¡ósea nosotros! Y así tener una ¡Feliz aventura!</p>
        </div>
    );

    return (
        <div className="blog4">
            <NavBar/>
            <div className="container-blog4 border text-white rounded">
            <BlogContent
                title="Lleva tu juego al siguiente nivel con estos mods increíbles para Palworld"
                date="25 de Julio, 2024"
                image={palw}
                content={blogContent}
            />
            </div>
            <Footer/>
            <SidebarNet/>
        </div>
    )
}

export default Blog4