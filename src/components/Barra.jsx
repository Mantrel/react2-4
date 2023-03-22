import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ContextoGlob from '../context/ContextoGlob'

const Barra = () => {
  const { totalPedido } = useContext(ContextoGlob);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")}
        to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")}
        to="/carro">Carro [{totalPedido}]</NavLink>

    </div>
  )
}

export default Barra