import React, { Component } from "react";

export default class FormsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          name: "",
          email: "",
          gen: "",
        },
       
      ],
      name: "",
      email: "",
      gen: "",
    };
  }
  inputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  inputSubmit = (e) => {
    e.preventDefault();
    const newInfo = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.setState({
      info: [...this.state.info, newInfo],
    });
  };

  render() {
    return (
      <>
        <div className="box">
          <h3>React Form</h3>

          <form className="form" onSubmit={this.inputSubmit}>
            <label>NAME</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              className="input push"
              onChange={this.inputChange}
              autoComplete="off"
            />
            <br />
            <label>EMAIL</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="input push"
              onChange={this.inputChange}
              autoComplete="off"
            />
            <br />
            <label>GEN</label>
            <input
              type="text"
              name="gen"
              value={this.state.gen}
              className="input push1"
              onChange={this.inputChange}
              autoComplete="off"
            />
            <br />
            <input type="submit" className="submit" />
          </form>
        </div>

        <div className="box2">
          <h3 className="details">DETAILS</h3>
          <table>
            <tr>
              <td className="named">NAME</td>
              <td className="named">EMAIL</td>
              <td className="gend">GEN</td>
            </tr>
            {this.state.info.map((info, index) => {
              return (
                <tr key={index}>
                  <td> {info.name}</td>
                  <td>{info.email}</td>
                  <td>{info.gen}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
