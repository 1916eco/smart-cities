import React from 'react'
import { useState } from 'react';
import '../Styles/LogIn.css';
import 'firebase/firestore'
import 'firebase/auth'
import GoogleButton from "react-google-button"
import {Form,Button,Alert} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import {useUserAuth} from "../context/UserAuthContext";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
    
  return (
    <div className='container d-flex justify-content-center loginBox grid'>
      <div className='my-auto'>
    <h3>Sign In</h3>
    <Form >
    {error && <Alert variant="danger">{error}</Alert>}
    <Form.Group className='' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}></Form.Control>
    </Form.Group>
    <Form.Group className='' controlId='formPassword'>
        <Form.Label>Email Password</Form.Label>
        <Form.Control type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
    </Form.Group>
    <p className="forgot-password text-right">
      <Link to="/ForgotPass">Forgot Password?</Link>
    </p>
    <div className='d-grid gap-2 mt-3'><Button variant='primary' type='Submit'>Sign In</Button></div>
    </Form>
<hr/>
<GoogleButton className="g-btn mt-3" type="dark" onClick={handleGoogleSignIn}/>
<p className="forgot-password text-right">
        Don't have an Account? <Link to="/SignUp">Sign Up</Link>
    </p>
    </div>
</div>
  )
}

export default LogIn