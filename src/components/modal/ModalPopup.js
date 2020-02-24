import React from "react";
import Modal from "react-responsive-modal";
import "./modalpopup.css";

const ModalPopup = props => {
  const { open, onCloseModal, removeProduct } = props;
  return (
    <Modal open={open} onClose={() => onCloseModal()} className="popup-outer">
      <p>Are you sure you want to delete it? </p>
      <button className="choice-btn" onClick={() => removeProduct()}>
        Yes
      </button>
      <button className="choice-btn" onClick={() => onCloseModal()}>
        No
      </button>
    </Modal>
  );
};

export default React.memo(ModalPopup);
