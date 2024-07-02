import NavBar from "../../../components/navbar/NavBar"
import Footer from "../../../components/footer/Footer"
import './Blog1.scss'
import zonez from '../../../img/zenless-zone-zero.webp'
import BlogContent from "../components/blogContent/BlogContent"
import SidebarNet from "../../../components/sidebarNet/SidebarNet"

const Blog1 = () => {
    const blogContent = (
        <div className="container-fluid d-flex flex-column text-start p-1 m-1">
            <br></br>
            <p className="fs-2">Zenless Zone Zero, el nuevo juego de acción RPG desarrollado por HoYoverse, promete revolucionar el mundo de los videojuegos con su cautivadora estética cyberpunk anime y sus intensos combates tipo hack and slash. Disponible para PC, iOS, Android y PlayStation 5, este título free-to-play nos sumerge en una metrópolis futurista y post apocalíptica, donde los jugadores deberán enfrentarse a los misteriosos Etéreos a través de mecánicas roguelike.</p>
            <br></br>
            <p className="fs-2">En Zenless Zone Zero, nos pondremos en la piel de Proxies, personajes encargados de explorar los Vacíos, dimensiones alternativas hostiles y laberínticas. Estas áreas se generan aleatoriamente, lo que nos garantiza una experiencia de juego única en cada partida. Los combates son dinámicos y espectaculares, con la posibilidad de realizar poderosos combos al combinar los ataques de los miembros del equipo.</p>
            <br></br>
            <p className="fs-2">A pesar de contar con solo 15 personajes jugables en su lanzamiento, el productor Li Zhenyu asegura que esto se debe a la prioridad de "calidad antes que cantidad". El equipo de desarrollo ha puesto un gran énfasis en hacer que el combate sea lo más original posible, lo que sin duda atraerá a los fanáticos de los juegos gacha. Además, la narrativa del juego se expandirá con el tiempo, añadiendo nuevos contenidos, personajes y escenarios.</p>
            <br></br>
            <p className="fs-2">Con su lanzamiento programado para el 4 de julio, los jugadores podrán pre descargar Zenless Zone Zero desde el 2 de julio en todos los dispositivos. Los fans de los juegos de HoYoverse, conocidos por títulos como Genshin Impact y Honkai Impact 3rd, podemos esperar una nueva aventura llena de acción, misterio y personajes carismáticos que seguramente capturará nuestra imaginación y nos brindará horas de entretenimiento.</p>
        </div>
    );

    return (
        <div className="blog1">
            <NavBar/>
            <div className="container-blog1 border text-white rounded">
            <BlogContent
                title="Zenless Zone Zero: La Nueva Joya de HoYoverse"
                date="02 de Julio, 2024"
                image={zonez}
                content={blogContent}
            />
            </div>
            <Footer/>
            <SidebarNet/>
        </div>
    )
}

export default Blog1