import React, { Component } from "react";
import "./App.css";
import AddUserForm from "./components/AddUserForm";
import Users from "./components/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center hh">CLASS DETAILS</h1>
        <div className="row">
          <div className="col-md-4">
            <AddUserForm addUser={this.addNewUser} />
          </div>
          <div className="col-md-8">
            <Users usersData={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
