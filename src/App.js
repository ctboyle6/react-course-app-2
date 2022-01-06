import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  const newUserSubmit = (username, age) => {
    const newUser = {
      id: Math.random().toString(),
      name: username,
      age: age,
    };

    console.log(newUser);
  };

  return (
    <div>
      <AddUser onUserSubmit={newUserSubmit} />
    </div>
  );
}

export default App;
