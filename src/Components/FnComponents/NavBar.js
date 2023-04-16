import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import { Container  } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavigationBar = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MyStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/products" style={({isActive})=> ({textDecoration: isActive ? "underline": "none"})} >Products</Nav.Link>
              <Nav.Link as={NavLink} to="/addProd" style={({isActive})=> ({textDecoration: isActive ? "underline": "none"})}>Add New product</Nav.Link>
              <Nav.Link as={NavLink} to="/addProdred" style={({isActive})=> ({textDecoration: isActive ? "underline": "none"})}>Add New product using Redux</Nav.Link>
              <Nav.Link as={NavLink} to="productsFF" style={({isActive})=> ({textDecoration: isActive ? "underline": "none"})} >Panier</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )


}
export default NavigationBar;