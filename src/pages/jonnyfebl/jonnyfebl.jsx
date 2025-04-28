import '../../index.css'
import './jonnyfebl.css'
import { Link } from 'react-router-dom'

function Jonnyfebl() {
  return (
    <div className="jonnyfebl-page">
      <nav className="navbar">
        <Link className="button" to="/">Volver al Inicio</Link>
      </nav>

      <header className="header">
        <h1 className="main-title">Géneros Musicales Derivados del Rock N' Roll</h1>
        <img

        />
      </header>

      <section className="content">
        <h2 className="section-title">Rock n' Roll:</h2>
        <p>
          Para empezar esta lista tenemos primero que nada al que empieza al rock, el
          dichoso Rock n' Roll, con raíces del blues, coutry, soul, folk, y jazz, a partir
          estas manifestaciones, con diferentes cantantes y con la exprecion "Rock N Roll" -que era una frase simbolica de la gente revelde de ese tiempo, Elvis presley, Alan Freed, etc.
          estos hacian un estilo mas duro, rudo, desprolijo y simple de el blues, rock a billy, jazz, folk y conjuntos de caracteristicas de otros generos.
          de este genero salen:
        </p>
        <h1>PRIMERA OLA DE ROCK</h1>
        <h2> blues rock, jazz rock, folk rock, country rock:</h2>
        <p>esta primera ola entra todo lo que seria el comienzo de la manifestacion,</p>
        <h2>Blues rock</h2>
        <p>se caracteriza por ser uno de los mas influyentes en el rock duro, con un estilo saturado, desprolijo y acelerado, romantico y en algunos casos
          hasta violento.
          esto varia mucho dependiendo la musica, eric clapton, BB king o jimi hendrix
        </p>
        <h2>jazz rock:
          para resumir esto, es lo mismo que el blues rock, solo que mas tranquilo, romantico, compejo y experimental

        </h2>
      </section>
    </div>
  )
}

export default Jonnyfebl
