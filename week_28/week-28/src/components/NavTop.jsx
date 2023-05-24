import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>#GEN 24</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/services">
            <button>Services</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavTop;
