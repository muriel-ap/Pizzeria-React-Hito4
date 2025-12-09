import { Navbar as BootstrapNavbar, Nav, Button, Container } from "react-bootstrap";
import { formatPrice } from "../../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false;



  return (
    <BootstrapNavbar bg="dark" expand="lg" variant="dark">
      <Container fluid className="d-flex justify-content-between">

        <Nav className="menu-iz align-items-center">
          <Nav.Link className="text-light fs-5 me-3" href="#">Pizzería Mamma Mia</Nav.Link>
          <Button variant="outline-light" className="me-2">🍕 Home</Button>

          {token ? (
            <>
              <Button variant="outline-light" className="me-2">🔓 Profile</Button>
              <Button variant="outline-light" className="me-2">🔒 Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline-light" className="me-2">🔐 Login</Button>
              <Button variant="outline-light" className="me-2">🔐 Register</Button>
            </>
          )}
        </Nav>

        <Nav className="menu-dr align-items-center">
          <Button variant="outline-info">🛒 Total: ${formatPrice(total)}</Button>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;