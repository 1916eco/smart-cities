import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Header = () => {
  return(

    <Navbar bg="dark" variant="dark" className='fixed-top'>
    <Container>
    <Navbar.Brand as={Link} to="/">Smart Cities</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Map</Nav.Link>
      <Nav.Link as={Link} to="/About">Project Description</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/Login">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  
  );
};

export default Header;
