import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const closeModalHandler = () => {
    props.onModalClose(false); // define in AddUser.js
  };

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={closeModalHandler} />;
  };

  const Overlay = (props) => {
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
    )
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
        title={props.title}
        message={props.message}
        onClick={props.onClick}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
