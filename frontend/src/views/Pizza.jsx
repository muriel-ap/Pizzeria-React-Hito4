import { useEffect, useState } from "react";
import { capitalize, formatPrice } from "../utils/format";
import { Card, Row, Col, CardBody, Button, Container } from "react-bootstrap";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    async function getPizza() {
      const res = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await res.json();
      setPizza(data);
    }

    getPizza();
  }, []);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <Container className="content-area mt-5" style={{ maxWidth: "70%" }}>
      <Card className="mx-5 my-4">
        <Row className="g-0">
          <Col md={4}>
            <Card.Img
              src={pizza.img}
              alt={pizza.name}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={8}>
            <CardBody>
              <h3 className="fw-bold">{capitalize(pizza.name)}</h3>
              <p>{pizza.desc}</p>

              <p className="fw-bold mt-2">Ingredientes:</p>
              <p>🍕 {pizza.ingredients.map(capitalize).join(", ")}.</p>

              <h4 className="fw-bold mt-3">${formatPrice(pizza.price)}</h4>
              <Button className="btn btn-dark mt-3">🛒 Añadir</Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Pizza;
