import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (Uname, Uage) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: Uname, age: Uage, id: Math.random().toString() },
      ];
    });
    console.log(userList);
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
