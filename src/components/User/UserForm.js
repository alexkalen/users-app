import { useState, useRef } from "react";

import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

function UserForm(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const newUserHandler = (event) => {
    event.preventDefault();

    const enteredUser = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "You must type your username and and age",
      });
    } else if (enteredAge < 1 || enteredAge > 99) {
      setError({
        title: "Invalid Age",
        message: "Age must be between 1-99",
      });
    } else {
      const newUserData = {
        id: Math.random().toString(),
        username: enteredUser,
        age: +enteredAge,
      };

      props.onAddUser(newUserData);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          errorMessage={error.message}
          errorTitle={error.title}
          onHandleError={errorHandler}
        />
      )}
      <Card className={styles.userForm}>
        <form onSubmit={newUserHandler}>
          <div>
            <div>
              <label>Username</label>
              <input id="username" ref={nameInputRef}></input>
            </div>
            <div>
              <label>Age (Years)</label>
              <input id="age" type="number" ref={ageInputRef}></input>
            </div>
          </div>
          <Button text="Add User" type="submit" />
        </form>
      </Card>
    </div>
  );
}

export default UserForm;
