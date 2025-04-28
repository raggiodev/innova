import '../../index.css'
import './raggiodev.css'
import { Link } from 'react-router-dom'

function Raggiodev() {
  return (
    <main className="raggiodev-container">
      <section className="raggiodev-content">
        <h1 className="raggiodev-title">Página del Profe</h1>
        <p className="raggiodev-description">
          Bienvenido a mi sección del proyecto compartido. 🚀 <br />
          Acá encontrarás mis aportes y aprender junto a todo el Club de Programación.
        </p>
        <Link className="button" to="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

export default Raggiodev
