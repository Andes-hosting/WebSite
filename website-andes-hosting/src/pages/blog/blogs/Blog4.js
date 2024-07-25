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
            <p className="fs-3">Si quieres llevar tu experiencia en Palworld al siguiente nivel, estos plugins son la clave. Aquí te dejamos los más populares y útiles para optimizar tu servidor y hacer que tus partidas sean épicas.</p>
            <br></br>
            <p className="fs-3"><strong>EssentialsX Comandos y Funciones Básica:</strong> es un must para cualquier servidor de Palworld. Con este plugin, tendrás acceso a comandos básicos y funciones esenciales para administrar tu servidor del juego. Teletransportes, kits de inicio, y mucho más, todo en uno.</p>
            <br></br>
            <p className="fs-3"><strong>WorldEdit Modificación Rápida del Mundo:</strong> te permite modificar grandes áreas del mundo en segundos. Con unos pocos comandos, puedes copiar, pegar y crear terrenos personalizados. Perfecto para construir tus bases y estructuras gigantes sin perder tiempo.</p>
            <br></br>
            <p className="fs-3"><strong>Dynmap Mapas en Tiempo Real:</strong> es un plugin que genera un mapa en tiempo real de tu servidor, accesible desde un navegador web. Ideal para grandes servidores de Palworld, te ayudará a navegar y coordinarte con tus amigos fácilmente.</p>
            <br></br>
            <p className="fs-3"><strong>LuckPerms Sistema Avanzado de Permisos:</strong> es el sistema de permisos definitivo. Controla quién puede hacer qué en tu servidor, organiza grupos y asegura que todo funcione de manera ordenada. Es altamente configurable y se integra bien con otros plugins.</p>
            <br></br>
            <p className="fs-3"><strong>Vault Gestión de Economía:</strong> Si quieres una economía en tu servidor, Vault es tu plugin. Maneja monedas y transacciones, y se integra con otros plugins económicos, creando una dinámica económica fluida en tu servidor de Palworld.</p>
            <br></br>
            <p className="fs-3">Estos plugins llevarán tu servidor de Palworld a otro nivel, haciendo la administración más sencilla y mejorando la experiencia de juego. Y recuerda, para una experiencia sin lag necesitas un hosting de videojuegos confiable ¡y nosotros somos tu mejor opción!</p>
            <br></br>
            <p className="fs-3">¡Prepárate para disfrutar de Palworld como nunca antes!</p>
        </div>
    );

    return (
        <div className="blog4">
            <NavBar/>
            <div className="container-blog4 border text-white rounded">
            <BlogContent
                title="Los Mejores Plugin para Potenciar tu Experiencia en Palworld"
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