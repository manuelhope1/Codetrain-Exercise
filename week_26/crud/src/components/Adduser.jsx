import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class Adduser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  inputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  submitChange = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };
  render() {
    return (
      <Form onSubmit={this.submitChange}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={this.inputChange}
            value={this.state.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={this.inputChange}
            value={this.state.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="number"
            placeholder="Gen"
            name="gen"
            onChange={this.inputChange}
            value={this.state.gen}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
