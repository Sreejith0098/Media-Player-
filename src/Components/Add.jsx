import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className=" d-flex align-items-center">
        <h3>Upload new video </h3>
        <button
          onClick={handleShow}
          className=" fs-6 ms-2 btn btn-warning rounded-circle fs-5 fw-bolder"
        >
          +
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload your video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-1 m-2">
            <FloatingLabel
              controlId="floatingInputVideocaption"
              label="Video caption"
              className="mb-1 w-100 "
            >
              <Form.Control type="text" placeholder="Video caption" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImgUrl"
              label="Video image url"
              className="mb-1 w-100 "
            >
              <Form.Control type="text" placeholder="Video caption" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputVideoLink"
              label="Video youtube link"
              className="mb-1 w-100 "
            >
              <Form.Control type="text" placeholder="Video caption" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
