import './index.css'

import { Routes, Route, Link } from 'react-router-dom'

import Raggiodev from './pages/raggiodev/Raggiodev'
import Kar_st from './pages/kar_st/Kar_st'
import Marianomerakidev from './pages/marianomerakidev/Marianomerakidev'
import Jonnyfebl from './pages/jonnyfebl/Jonnyfebl'
import Juani_afk from './pages/juani_afk/Juani_afk'

function App() {
  return (
    <>
      <div className="principal-container">
        <h1 className="principal-title">Proyecto Compartido - Club de Programación</h1>
        <div className="buttons-container">
          <Link className="button" to="/raggiodev">raggiodev</Link>
          <Link className="button" to="/kar_st">kar_st</Link>
          <Link className="button" to="/marianomerakidev">marianomerakidev</Link>
          <Link className="button" to="/jonnyfebl">jonnyfebl</Link>
          <Link className="button" to="/juani_afk">juani_afk</Link>
        </div>
      </div>

      <Routes>
        <Route path="/raggiodev" element={<Raggiodev />} />
        <Route path="/kar_st" element={<Kar_st />} />
        <Route path="/marianomerakidev" element={<Marianomerakidev />} />
        <Route path="/jonnyfebl" element={<Jonnyfebl />} />
        <Route path="/juani_afk" element={<Juani_afk />} />
      </Routes>
    </>
  )
}

export default App;
