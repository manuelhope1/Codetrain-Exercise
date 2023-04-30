import React from "react";
import User from "./User";

export default function Users(props) {
  return (
    <div className="Container">
      <div className="row">
        {props.usersData.map((user, index) => {
          return <User userInfo={user} key={index} />;
        })}
      </div>
    </div>
  );
}
