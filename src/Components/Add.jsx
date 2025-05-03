import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const Add = () => {
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imageUrl: "",
    youtubeLink: "",
  });
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addDetails = () => {
    console.log(videoDetails);
  };

  const convertedToId = (videoUrl) => {
    console.log(videoUrl.slice(17, 28));
    let videoId = videoUrl.slice(17, 28);
  ;
  setVideoDetails({
    ...videoDetails,
    youtubeLink: `https://www.youtube.com/embed/${videoId}`,
  });}
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
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
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
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
                type="text"
                placeholder="Video caption"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImgUrl"
              label="Video image url"
              className="mb-1 w-100 "
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imageUrl: e.target.value })
                }
                type="text"
                placeholder="Video caption"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputVideoLink"
              label="Video youtube link"
              className="mb-1 w-100 "
            >
              <Form.Control
                onChange={(e) => convertedToId(e.target.value)}
                type="text"
                placeholder="Video caption"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addDetails} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
