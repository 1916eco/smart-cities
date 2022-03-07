import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useUserAuth} from "../context/UserAuthContext";

const Header = () => {
  //const something = React.lazy({ logOut, user } = useUserAuth())
  //const hello = async () => {const { logOut, user } = await import('../context/UserAuthContext');
    //const { logOut, user } = useUserAuth();
    const handleLogout = async () => {
    try {
      //await logOut();
      //navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return(

    <Navbar bg="dark" variant="dark" className='fixed-top'>
    <Container>
    <Navbar.Brand as={Link} to="/">Smart Cities</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Map</Nav.Link>
      <Nav.Link as={Link} to="/AboutUs">Project Description</Nav.Link>
    </Nav>
    {/* {user} ? <div>YES logged in</div>: <div>Not logged in</div> */}
    
    <Nav>
      <Nav.Link as={Link} to="/LogIn">Login</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  
  );
};

export default Header;
