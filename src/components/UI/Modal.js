import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHandleError}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.errorTitle}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.errorMessage}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onHandleError} text="Close" type="button" />
      </footer>
    </Card>
  );
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHandleError={props.onHandleError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorTitle={props.errorTitle}
          errorMessage={props.errorMessage}
          onHandleError={props.onHandleError}
        />,
        document.getElementById("overlay-root")
      )}
    </> 
  );
}

export default Modal;
