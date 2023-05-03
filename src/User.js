import React from "react";

const User = ({ data }) => {
  return (
    <>
      <h1>User</h1>
      <h3>{data.name}</h3>
      <h3>{data.age}</h3>
    </>
  );
};

export default User;
