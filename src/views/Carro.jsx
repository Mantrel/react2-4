import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import ContextoGlob from '../context/ContextoGlob'

const Carro = () => {

  const { pizzasPedidas } = useContext(ContextoGlob);

  return (
    <div>
      <h3>Detalles del pedido: </h3>
      <div className='bg-light w-75 m-autu p-5'>

        <div className='d-flex justofy-content-between py-2'>

          <div className='d-flex w-50 justify-content-between aling-items-center'>
            <h6 className='mb-0 text-capitalize p-2'>
              Producto:
            </h6>
          </div>

          <div className='d-flex w-50 justify-content-between aling-items-center'>
            <h6 className='mb-0 p-2 text-success w-50'>
              Subtotal
            </h6>
            <strong className='w-50'>Cantidad</strong>
          </div>

        </div>
        {
          pizzasPedidas.map((p, i) => {
            return (<div key={i} className="d-flex justify-content-between py-2">

              <div className="d-flex w-50 justify-content-between aling-items-center">
                <img src={p.img} width="300" alt="pizzaimg" />
                <h6 className="mb-0 text-capitalize p-2">{p.name}</h6>
              </div>

              <div className="d-flex w-50 justify-content-end aling-items-center">
                <h6 className="mb-0 p-2 text-success w-50">
                  ${(p.price * p.cant)}
                </h6>
                <div className='w-50'>
                  <Button variant='danger'></Button>
                  <strong className='w-50'>{p.cant}</strong>
                </div>
              </div>
            </div>
            );
          })
        }
        <strong>Total:</strong>
      </div>
    </div>
  )
}

export default Carro
