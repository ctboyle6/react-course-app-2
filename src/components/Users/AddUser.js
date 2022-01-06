import styles from "./AddUser.module.css";

const AddUser = (props) => {
  return (
    <form>
      <div className={styles.input}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
      </div>
      <div className={styles.input}>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
