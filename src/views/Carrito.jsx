import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import ContextoGlob from '../context/ContextoGlob'

const Carrito = () => {

  const { pizzasPedidas, setPizzasPedidas, totalPedido } = useContext(ContextoGlob);

  const disminuirCantidad = (id) => {
    const idx = pizzasPedidas.findIndex((p) => p.id === id);

    if (idx >= 0) {
      pizzasPedidas[idx].cant -= 1;
      setPizzasPedidas([...pizzasPedidas]);
    }
  }
  
  const aumentarCantidad = (id) => {
    const idx = pizzasPedidas.findIndex((p) => p.id === id);

    if (idx >= 0) {
      pizzasPedidas[idx].cant += 1;
      setPizzasPedidas([...pizzasPedidas]);
    }
  }


  return (
    <div className='container p-5'>

      <div className='bg-light w-75 m-autu p-5'>
        <h4>Detalles del pedido: </h4>


        {
          pizzasPedidas.map((pizza, i) => {
            return (<div key={i} className="d-flex py-2">

              <div className="d-flex w-50 justify-content-start align-items-center">
                <img src={pizza.img} width="100" alt="pizzaimg" />
                <h6 className="mb-0 text-capitalize p-2">{pizza.name}</h6>
              </div>

              <div className="d-flex w-50 justify-content-end align-items-center">
                <h6 className="mb-0 p-2 text-success w-50">
                  ${(pizza.price * pizza.cant)}
                </h6>
                <div className='justify-content-end'>
                  <Button variant='danger' onClick={() => disminuirCantidad(pizza.id)}>-</Button>
                  <strong className='px-1'> {pizza.cant} </strong>
                  <Button variant='primary' onClick={() => aumentarCantidad(pizza.id)}>+</Button>
                </div>
              </div>
            </div>
            );
          })
        }
        <p className='totalPizzas'>Total: ${totalPedido}</p>
        <Button className='d-flex flex-column' variant='success'>ir a Pagar</Button>
      </div>
    </div>
  )
}

export default Carrito
