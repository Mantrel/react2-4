import React, { useContext } from 'react'
import ContextoGlob from '../context/ContextoGlob'

const Carro = () => {

  const { pizzasPedidas } = useContext(ContextoGlob);

  return (
    <div>
      <h3>Detalles del pedido: </h3>

      <div>
        {
          pizzasPedidas.map((p) => {
            return (<div className='detallepizza'>
              <div>{p.name}</div>
              <div>{p.cant}</div>
            </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Carro
