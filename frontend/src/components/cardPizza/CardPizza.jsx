import "../cardPizza/CardPizza.css"
import { capitalize, formatPrice } from "../../utils/format";

const CardPizza = ({ img, name, price, ingredients }) => {

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-info">
      <h3 className="card-title py-2 m-0">{capitalize(name)}</h3>
      <p className="fw-bold my-2">Ingredientes:</p>
      <ul className="list-container">
        {ingredients.map((ingredient) => (
          <li className="card-subtext" key={ingredient}>
            🍕{ingredient}.
          </li>
        ))}
      </ul>
      <p className="card-price fs-4 fw-bold">Precio: ${formatPrice(price)}</p>
      </div>
      <div className="card-footer d-flex justify-content-between mt-3">
        <button className="btn btn-outline-primary">👀 Ver más</button>
        <button className="btn btn-dark">🛒 Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;