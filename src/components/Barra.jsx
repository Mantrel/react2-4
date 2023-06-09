import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ContextoGlob from '../context/ContextoGlob'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Barra = () => {
  const { totalPedido } = useContext(ContextoGlob);
  return (
    /*<div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")}
        to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "viewActiva" : "view")}
        to="/carro">Carro [{totalPedido}]</NavLink>

    </div>*/
    <Navbar className='navbackground' expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div className='titleNav'>
            🍕 Pizzería Mamma Mia!
          </div>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <NavLink to="/carrito" className="carrito" > 🛒 $ {totalPedido} </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Barra