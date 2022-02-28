import React from 'react';
import {AppBar,Toolbar,Typography} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav,Container} from 'react-bootstrap';

const Header = () => {
  return(

    <Navbar bg="dark" variant="dark" className='fixed-top'>
    <Container>
    <Navbar.Brand href="#home">Smart Cities</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Map</Nav.Link>
      <Nav.Link href="#features">Project Description</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#pricing">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  //   <React.Fragment>
  //   <AppBar>
  //     <Toolbar>
  //     <Typography>SmartCities</Typography>
  //     </Toolbar>
  //     </AppBar>
  // </React.Fragment>
  );
};

export default Header;
