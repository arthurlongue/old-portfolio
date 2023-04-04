import React from "react"
import "./Modal.sass"

const Modal = ({ setOpenModal, event }) => {
  return (
    <div className="modal">
      <span
        onClick={() => {
          setOpenModal(false)
        }}
        className="modal-close">
        &times;
      </span>
      <div className="modal-content">
        <h2 className="modal-caption">Desktop Preview</h2>
        <img src={`${event.target.src}`}></img>
      </div>
      <div className="modal-content">
        <h2 className="modal-caption">Mobile preview</h2>
        <img src={`${event.target.src.replace(".jpg", "Mobile.jpg")}`}></img>
      </div>
    </div>
  )
}

export default Modal
