import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });

    console.log(users);
  };

  const newUserSubmit = (username, age) => {
    const newUser = {
      id: Math.random().toString(),
      name: username,
      age: age,
    };

    addNewUser(newUser);
  };

  return (
    <div>
      <AddUser onUserSubmit={newUserSubmit} />
      <UserList />
    </div>
  );
}

export default App;
