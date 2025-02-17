import ReactPixel from 'react-facebook-pixel';

const contactoPixel = () => {
    // Parámetros del evento
    const eventDate = new Date().toISOString();  // Fecha del evento
    const eventName = 'Contacto';            // Nombre del evento
    const eventUrl = window.location.href;      // URL de origen del evento
    const eventSource = 'burbuja de contacto';     // Origen de la acción (ejemplo: "Button Click")
    const dataProcessingOptions = ['LDU'];     // Opciones de procesamiento de datos (Ejemplo: Limited Data Use)

    // Parámetros del cliente
    const firstName = null;
    const lastName = null;
    const email = null;
    const phone = null;
    const city = null;
    const ip = null;
    const userAgent = navigator.userAgent;      // Agente de usuario del cliente (no cifrado)

    // Envía el evento a Facebook Pixel
    ReactPixel.track('Contact', {
        event_date: eventDate,
        event_name: eventName,
        event_url: eventUrl,
        event_source: eventSource,
        data_processing_options: dataProcessingOptions,

        // Información del cliente
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        city: city,
        ip_address: ip,
        user_agent: userAgent
    });
};

export default contactoPixel;