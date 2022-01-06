import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addNewUser = (newUser) => {
    setUserList((prevUsers) => {
      return [newUser, ...prevUsers];
    });
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
      <UserList users={userList} />
    </div>
  );
}

export default App;
