import './index.css'

function App() {

  return (
    <>
      <div className="principal-container">
        <h1 className="principal-title">Proyecto Compartido - Club de Programación</h1>
        <div className="buttons-container">
          <a className="button" href="/pages/colaborador1/ruta">Colaborador 1</a>
          <a className="button" href="/pages/colaborador2/ruta">Colaborador 2</a>
          <a className="button" href="/pages/colaborador3/ruta">Colaborador 3</a>
          <a className="button" href="/pages/colaborador4/ruta">Colaborador 4</a>
          <a className="button" href="/pages/colaborador5/ruta">Colaborador 5</a>
        </div>
      </div>
    </>
  )
}

export default App;
