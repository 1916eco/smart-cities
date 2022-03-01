import React from 'react'
import {Form,Button} from "react-bootstrap";

function ForgotPage() {
  return (
    <div className='container d-flex justify-content-center loginBox grid'><div className='mx-auto '>
    <br/>
    <br/>
    <br/>
    <br/>
    <Form>
    <Form.Group className='' controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email'></Form.Control>
    </Form.Group>
    <div className='d-grid gap-2 mt-3'><Button variant='primary' type='Submit'>Reset Password</Button></div>

    </Form></div></div>
  )
}

export default ForgotPage