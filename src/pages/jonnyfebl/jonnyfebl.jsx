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
        <h2>jazz rock:</h2>
        <p>para resumir esto, es lo mismo que el blues rock, solo que mas tranquilo, romantico, compejo y experimental
          es uno de los grandes exponentes de la musica del rock alternativo, progresivo, y todo esos generos que uno piense que es un genero "raro"</p>
        <h2>country rock</h2>
        <p>para resumir el country rock, tiene bases de el rock a billy, blues y countr
          este genero, si bien es uno de los mas influyentes, es el que mas se quedo estancado entre los 3 principales
          es influyentes en las baladas del rock, generos mas posteriores como el metal, y el rock con estilos del lejano oeste

        </p>

        <h2>folk rock:</h2>
        <p>El genero popularizado por los hippies
          con musica tranquila, atrayendo a la tradicion que tenia cada pueblo, y adaptado para que sea mas duro y protestante, con bases bluseras, jazzeras, folkcloricas, y en pocos casos country
        </p>

        <h1>Segunda OLA DE rock n ROLL</h1>
        <h2>ROCK</h2>
        <h2>surf rock:</h2>
        <p>experimentante para estilos mas hawaianos y potentes, guitarras experimentales que asimilan olas violentas del mar
          genero muy olvidado, no conocido por mas de 1 o 2 riffs
          seguramente habras escuchado el riff de guitarra de la gente surfeando, pero mas alla no va.</p>

        <h2>rock psicodelico:</h2>

        <p>el rock psicodelico -musica para mente y alma- junta las cosas mas experimentales, progresivas y estimulantes de el blues, country, folk y jazz rock
          era la epoca donde mas se experimentaba con las bases y caracteristicas de los generos anteriormente tocados
          bandas conocidas como almendra, pinkfloid, the doors fueron unas de las mas influyentes.
          genero que perdura hasta hoy en dia, y que fue bases para estilos indie y base directa para el rock progresivo, alternativo y el hard rock
        </p>

        <h2>opera-rock</h2>
        <p>aqui la gente empezaba a experimentar con cosas de la musica clasica, con voces de el soul -osea, voces encimadas en acordes- y como digo, esta epoca fue la epoca mas experimental
          y que mas ayudo a generos proximos, bandas conocidas de este genero hay como queen, raphsody, dream teather -banda mas actual-
        </p>
      </section>
    </div>
  )
}

export default Jonnyfebl
