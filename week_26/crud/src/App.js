import "./App.css";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Adduser from "./components/Adduser";
import Users from "./components/Users";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "John",
          email: "john@example.com",
          gen: "56",
          id: "65e373",
        },
        {
          name: "King",
          email: "john@example.com",
          gen: "56",
          id: "123",
        },
      ],
    };
  }

  addUser = (user) => {
    user.id = Math.random().toString();
    this.setState({ users: [...this.state.users, user] });
  };

  deleteUser = (id) => {
    let unTounched = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: unTounched });
  };

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <Container style={{ marginTop: "30px" }}>
        <h1 className="text-center hh">CLASS DETAILS</h1>
        <Row>
          <Col md="4">
            <Adduser addUser={this.addUser} />
          </Col>
          <Col md="8" style={{ marginTop: "30px" }}>
            <Users
              allUsers={this.state.users}
              deleteUser={this.deleteUser}
              editUser={this.editUser}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
