import React, { useState } from "react";
import { Col, Card, Button, Modal } from "react-bootstrap";
import EditUser from "./EditUser";
import { deleteNewUser } from "../slice/usersSlice";
import { useDispatch } from "react-redux";

export default function User(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const user = props.userInfo;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteUser = (e) => {
    e.preventDefault();
    dispatch(deleteNewUser(user.id));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Col md="4" style={{ marginBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Contrain User
            </Card.Subtitle>
            <Card.Title>Name: {props.userInfo.name}</Card.Title>
            <div>
              <p>Email: {props.userInfo.email}</p>
              <p>Gen: {props.userInfo.gen}</p>
            </div>
            <Card.Link href="#">
              <Button onClick={handleShow}>Edit</Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={deleteUser}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
