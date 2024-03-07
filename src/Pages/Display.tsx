import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Display = () => {
  const [studentsData, setStudentsData] = useState([]);
  const navigate = useNavigate();
  const { studId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((resp) => {
        setStudentsData(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const EditBtn = (id: any) => {
    navigate("/edit/" + id);
  };
  const DelBtn = (id: any) => {
    axios
      .delete("http://localhost:8000/users/" + id)
      .then((resp) => {
        toast.error("Deleted Successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const DetailBtn = (id: any) => {
    navigate("/detail/" + id);
  };
  return (
    <>
      <Container>
        <Row>
          <Card className="p-3 mt-4">
            <Card.Header className="text-center fs-3 fw-bold">
              Students Details
            </Card.Header>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {studentsData.map((item: any, index: any) => {
                  return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.gender}</td>
                        <td>
                          <Button
                            className="mx-1"
                            variant="primary"
                            onClick={() => EditBtn(item.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            className="mx-1"
                            variant="danger"
                            onClick={() => DelBtn(item.id)}
                          >
                            Delete
                          </Button>
                          <Button
                            className="mx-1"
                            variant="info"
                            onClick={() => DetailBtn(item.id)}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Display;
