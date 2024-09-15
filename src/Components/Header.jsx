import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Your Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: 'end' }}
        >
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Home</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
