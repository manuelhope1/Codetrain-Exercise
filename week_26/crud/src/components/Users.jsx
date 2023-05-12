import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import User from "./User";

export default function Users(props) {
  return (
    <Container>
      <Row>
        {props.allUsers.map((user, index) => {
          return (
            <User
              userInfo={user}
              key={user.id}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
}
