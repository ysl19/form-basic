import { useState } from "react";

import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [addUser, setAddUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    uid: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { username, email, password, confirmPassword, uid } = addUser;

    if (
      username.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0 ||
      uid.trim().length === 0
    ) {
      return;
    }

    props.something(username, email, password, confirmPassword, uid);
    setAddUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      uid: ''
    });
  };

  const onChangeHandler = (event) => {
    const { id, value } = event.target;

    setAddUser((prevState) => ({
      ...prevState,
      [id]: value,
      uid: Math.random().toString(),
    }));
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={onChangeHandler}
          value={addUser.username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={onChangeHandler}
          value={addUser.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={onChangeHandler}
          value={addUser.password}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="text"
          id="confirmPassword"
          onChange={onChangeHandler}
          value={addUser.confirmPassword}
        />
        <Button />
      </form>
    </Card>
  );
};

export default AddUser;
