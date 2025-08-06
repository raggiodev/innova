import '../../index.css'
import './raggiodev.css'
import { Link } from 'react-router-dom'

function Raggiodev() {
  return (
    <main className="raggiodev-container">
      <section className="raggiodev-content">
        <h1 className="raggiodev-title">Página del Profe</h1>
        <p className="raggiodev-description">
          Bienvenido a la sección del profe raggiodev.<br />
          Usa esta plantilla para crear tu propia página personal.<br />
          Éxitos! 🫡
        </p>
        <Link className="button" to="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

export default Raggiodev
