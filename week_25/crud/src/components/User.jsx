import React from "react";

export default function (props) {
  return (
    <div className=".col-sm-12 col-md-6 col-lg-4 ">
      <div
        className="card"
        style={{
          marginBottom: "1rem",
          height: "250px",
        }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Student Details</h6>
          <h5 className="card-title">{props.userInfo.name}</h5>
          <div className="card-text">
            <p>Email: {props.userInfo.email}</p>
            <p>Gen: {props.userInfo.gen}</p>
          </div>
          <a href="#" className="card-link">
            Edit
          </a>
          <a href="#" className="card-link">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
