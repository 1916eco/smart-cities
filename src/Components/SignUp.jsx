import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";
import { Form, Button, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signUp, updateUserProfile } = useUserAuth();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      await updateUserProfile(name);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className=" d-flex justify-content-center loginBox">
      <div className="my-auto">
        <h3>Sign Up</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="" controlId="formName">
            <Form.Label>Enter First Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter First Name"
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="" controlId="formPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="Submit">
              Sign Up
            </Button>
          </div>
        </Form>
        <p className="forgot-password text-right">
          Already have an Account <Link to="/LogIn">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
