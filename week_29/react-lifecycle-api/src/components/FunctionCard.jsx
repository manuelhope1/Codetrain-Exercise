import React from "react";
import { Card, Col } from "react-bootstrap";

const FunctionCard = (props) => {
  return (
    <Col md="3" style={{ marginTop: "10px" }}>
      <Card bg="success" text="white">
        <Card.Body>
          <Card.Title className="mb-2 text-muted">Details</Card.Title>
          <Card.Subtitle>Name: {props.user.name}</Card.Subtitle>
          <Card.Text>
            <span>
              Username: {props.user.username} <br />
            </span>
            <span>
              Email: {props.user.email} <br />
            </span>
            <span>
              Phone: {props.user.phone} <br />
            </span>
            <span>
              Website: {props.user.website} <br />
            </span>
          </Card.Text>
        </Card.Body>
      </Card>{" "}
    </Col>
  );
};

export default FunctionCard;
