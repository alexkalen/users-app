import classes from "./UserList.module.css";
import Card from "../UI/Card";
import User from "./User";

function UserList(props) {
  return (
    <Card className={classes.userList}>
      {props.users.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </Card>
  );
}

export default UserList;
