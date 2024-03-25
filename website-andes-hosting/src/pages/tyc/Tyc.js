import React, { useEffect } from "react";
import './Tyc.scss'
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";

const Tyc = () => {
    useEffect(() => {
        smoothScrollTarget('top')
    }, []);

    const smoothScrollTarget = (targetId) => {
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="tyc" id="top">
            <div className="tyc-container">
                <a href="/"><Logo className='tyc-logo' width={280} height={100} /></a>
                <div className="tyc-text">
                    <h1>Términos y Condiciones</h1>
                    <h2>Cuenta</h2>
                    <p>Andes se reserva el derecho de cancelar la cuenta del usuario en caso de infracción de algún término establecido.

                        El usuario acepta el acuerdo de licencia de usuario final del videojuego correspondiente, como por ejemplo, el EULA de Minecraft.
                    </p>
                    <h2>Pagos</h2>
                    <p>Los servicios solicitados a Andes no se activarán hasta que se reciba el pago y se verifique su autenticidad, pudiendo requerir una revisión manual. En caso de detectarse un pago fraudulento o sospechoso, nos reservamos el derecho de solicitar documentación para verificar la legitimidad del comprador.

                        Cualquier contracargo/charge-back malintencionado resultará en la cancelación inmediata de la cuenta y una investigación subsiguiente.
                    </p>
                    <h2>Cancelaciones del servicio</h2>
                    <p>Pasados 30 días desde la finalización del periodo del servicio, se eliminarán todos los datos relacionados en nuestros servidores.

                        Para cancelar los servicios, el usuario debe realizar la solicitud dentro de los primeros 3 días después del pago, a través de nuestra área de facturación en <a href="https://shlink.andes-hosting.com/04VDQ">contacto@andes-hosting.com</a>. Consulte la política de reembolsos para obtener información detallada.</p>
                    <h2>Uso del servicio</h2>
                    <p>Los servidores solo pueden utilizarse para los fines designados y no se permite la instalación ni el uso de programas de terceros no autorizados. El intento de acceso o interferencia con los datos de otros clientes resultará en la suspensión de los servicios.

                        No se permite eludir deliberadamente ninguna limitación o restricción del servicio, como la ubicación, límites de RAM, restricciones de CPU o Slots para servidores de juego. Cualquier intento de modificar u omitir estas restricciones resultará en la suspensión de los servicios y la cancelación de la cuenta.
                    </p>
                    <h2>Responsabilidades</h2>
                    <p>Andes se reserva el derecho de restringir, alterar o modificar tarifas, beneficios, reglas, regulaciones, ofertas especiales, términos y condiciones de los servicios en cualquier momento y sin previo aviso.

                        Debido a la naturaleza de nuestros servicios, pueden surgir problemas como impactos en el rendimiento, corrupción de datos, pérdida de datos y retrasos, que están fuera de nuestro control. No somos responsables de estos problemas, aunque haremos esfuerzos razonables para ayudar en su resolución.
                    </p>
                    <h2>Servicio</h2>
                    <p>El servicio implica exclusivamente el alquiler de servidores propiedad de Andes. Nos reservamos el derecho de modificar cualquier información en el sitio en cualquier momento.

                        No podemos garantizar la ausencia total de vulnerabilidades en el sitio. La explotación de cualquier área de <a href="https://web.andes-hosting.com">https://web.andes-hosting.com</a> o <a href="https://shlink.andes-hosting.com/zrDNe">https://panel.andes-hosting.com</a> resultará en la cancelación permanente de la cuenta.</p>
                    <h2>Reembolso</h2>
                    <p>Todos los reembolsos son a discreción de Andes, así como el método de reembolso. Se otorgarán reembolsos solo en casos de errores atribuibles a nuestra parte. Esto incluye, pero no se limita a problemas de rendimiento por sobrecarga de nodos, falta de respuestas por parte de Andes durante 72 horas o más, y problemas técnicos irremediables en el software del servidor de juego.

                        Andes no se hace responsable de la configuración de los servidores de juego; nuestro compromiso es proporcionar el entorno para su uso. Haremos todo lo posible para garantizar la mejor experiencia y resolver cualquier inconveniente.

                        No se proporcionarán reembolsos en caso de cancelación de cuenta debido a violación de los Términos de Servicio.
                    </p>
                    <h2>Política de Privacidad</h2>
                    <p>No venderemos ni distribuiremos los datos de nuestros clientes, ni los utilizaremos de manera maliciosa. Los registros de nuestros servidores se utilizarán con fines de análisis interno y monitoreo de Andes. Bajo ninguna circunstancia se publicarán o venderán estos registros a terceros.<br></br><br></br>Para obtener más información sobre los procesos de análisis de datos en Andes, transparentamos dichos procesos publicándolos como código abierto en <a href="https://shlink.andes-hosting.com/UUQdF">GitHub</a>.</p>
                </div>
                <Footer className='tyc-footer'></Footer>
            </div>
        </div>
    )
}

export default Tyc