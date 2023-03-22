import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ContextoGlob from '../context/ContextoGlob';

const Pizza = ({ pizza }) => {

  const { id } = useParams();

  const { pizzas, agregarPizza, pizzasPedidas, setPizzasPedidas, totalPedido, setTotalPedido } = useContext(ContextoGlob);

  const pizzaDetalle = pizzas.filter((p) => p.id === id);

  


  return (
    /*<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizzaDetalle[0].img} />
      <Card.Body>
        <Card.Title>{pizzaDetalle[0].name}</Card.Title>
        <div>
          <h5>Ingredientes:</h5>
          <ul>
            {
              pizzaDetalle[0].ingredients.map((i, e) => <li key={e}>🍕 {i}</li>)
            }
          </ul>
        </div>
        <div>
          <h4>$ {pizzaDetalle[0].price}</h4>
        </div>
        <Button variant="danger" onClick={() => agregarPizza(pizza)}>añadir 🛒</Button>
      </Card.Body>
    </Card>
    */

    <div className='container'>
      <div className='pizzaDetalles'>

        <img className='w-50' src={pizzaDetalle[0].img} />

        <div className='flexPizza'>

          <div className='precioPizzaDetalle'>
            <h3>{pizzaDetalle[0].name}</h3>
          </div>
          <div className="lineaDetalle"></div>
          <div className='descPizzaDetalle'>
            <p>{pizzaDetalle[0].desc}</p>
          </div>
          <div>
            <h5>Ingredientes:</h5>
            <ul>
              {
                pizzaDetalle[0].ingredients.map((i, e) => <li key={e}>🍕 {i}</li>)
              }
            </ul>
          </div>
          <div>
            <h4>$ {pizzaDetalle[0].price}</h4>
          </div>
          <Button variant="danger" onClick={() => agregarPizza(pizza)}>añadir 🛒</Button>


        </div>

      </div>
    </div>
  );
}

export default Pizza
