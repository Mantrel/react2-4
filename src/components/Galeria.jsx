import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import CardPizza from "./CardPizza.jsx"
import ContextoGlob from '../context/ContextoGlob'

const Galeria = () => {

  const { pizzas } = useContext(ContextoGlob)

  return (
    <div className='container'>
      <Row >
        {   
          pizzas.map((pizza) => {
            return <Col key={pizza.id} className="galeriapizzas"><CardPizza pizza={pizza}></CardPizza></Col>
          })
        }
      </Row>
    </div>
  )
}

export default Galeria
