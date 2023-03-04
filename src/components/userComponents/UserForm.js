import React from "react";
import Card from "../UI/Card";

const UserForm = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li key={user.uid}>
            {user.name} | {user.email} | {user.password} | {user.confirmPassword} | {user.uid}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserForm;
