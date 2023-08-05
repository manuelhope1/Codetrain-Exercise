import axios from "axios";
import React, { useEffect, useState } from "react";
import FunctionCard from "./FunctionCard";

const FunctionUsers = () => {
  const [users, setUsers] = useState([]);

  const usersdata = async () => {
    try {
      let getData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = getData.data;
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    usersdata();
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}> UsersFunction</h1>
      {users.map((users) => {
        return <FunctionCard key={users.id} user={users} />;
      })}
    </>
  );
};

export default FunctionUsers;
