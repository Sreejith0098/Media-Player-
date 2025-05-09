import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addCategory } from '../services/allApi';

const Allcategories = () => {
  const[categoryName,setCategoryName] = useState("")
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const onCategoryClick=async()=>{
            const reqObj ={
              categoryName,videos:[]
            }
            let result = await addCategory(reqObj)
            console.log(result);
      };
  return (
  <>
  <div className="d-flex justify-content-between">
    <h1>All categories</h1>
    <button onClick={handleShow}
          
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
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload your video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=" m-2">
            <FloatingLabel
              controlId="floatingInputCategory "
              label="Video caption"
              className="mb-1 w-100 "
            >
              <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category name" />
            </FloatingLabel>
           
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={onCategoryClick} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default Allcategories