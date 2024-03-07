import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const [studentsData, setStudentsData] = useState<any>([]);
  const { studId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/users/" + studId)
      .then((resp) => {
        setStudentsData(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log("data", studentsData);
  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="p-3 bg-light shadow">
              <Card.Header className="fs-5">
                <span className="fw-bold">{studentsData.name}'s</span> Details
              </Card.Header>
              <Card.Body className="gutter">
                <Row>
                  <Col md={5} className="border rounded-3 p-1 mb-2 mx-3">
                    {studentsData.name}
                  </Col>
                  <Col md={5} className="border rounded-3 p-1 mb-2 mx-3">
                    {studentsData.email}
                  </Col>
                  <Col md={5} className="border rounded-3 p-1 mb-2 mx-3">
                    {studentsData.password}
                  </Col>
                  <Col md={5} className="border rounded-3 p-1 mb-2 mx-3">
                    {studentsData.address}
                  </Col>
                  <Col md={5} className="border rounded-3 p-1 mb-2 mx-3">
                    {studentsData.city}
                  </Col>
                  <Col md={5} className="border rounded-3 p-1 mb-2 mx-3">
                    {studentsData.state}
                  </Col>
                  <Col md={5} className="border rounded-3 p-1 mb-2 mx-3">
                    {studentsData.gender}
                  </Col>
                  <Col md={5} className="border rounded-3 p-1 mb-2 mx-3">
                    {studentsData.status}
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-end">
                <Button variant="secondary" onClick={() => navigate(-1)}>
                  Go Back
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
