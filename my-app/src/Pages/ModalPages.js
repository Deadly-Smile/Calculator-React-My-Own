import React, { useState } from "react";
import Modal from "../Component/Modal";
import Button from "../Component/Button";

const ModalPages = () => {
  const [isActive, setIsActive] = useState(false);
  const handleCloseModal = () => {
    setIsActive(false);
  };
  const actionButton = (
    <div>
      <Button primary onClick={handleCloseModal}>
        I Agree
      </Button>
    </div>
  );
  const modal = (
    <div>
      <Modal onClickClose={handleCloseModal} actionBar={actionButton}>
        <p>You are a genius 🧠</p>
      </Modal>
    </div>
  );
  return (
    <div className="relative">
      <Button
        danger
        onClick={() => {
          setIsActive(true);
        }}
      >
        Show the modal
      </Button>
      {isActive && modal}
    </div>
  );
};

export default ModalPages;
