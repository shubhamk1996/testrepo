import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Dropdown from "../Component/Dropdown";
import Input from "../Component/Input";
import Radio from "../Component/Radio";

const cityData = [
  "mumbai",
  "pune",
  "nashik",
  "nagpur",
  "delhi",
  "banglore",
  "hyderabad",
  "chennai",
  "noida",
  "thane",
];
const stateData = [
  "maharashtra",
  "gujrat",
  "uttar pradesh",
  "delhi",
  "asam",
  "goa",
  "hariyana",
  "telangana",
  "nagaland",
  "madhya pradesh",
];

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const submitForm = () => {
    let newData = {
      name,
      email,
      password,
      mobile,
      address,
      city,
      state,
      gender,
      status,
    };
    axios
      .post("http://localhost:8000/users", newData)
      .then((resp) => {
        console.log(resp.data);
        toast.success("Registration Successful");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Registration failed");
      });
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setCity("");
    setState("");
    setGender("");
    setStatus("");
  };
  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Card className="p-3 shadow" style={{ background: "azure" }}>
                <Card.Header className="mb-2 py-3 fw-bold">
                  Student Registration Form
                </Card.Header>
                <Row>
                  <Col lg={6}>
                    <Input
                      label="Name"
                      type="text"
                      placeholder="enter your name"
                      value={name}
                      setValue={setName}
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="enter your email"
                      value={email}
                      setValue={setEmail}
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      label="Password"
                      type="password"
                      placeholder="enter your password"
                      value={password}
                      setValue={setPassword}
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      label="Mobile No."
                      type="text"
                      placeholder="enter your mobile no"
                      value={mobile}
                      setValue={setMobile}
                    />
                  </Col>
                  <Col lg={12}>
                    <Input
                      label="Address"
                      placeholder="enter your address"
                      value={address}
                      setValue={setAddress}
                      as="textarea"
                    />
                  </Col>
                  <Col lg={6}>
                    <Dropdown
                      label="City"
                      data={cityData}
                      option="choose city"
                      value={city}
                      setValue={setCity}
                    />
                  </Col>
                  <Col lg={6}>
                    <Dropdown
                      label="State"
                      data={stateData}
                      option="choose state"
                      value={state}
                      setValue={setState}
                    />
                  </Col>
                  <Col lg={6}>
                    <Radio
                      label="Gender"
                      label1="Male"
                      label2="Female"
                      name="gender"
                      value1="male"
                      value2="female"
                      setValue={setGender}
                      checked1={gender === "male"}
                      checked2={gender === "female"}
                    />
                  </Col>
                  <Col lg={6}>
                    <Radio
                      label="Status"
                      label1="Is Active"
                      label2="Is Inactive"
                      name="Status"
                      value1="active"
                      value2="inactive"
                      setValue={setStatus}
                      checked1={status === "active"}
                      checked2={status === "inactive"}
                    />
                  </Col>
                </Row>
                <Card.Footer>
                  <Button variant="success" onClick={submitForm}>
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

export default Register;
