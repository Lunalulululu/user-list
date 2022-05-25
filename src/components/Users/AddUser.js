import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helper/Wrapper";
const AddUser = (props) => {
  const usernameInput = useRef();
  const ageInput = useRef();

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
    const username = usernameInput.current.value;
    const age = ageInput.current.value;
    if (username === "" || age === "") {
      setErrorMessage({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty).",
      });
      return;
    }
    if (age < 1) {
      setErrorMessage({
        title: "Invalid age",
        message: "Please enter an non-negative age.",
      });
      return;
    }
    console.log(username, age);
    props.onAddUser(username, age);
    usernameInput.current.value = "";
    ageInput.current.value = "";
    // setUsername("");
    // setAge("");
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={usernameInput} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
