import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../Component/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginForm = () => {
    let newData = { email, password };
    axios
      .get("http://localhost:8000/users/" + email)
      .then((resp) => {
        console.log(resp);
        toast.success("Login Successful");
        navigate("/display");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Login failed");
      });
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Card className="p-3 shadow" style={{ background: "azure" }}>
                <Card.Header className="mb-2 py-3 fw-bold">
                  Student Login Form
                </Card.Header>
                <Row>
                  <Col lg={12}>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="enter your email"
                      value={email}
                      setValue={setEmail}
                    />
                  </Col>
                  <Col lg={12}>
                    <Input
                      label="Password"
                      type="password"
                      placeholder="enter your password"
                      value={password}
                      setValue={setPassword}
                    />
                  </Col>
                </Row>
                <Card.Footer>
                  <Button variant="primary" onClick={loginForm}>
                    Submit
                  </Button>
                </Card.Footer>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
