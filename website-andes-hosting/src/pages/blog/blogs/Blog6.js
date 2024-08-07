import NavBar from "../../../components/navbar/NavBar"
import Footer from "../../../components/footer/Footer"
import './Blog6.scss'
import ark_ascended from '../../../img/ark-ascended.webp'
import BlogContent from "../components/blogContent/BlogContent"
import SidebarNet from "../../../components/sidebarNet/SidebarNet"

const Blog6 = () => {
    const blogContent = (
        <div className="container-fluid d-flex flex-column text-start p-1 m-1">
            <br></br>
            <p className="fs-3">¿Quieres darle un toque especial a tu servidor de videojuegos de ARK: Survival Ascended? Personalizar tu experiencia es súper fácil con los mods de ARK. Estos están disponibles en CurseForge y se configuran super fácil en tu servidor.</p>
            <br></br>
            <p className="fs-3">Desde nuevos edificios hasta dinosaurios increíbles, hay cientos de mods para probar. ¿Te preguntas cuáles son los mejores? Aquí te traemos nuestros favoritos. ¡Vamos a sumergirnos en los mejores mods de ARK!</p>
            <br></br>
            <ol className="fs-3">
                <li>Klinger Additional Rustic Building</li>
                <br></br>
                <p>La construcción es esencial en ARK: Survival Ascended. Si te encanta diseñar y construir, Klinger Additional Rustic Building es para ti. Este mod añade techos, paredes, rampas/escaleras y un montón de detalles interiores. Construye la base más épica en ARK con tus amigos.</p>
                <br></br>
                <li>Upgrade Station</li>
                <br></br>
                <p>¿Quieres ahorrar recursos? El mod Upgrade Station es perfecto. Mejora la calidad de tus armas, armaduras y sillas de montar fácilmente. Todo se puede mejorar, incluso Tek y otros objetos modificados. ¡No más desperdiciar materiales!</p>
                <br></br>
                <li>Primal Chaos</li>
                <br></br>
                <p>¿Listo para un desafío? Primal Chaos añade 6 niveles de nuevas criaturas, con más de 200 bichos nuevos. Estas criaturas vienen en todas las formas y tamaños, especialmente los jefes finales. Este mod cambiará completamente cómo juegas ARK: Survival Ascended.</p>
                <br></br>
                <li>Super Spyglass Plus</li>
                <br></br>
                <p>¡La información es poder en ARK! Super Spyglass Plus te da todas las estadísticas y datos que necesitas sobre casi todo en el juego. Además, es compatible entre plataformas y tiene muchas combinaciones de teclas y configuraciones para usar.</p>
                <br></br>
                <li>Admin Panel</li>
                <br></br>
                <p>Para administrar tu servidor de ARK, el mod Admin Panel es una gran ayuda. Puedes ejecutar comandos y acciones rápidamente. Prohíbe, expulsa o mata jugadores con un clic, encuentra y destruye estructuras, genera objetos y mucho más.</p>
                <br></br>
            </ol>
            <br></br>
            <p className="fs-3">Instalar mods en tu <strong>servidor de ARK</strong> es extremadamente fácil y sencillo. En Andes Hosting, puedes usar todos los mods que creas necesario y tener una diversión sin fin</p>
        </div>
    );

    return (
        <div className="blog6">
            <NavBar/>
            <div className="container-blog6 border text-white rounded">
            <BlogContent
                title="¡Descubre los Mejores Mods para ARK: Survival Ascended!"
                date="07 de Agosto, 2024"
                image={ark_ascended}
                content={blogContent}
            />
            </div>
            <Footer/>
            <SidebarNet/>
        </div>
    )
}

export default Blog6