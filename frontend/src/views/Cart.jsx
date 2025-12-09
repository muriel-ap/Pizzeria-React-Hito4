import { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import { capitalize, formatPrice } from "../utils/format";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increment = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="content-area my-5">
      <h2>Carrito de compras</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center my-3 border p-3 rounded"
        >
          <img src={pizza.img} width={80} className="me-3" alt={pizza.name} />

          <div className="flex-grow-1">
            <h4 className="m-0">{capitalize(pizza.name)}</h4>
            <p className="m-0">Precio: ${formatPrice(pizza.price)}</p>
          </div>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-dark mx-2"
              onClick={() => decrement(pizza.id)}
            >
              {" "}
              -{" "}
            </button>
            <span>{pizza.count}</span>
            <button
              className="btn btn-dark mx-2"
              onClick={() => increment(pizza.id)}
            >
              {" "}
              +{" "}
            </button>
          </div>

          <p className="ms-3 fw-bold">
            Total: ${formatPrice(pizza.price * pizza.count)}
          </p>
        </div>
      ))}

      <hr />
      <h3>Total a pagar: ${formatPrice(total)}</h3>

      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
