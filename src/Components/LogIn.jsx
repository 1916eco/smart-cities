import React from 'react'
import '../Styles/LogIn.css';
import { Google } from 'react-bootstrap-icons';
import 'firebase/firestore'
import 'firebase/auth'
import GoogleButton from "react-google-button"
import { Link } from 'react-router-dom';
import {Form,Button} from "react-bootstrap";

function login() {
    function signInWithGoogle(){
        const signInWithGoogle = () =>{
            //const provider = new firebase;
        }
    }
  return (
    <div className='container d-flex justify-content-center loginBox grid'>
      <div className='my-auto'>
    <h3>Sign In</h3>
    <Form className='d-'>
    <Form.Group className='' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email'></Form.Control>
    </Form.Group>
    <Form.Group className='' controlId='formPassword'>
        <Form.Label>Email Password</Form.Label>
        <Form.Control type='password' placeholder='Enter Password'></Form.Control>
    </Form.Group>
    <p className="forgot-password text-right">
      <Link to="/ForgotPass">Forgot Password?</Link>
    </p>
    <div className='d-grid gap-2 mt-3'><Button variant='primary' type='Submit'>Sign In</Button></div>
    </Form>
<hr/>
<GoogleButton className="g-btn mt-3" type="dark"/>
<p className="forgot-password text-right">
        Don't have an Account? <Link to="/SignUp">Sign Up</Link>
    </p>
    </div>
</div>
  )
}

export default login