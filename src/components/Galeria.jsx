import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import CardPizza from "./CardPizza.jsx"
import ContextoGlob from '../context/ContextoGlob'

const Galeria = () => {

  const { pizzas } = useContext(ContextoGlob)

  return (
    <>
      <Row >
        {   
          pizzas.map((pizza) => {
            return <Col key={pizza.id}><CardPizza pizza={pizza}></CardPizza></Col>
          })
        }
      </Row>
    </>
  )
}

export default Galeria
