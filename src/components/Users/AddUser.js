import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const errorMessageHandler = (event) => {
    setErrorMessage(null);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    // enteredUsername.trim().length === 0
    if (enteredUsername === "" || enteredAge === "") {
      setErrorMessage({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty).",
      });
      return;
    }
    if (enteredAge < 1) {
      setErrorMessage({
        title: "Invalid age",
        message: "Please enter an non-negative age.",
      });
      return;
    }
    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setUsername("");
    setAge("");
  };
  return (
    <div className={classes.backdrop} onClick={errorMessageHandler}>
      {errorMessage && (
        <ErrorModal
          title={errorMessage.title}
          message={errorMessage.message}
          onConfirm={errorMessageHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
