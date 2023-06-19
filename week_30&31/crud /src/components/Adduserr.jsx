import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewUser } from "../slice/usersSlice";
import { v4 } from "uuid";

const AddUserr = ({ addUser }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");
  const id = v4();

  const submitChange = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      gen,
      id,
    };
    dispatch(addNewUser(newUser));
    setName("");
    setEmail("");
    setGen("");
  };

  return (
    <Form onSubmit={submitChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control
          type="number"
          placeholder="Gen"
          name="gen"
          onChange={(e) => {
            setGen(e.target.value);
          }}
          value={gen}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddUserr;
