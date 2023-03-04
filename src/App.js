import { useState } from "react";
import React from "react";
import AddUser from "./components/userComponents/AddUser";
import UserForm from "./components/userComponents/UserForm";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getUserData = (uName, uEmail, uPassword, uConfirmPassword, uid) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        {
          name: uName,
          email: uEmail,
          password: uPassword,
          confirmPassword: uConfirmPassword,
          uid: uid,
        }
      ];
    });
  };

  return (
    <div>
      <AddUser something={getUserData} />
      <UserForm users={userData} />
    </div>
  );
};

export default App;
