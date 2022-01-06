import React, { useState } from "react";

import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  let errorModalMessage;

  const addUserHandler = (event) => {
    event.preventDefault();

    // VALIDATION
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      errorModalMessage = "Username and Age may not be blank";
      setIsModalVisible(true);
      return;
    }

    if (+enteredAge < 1) {
      errorModalMessage = "Age must be greater than 0";
      setIsModalVisible(true);
      return;
    }

    // Submit
    props.onUserSubmit(enteredUsername, enteredAge); // send to App

    // Reset
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const modalCloseHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {isModalVisible && (
        <ErrorModal
          title='Error, something went wrong!'
          message={errorModalMessage}
          onModalClose={modalCloseHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
