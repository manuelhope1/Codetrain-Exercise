import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { editNewUser } from "../slice/usersSlice";
import { useDispatch } from "react-redux";

const EditUser = (props) => {
  const [name, setName] = useState(props.userInfo.name);
  const [email, setEmail] = useState(props.userInfo.email);
  const [gen, setGen] = useState(props.userInfo.gen);
  const user = props.userInfo;
  const dispatch = useDispatch();

  const inputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "gen":
        setGen(value);
        break;
      default:
        break;
    }
  };

  const submitChange = (e) => {
    e.preventDefault();
    const newData = {
      id: user.id,
      name,
      email,
      gen,
    };
    dispatch(editNewUser({ id: user.id, newData }));
    props.closeModal();
  };

  return (
    <Form onSubmit={submitChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={inputChange}
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={inputChange}
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control
          type="number"
          placeholder="Gen"
          name="gen"
          onChange={inputChange}
          value={gen}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Edit
      </Button>
    </Form>
  );
};

export default EditUser;
