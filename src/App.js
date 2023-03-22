import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { useEffect, useState } from 'react';
import Barra from './components/Barra';
import Home from "./views/Home.jsx"
import Carro from "./views/Carrito.jsx"
import Detalles from "./views/Pizza.jsx"
import ContextoGlob from "./context/ContextoGlob.jsx"


function App() {

  const [pizzas, setPizzas] = useState([]);
  const [pizzasPedidas, setPizzasPedidas] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);

  const getPizzas = async () => {
    const res = await fetch('http://localhost:3000/pizzas.json')
    const data = await res.json();

    setPizzas(data);
  }

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div>
      <ContextoGlob.Provider value={{pizzas,pizzasPedidas,setPizzasPedidas,totalPedido,setTotalPedido}}>
        <BrowserRouter>
        <Barra></Barra>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/carrito" element={<Carro></Carro>}></Route>
            <Route path="/pizza/:id" element={<Detalles></Detalles>}></Route>
          </Routes>
        </BrowserRouter>
      </ContextoGlob.Provider>
    </div>
  );
}

export default App;
