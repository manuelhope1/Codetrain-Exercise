import React, { useState } from "react";

const FormsFunctional = () => {
  const [info, setInfo] = useState([
    {
      name: "",
      email: "",
      gen: "",
    },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const inputChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "gen":
        setGen(e.target.value);
        break;
      default:
        break;
    }
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    const newInfo = {
      name: name,
      email: email,
      gen: gen,
    };
    setInfo([...info, newInfo]);
  };

  return (
    <div className="bbox">
      <div className="box">
        <h3>Functional React Form</h3>

        <form className="form" onSubmit={inputSubmit}>
          <label>NAME</label>
          <input
            type="text"
            name="name"
            value={name}
            className="input push"
            onChange={inputChange}
            autoComplete="off"
          />
          <br />
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            value={email}
            className="input push"
            onChange={inputChange}
            autoComplete="off"
          />
          <br />
          <label>GEN</label>
          <input
            type="text"
            name="gen"
            value={gen}
            className="input push1"
            onChange={inputChange}
            autoComplete="off"
          />
          <br />
          <input type="submit" className="submit" />
        </form>
      </div>

      <div className="box2">
        <h3 className="details">DETAILS</h3>
        <table>
          <thead>
            <tr>
              <th className="named">NAME</th>
              <th className="named">EMAIL</th>
              <th className="gend">GEN</th>
            </tr>
          </thead>
          <tbody>
            {info.map((info, index) => {
              return (
                <tr key={index}>
                  <td> {info.name}</td>
                  <td>{info.email}</td>
                  <td>{info.gen}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormsFunctional;
