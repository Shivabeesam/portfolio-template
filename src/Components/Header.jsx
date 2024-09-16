import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Button } from 'reactstrap';
import resume from '../Assets/Your_resume.pdf';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['header'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <>
      <Navbar expand="lg" className={navbarClasses.join(' ')}>
        <Container>
          <Navbar.Brand href="#home">Your name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: 'end' }}
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About </Nav.Link>
            <Nav.Link href="#skills">Skills </Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <Nav.Link href={resume}>
              <Button color="warning" className="resume-button">
                Resume
              </Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
