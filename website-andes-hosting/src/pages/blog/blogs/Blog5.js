import NavBar from "../../../components/navbar/NavBar"
import Footer from "../../../components/footer/Footer"
import './Blog5.scss'
import mine from '../../../img/minecraft-blog.webp'
import BlogContent from "../components/blogContent/BlogContent"
import SidebarNet from "../../../components/sidebarNet/SidebarNet"

const Blog5 = () => {
    const blogContent = (
        <div className="container-fluid d-flex flex-column text-start p-1 m-1">
            <br></br>
            <p className="fs-3">Si estás buscando llevar tu servidor de Minecraft al siguiente nivel, has llegado al lugar correcto. En este blog, te presentamos los mejores plugins que transformarán tu experiencia de juego y la de tus amigos. Desde herramientas esenciales para la administración del servidor hasta divertidas adiciones que harán que tu mundo de Minecraft sea aún más emocionante. Prepárate para descubrir cómo estos plugins pueden optimizar tu servidor, mejorar el rendimiento y ofrecer nuevas formas de jugar en el vibrante mundo de Minecraft. ¡Vamos a sumergirnos en el universo de los plugins y a mejorar nuestra experiencia de juego juntos!</p>
            <br></br>
            <ol className="fs-3">
                <li>EssentialsX: Este plugin es esencial para cualquier servidor de Minecraft. Proporciona comandos básicos como fly, tpa, tp, home, spawn, y muchas más funciones esenciales para la administración del servidor.</li>
                <li>LuckPerms: Ideal para gestionar permisos en tu servidor de Minecraft. Puedes crear rangos, cambiar prefijos y agregar permisos desde la configuración o la consola.</li>
                <li>WorldEdit: Un plugin muy popular que permite modificar rápidamente grandes áreas del mundo del juego. Es perfecto para crear warps más rápido y es un imprescindible en cualquier hosting de Minecraft.</li>
                <li>MultiverseCore: Este plugin te permite importar, eliminar y crear múltiples mundos dentro de tu servidor de Minecraft. Es ideal para aquellos que quieren ofrecer diversas experiencias de juego.</li>
                <li>Vault: Plugin de economía es un básico para todos los jugadore de Minecraft. Integra sistemas de economía con otros plugins para manejar monedas y transacciones.</li>
                <li>ClearLag: Este plugin es esencial para evitar el lag en tu servidor de Minecraft. Remueve automáticamente los ítems tirados y otras entidades que pueden causar lag.</li>
                <li>HolographicDisplays: Permite crear hologramas con información del servidor, enlaces, y otras variables. Añade un toque especial y visual a tu servidor de Minecraft.</li>
                <li>Citizens: Este plugin te permite crear NPCs personalizados para mejorar la interacción. Perfecto para añadir misiones y personajes en tu servidor de Minecraft.</li>
                <li>Essentials Chat: Un complemento del EssentialsX, que te permite modificar el chat del servidor de Minecraft de manera avanzada. Ideal para mantener la comunicación ordenada y personalizable.</li>
                <li>WorldGuard: Protege ciertas partes de tu mundo, como el punto de generación, al evitar la edición o la generación de monstruos en un área. Es vital para la seguridad en cualquier servidor de Minecraft.</li>
                <li>PlotMe: Permite crear un mundo donde cada jugador puede tener su parcela para construir su casa sin necesidad de hacerla en el mundo Survival. Perfecto para servidores de Minecraft con múltiples jugadores.</li>
                <li>Dynmap: Crea un mapa en tiempo real del servidor de Minecraft que los jugadores pueden ver en un navegador web. Es ideal para grandes comunidades en LATAM que quieran visualizar el progreso del mundo.</li>
                <li>ViaVersion: Permite que las versiones más nuevas y más antiguas de Minecraft se conecten a tu servidor. Ideal para mantener tu servidor de Minecraft actualizado y accesible para todos los jugadores.</li>
                <li>GriefPrevention: Un complemento de reclamación de terrenos que permite a los jugadores reclamar fácilmente parcelas y prevenir el sabotaje. Fundamental para mantener la paz en tu servidor de Minecraft </li>
            </ol>
            <br></br>
            <p className="fs-3">Con estos plugins, tu servidor de Minecraft estará optimizado, seguro y lleno de características útiles que mejorarán la experiencia de juego para todos los jugadores en Latinoamérica. ¡Anímate a probarlos y lleva tu servidor al siguiente nivel!</p>
        </div>
    );

    return (
        <div className="blog5">
            <NavBar/>
            <div className="container-blog5 border text-white rounded">
            <BlogContent
                title="¡Bienvenidos, gamers de Latinoamérica!"
                date="01 de Agosto, 2024"
                image={mine}
                content={blogContent}
            />
            </div>
            <Footer/>
            <SidebarNet/>
        </div>
    )
}

export default Blog5