import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SignUp.css';
import {Form,Button} from "react-bootstrap";

function SignUp() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
    }


  return (
    <div className=' d-flex justify-content-center loginBox'>
        <div className='my-auto'>
    <h3>Sign Up</h3>
    <Form onSubmit={handleSubmit}>
    <Form.Group className='' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email'></Form.Control>
    </Form.Group>
    <Form.Group className='' controlId='formName'>
        <Form.Label>Email First Name</Form.Label>
        <Form.Control type='name' placeholder='Enter First Name'></Form.Control>
    </Form.Group>
    <Form.Group className='' controlId='formPassword'>
        <Form.Label>Email Password</Form.Label>
        <Form.Control type='password' placeholder='Enter Password'></Form.Control>
    </Form.Group>
    <div className='d-grid gap-2 mt-3'><Button variant='primary' type='Submit'>Sign Up</Button></div>
    </Form>
    <p className="forgot-password text-right">
        Already have an Account <Link to="/LogIn">Log In</Link>
    </p>
</div></div>


  )
}

export default SignUp