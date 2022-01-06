import styles from './AddUser.module.css';

const AddUser = () => {
  return (
    <form>
      <div className={styles.input}>
        <label>Username</label>
        <input type="text"></input>
      </div>
      <div className={styles.input}>
        <label>Age</label>
        <input type="number"></input>
      </div>
    </form>
  );
}

export default AddUser
