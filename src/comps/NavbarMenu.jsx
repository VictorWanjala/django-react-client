import { Navbar, Nav } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Link className="show-products-nav" to='/'>Products</Link>
            <Link className="add-product-nav" to='/addProduct'>Add Products</Link>
          </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarMenu