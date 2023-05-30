import React, { Component } from "react";
import ClassCard from "./ClassCard";

export default class ClassUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
    console.log(this.state.users);
  }

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}> UsersClass</h1>
        {this.state.users.map((users) => {
          return <ClassCard key={users.id} user={users} />;
        })}
      </>
    );
  }
}
