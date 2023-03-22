import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ContextoGlob from '../context/ContextoGlob';

function CardPizza({ pizza }) {

  const navigate = useNavigate();

  const { pizzasPedidas, setPizzasPedidas, totalPedido, setTotalPedido } = useContext(ContextoGlob);

  const verDetalle = () => {
    navigate(`/pizza/${pizza.id}`);
  }

  const agregarPizza = (pizza) => {
    const idx = pizzasPedidas.findIndex((p) => p.id === pizza.id);

    if (idx > -1) {
      pizzasPedidas[idx].cant += 1;
      setPizzasPedidas([...pizzasPedidas]);
    } else {
      const pizzaSeleccionada = {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        cant: 1
      };
      setPizzasPedidas([...pizzasPedidas, pizzaSeleccionada]);
    }
    setTotalPedido(totalPedido + pizza.price)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <div className="lineacard"></div>
        <div>
          <p className='ingredientesTitle'>Ingredientes:</p>
          <ul className='listaing'>
            {
              pizza.ingredients.map((i) => <p key={i} className="ingredientes">🍕 {i}</p>)
            }
          </ul>
        </div>
        <div className='precio'>
          <p>$ {pizza.price}</p>
        </div>
        <div className='botones'>
          <Button variant="primary" onClick={() => verDetalle()}>Ver mas 👀</Button>
          <Button variant="danger" onClick={() => agregarPizza(pizza)}>añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;