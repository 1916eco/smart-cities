import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

function ForgotPage() {
  const { resetPassword } = useUserAuth();
  const [email, setEmail] = useState();
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = async () => {
    await resetPassword(email);
    setResetSent(true);
  };

  return (
    <div className="container d-flex justify-content-center loginBox grid">
      <div className="mx-auto ">
        <br />
        <br />
        <br />
        <br />
        {!resetSent ? (
          <Form onSubmit={handleResetPassword}>
            <Form.Group className="" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div className="d-grid gap-2 mt-3">
              <Button variant="primary" type="submit">
                Reset Password
              </Button>
            </div>
          </Form>
        ) : (
          <>
            <h1 className="text-center">Reset link sent to email!</h1>
            <h4 className="text-center">
              <b>{email}!</b>
            </h4>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPage;
