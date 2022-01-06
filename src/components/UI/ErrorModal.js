import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const closeModalHandler = () => {
    props.onModalClose(false) // define in AddUser.js
  };

  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.action}>
        <Button onClick={closeModalHandler}>Close</Button>
      </footer>
    </Card>
  );
}

export default ErrorModal
