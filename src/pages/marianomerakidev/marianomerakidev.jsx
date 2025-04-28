import '../../index.css'
import './marianomerakidev.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';


function Marianomerakidev() {
    const [fortune, setFortune] = useState("");

    const fortunes = [
        "Hoy es un gran día para comenzar algo nuevo.",
        "Confía en tu intuición.",
        "Cada paso pequeño te acerca a un gran logro.",
        "Tu actitud define tu dirección.",
        "Algo maravilloso está por suceder.",
        "El éxito está en los pequeños detalles.",
        "Cree en ti mismo y todo será posible.",
        "Cada día es una nueva oportunidad.",
        "Sigue tus sueños con determinación.",
        "La vida siempre te sorprende si dejas la puerta abierta."
    ];

    const generateFortune = () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        setFortune(fortunes[randomIndex]);
    };

    return (
        <>
            <h2>🍪 Marianete anduvo aquí 🍪</h2>
            
            <div className="fortune-box">
                {fortune && <p>{fortune}</p>}
            </div>

            <button className="button" onClick={generateFortune}>
                Obtener una frase
            </button>
            
            <br />
            <Link className="button" to="/">Volver al inicio</Link>
        </>
    );
}

export default Marianomerakidev;
