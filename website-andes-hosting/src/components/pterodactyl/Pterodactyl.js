import React, { useState } from 'react'
import "./Pterodactyl.scss"
import image_logo from "../../img/ptero_img.png"
import screen1 from "../../img/image_screen1.png"
import screen2 from "../../img/image_screen2.png"
import fullscreen1 from "../../img/image_fullscreen1.png"
import fullscreen2 from "../../img/image_fullscreen2.png"
import Modal from 'react-bootstrap/Modal';


const Pterodactyl = () => {
  const [showModalFirst, setShowModalFirst] = useState(false);

  const handleModalShowFirst = () => setShowModalFirst(true);
  const handleModalCloseFirst = () => setShowModalFirst(false);

  const [showModalSecond, setShowModalSecond] = useState(false);

  const handleModalShowSecond = () => setShowModalSecond(true);
  const handleModalCloseSecond = () => setShowModalSecond(false);

  return (
    <>
      <div className="ptero-container">
        <h2 className="ptero-title">ADMINISTRA TUS SERVIDORES CON:</h2>
        <img src={image_logo} alt="Pterodactyl logo" />
        <p className="ptero-text">Descubre la revolución en la gestión de servidores de videojuegos con Pterodactyl. Nuestra elección del panel de control Pterodactyl no solo garantiza un rendimiento excepcional y estabilidad inigualable, sino que también ofrece una interfaz intuitiva que pone el poder de la administración de servidores en manos de nuestros clientes.<span className='ptero-delete'> Con Pterodactyl, la experiencia de juego se eleva a nuevas alturas, permitiendo a nuestros usuarios tener el control total desu experiencia de hosting con facilidad y eficiencia. ¡Experimenta la excelencia en administración de servidores con Pterodactyl, solo en nuestro servicio de hosting!</span></p>
      </div>
      <div className="img-section-background">
        <div className="img-container">
          <img className="img-ptero" src={screen2} alt="Screenshot 2" width={540} onClick={handleModalShowFirst} />
          <p className="img-text">Con Pterodactyl, simplificamos la gestión de tus servidores para que puedas enfocarte en lo que realmente importa: disfrutar del juego. Nuestra plataforma de código abierto te permite visualizar y administrar fácilmente todos los servidores adquiridos en nuestro servicio. </p>
        </div>
        <div className="img-container reverse">
          <p className="img-text2">Visualiza la consola de comandos y los recursos disponibles que tienen a disposición, además de los botones “Start”, “Restart”, “Stop”. La barra de navegación en la parte superior, que les permite moverse desde la consola a otros lugares con muchas más opciones.</p>
          <img className="img-ptero" src={screen1} alt="Screenshot 1" onClick={handleModalShowSecond} />
        </div>
      </div>
      <Modal centered show={showModalFirst} onHide={handleModalCloseFirst} size='xl' >
        <Modal.Body className='p-0' >
          <img className='rounded' src={fullscreen2} alt='Screenshot 2' style={{ width: '100%', height: 'auto' }}></img>
        </Modal.Body>
      </Modal>
      <Modal centered show={showModalSecond} onHide={handleModalCloseSecond} size='xl' >
        <Modal.Body className='p-0' >
          <img className='rounded' src={fullscreen1} alt='Screenshot 1' style={{ width: '100%', height: 'auto' }}></img>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Pterodactyl