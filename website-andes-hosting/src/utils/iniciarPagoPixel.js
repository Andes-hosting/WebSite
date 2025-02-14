import ReactPixel from 'react-facebook-pixel';

const iniciarPago = () => {
    // Parámetros del evento
    const eventDate = new Date().toISOString();  // Fecha del evento
    const eventName = 'Iniciar Pago';            // Nombre del evento
    const eventUrl = window.location.href;      // URL de origen del evento
    const eventSource = 'Origen de acción';     // Origen de la acción (ejemplo: "Button Click")

    // Parámetros del cliente
    const userAgent = navigator.userAgent;      // Agente de usuario del cliente (no cifrado)

    // Envía el evento a Facebook Pixel
    ReactPixel.track('InitiateCheckout', {
        event_date: eventDate,
        event_name: eventName,
        event_url: eventUrl,
        event_source: eventSource,
        user_agent: userAgent
    });
};

export default iniciarPago;