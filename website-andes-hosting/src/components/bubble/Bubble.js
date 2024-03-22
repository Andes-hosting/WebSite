import React, { useRef } from 'react'
import './Bubble.scss'
import { useState } from 'react';
import HelpIcon from '../helpIcon/HelpIcon';

const Bubble = ({ isOpen, toggleDropdown }) => {
    /* const [isOpen, setIsOpen] = useState(false);
    const bubbleRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleAnchorClick = () => {
        // Verifica que la referencia al botón exista y llama a toggleDropdown() si es así
        if (bubbleRef.current) {
            toggleDropdown();
        }
    }; */
    return (
        <div className='fixed'>
            <div class="dropup-start dropup">
                <button
                    /* ref={bubbleRef} // Asigna la referencia al botón */
                    class={`btn bubbleDefault ${isOpen ? 'bubbleOpen' : ''}`}
                    type="button"
                    onClick={toggleDropdown}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                        /* style={{ borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '52px', color: 'white', background: '#883cae', border: '#883cae' }} */>
                    <span className='bubbleIcon'><HelpIcon className='helpIcon'></HelpIcon></span>
                </button>
                <ul className={`dropdown-menu ${isOpen ? 'show speed-dial-animation' : ''} dropdown-menu-up`} >
                    <li className="dropdown-item what" style={{ animationDelay: isOpen ? '0.6s' : '0s' }}>
                        <a href="https://shlink.andes-hosting.com/9fSDH?text=Hola%20*Andes%20Hosting*,%20me%20gustaría%20hablar%20con%20alguien" target='_blank' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                            <svg className='whatsapp' xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" >
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </a>
                    </li>
                    <li className="dropdown-item tel" style={{ animationDelay: isOpen ? '0.4s' : '0s' }}>
                        <a href="https://shlink.andes-hosting.com/WhQnt" target='_blank' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                            <svg className='telegram' xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                            </svg>
                        </a>
                    </li>
                    <li className="dropdown-item tel" style={{ animationDelay: isOpen ? '0.2s' : '0s' }}>
                        <a href="https://shlink.andes-hosting.com/04VDQ" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Bubble