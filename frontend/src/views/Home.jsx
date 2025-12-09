import Header from "../components/header/Header";
import CardPizza from "../components/cardPizza/CardPizza";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function getPizzas() {
      const res = await fetch("http://localhost:5000/api/pizzas");
      const data = await res.json();
      console.log(data);
      setPizzas(data);
    }

    getPizzas();
  }, []);

  return (
    <div>
      <Header />
      <Container className="content-area my-5">
        <Row>
          {pizzas.map((pizza) => (
            <Col md={4} key={pizza.id} className="my-5">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;