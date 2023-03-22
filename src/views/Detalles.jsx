import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ContextoGlob from '../context/ContextoGlob';

const Detalles = ({ pizza }) => {

  const { id } = useParams();

  const { pizzas, agregarPizza } = useContext(ContextoGlob);

  const pizzaDetalle = pizzas.filter((p) => p.id === id);
  

  return (
    <Card style={{ width: '18rem' }}>
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
  );
}

export default Detalles
