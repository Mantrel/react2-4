import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ContextoGlob from '../context/ContextoGlob';

function CardPizza({pizza}) {

  const navigate = useNavigate();

  const { pizzasPedidas, setPizzasPedidas, totalPedido, setTotalPedido } = useContext(ContextoGlob);

  const verDetalle = () => {
    navigate(`/detalles/${pizza.id}`);
  }

  const agregarPizza = (pizza) => {
    const idx = pizzasPedidas.findIndex((p) => p.id === pizza.id);

    if (idx > -1 ) {
      pizzasPedidas[idx].cant += 1;
      setPizzasPedidas([...pizzasPedidas]);
    } else {
      const pizzaSeleccionada = {id:pizza.id, name:pizza.name, price:pizza.price, cant:1};
      setPizzasPedidas([...pizzasPedidas, pizzaSeleccionada]);
    }
    setTotalPedido(totalPedido+pizza.price)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <div>
          <h5>Ingredientes:</h5>
          <ul>
            {
              pizza.ingredients.map((i) => <li key={i}>🍕 {i}</li>)
            }
          </ul>
        </div>
        <div>
          <h4>$ {pizza.price}</h4>
        </div>
        <Button variant="primary" onClick={() => verDetalle()}>Ver mas 👀</Button>
        <Button variant="danger" onClick={() => agregarPizza(pizza)}>añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;