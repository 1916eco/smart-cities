import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav,Container} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {useUserAuth} from "../context/UserAuthContext";

const Header = () => {
  const navigate = useNavigate();
  var optionButton = "";
  const { logOut, user } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  };
  
  if (!user) {
    var optionButton = <Nav><Nav.Link as={Link} to="/LogIn">Login</Nav.Link></Nav>
  } else {
    var optionButton = <Nav><Nav.Link onClick={handleLogout}>Logout</Nav.Link></Nav>
  }
  return(

    <Navbar bg="dark" variant="dark" className='fixed-top'>
    <Container>
    <Navbar.Brand as={Link} to="/">Smart Cities</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Map</Nav.Link>
      <Nav.Link as={Link} to="/AboutUs">Project Description</Nav.Link>
    </Nav>
    {optionButton}

      
    </Container>
  </Navbar>
  
  );
};

export default Header;
