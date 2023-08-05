import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

export default class extends Component {
  render(props) {
    return (
      <Col md="3" style={{ marginTop: "10px" }}>
        <Card bg="primary" text="white">
          <Card.Body>
            <Card.Title className="mb-2 text-muted">Details</Card.Title>
            <Card.Subtitle>Name: {this.props.user.name}</Card.Subtitle>
            <Card.Text>
              <span>
                Username: {this.props.user.username} <br />
              </span>
              <span>
                Email: {this.props.user.email} <br />
              </span>
              <span>
                Phone: {this.props.user.phone} <br />
              </span>
              <span>
                Website: {this.props.user.website} <br />
              </span>
            </Card.Text>
          </Card.Body>
        </Card>{" "}
      </Col>
    );
  }
}
