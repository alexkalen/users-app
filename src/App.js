import { useState } from "react";

import UserList from "./components/User/UserList";
import UserForm from "./components/User/UserForm";

const DUMMY_USERS = [
  {
    id: 1,
    username: "alexkalen",
    age: 26,
  },
  {
    id: 2,
    username: "greenchalk",
    age: 45,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (newUser) => {

    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });

  };

  return (
    <>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
