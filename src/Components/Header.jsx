import React from 'react';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav,Container,ToastContainer,Toast} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {useUserAuth} from "../context/UserAuthContext";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  var optionButton = "";
  const { logOut, user } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      setShow(true)
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

    <Navbar bg="dark" variant="dark" className='fixed-top' expand="lg">
    <Container>
    <Navbar.Brand as={Link} to="/">Smart Cities</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Map</Nav.Link>
      <Nav.Link as={Link} to="/AboutUs">Project Description</Nav.Link>
    </Nav>
    {optionButton}
    </Navbar.Collapse>
    </Container>
    <ToastContainer className="mb-2" position={"bottom-center"}>
          <Toast onClose={() => setShow(false)} show={show} delay={2200} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Logged out!</strong>
            </Toast.Header>
          </Toast>
        </ToastContainer>
  </Navbar>
  
  );
};

export default Header;
