import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import {
  addCategory,
  getCategoryApi,
  getSingleVideo,
  updateCategory,
  deleteVideosApi,
  deleteCategory,
} from "../services/allApi";
import VideoCard from "./VideoCard";

const Allcategories = ({ setDeleteVideoResponse }) => {
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const [categoryData, setCategoryData] = useState("");
  useEffect(() => {
    getAllcategory();
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onCategoryClick = async () => {
    const reqObj = {
      categoryName,
      videos: [],
    };
    let result = await addCategory(reqObj);
    handleClose()
    await getAllcategory()
    console.log(result);
  };
  const getAllcategory = async () => {
    let result = await getCategoryApi();
    setCategoryData(result.data);
    console.log(result.data);
  };
  const onvideoDrop = async (e, eachCategory) => {
    console.log(e);
    console.log(eachCategory);
    console.log(e.dataTransfer.getData("videoId"));
    let vidId = e.dataTransfer.getData("videoId");
    let result = await getSingleVideo(vidId);
    eachCategory.videos.push(result.data);
    let updateResult = await updateCategory(eachCategory.id, eachCategory);
    if (updateResult.status == 200) {
      let deleteResult = await deleteVideosApi(vidId);
      setDeleteVideoResponse(deleteResult);
    }
    console.log(updateResult);
  };
  const onDragging = (e) => {
    e.preventDefault();
  };
  const onDeleteClick = async (id) => {
    await deleteCategory(id);
    await getAllcategory()
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>All categories</h1>
        <button
          onClick={handleShow}
          className=" fs-6 ms-2 btn btn-warning rounded-circle fs-5 fw-bolder"
        >
          +
        </button>
      </div>
      {categoryData?.length > 0 ? (
        <div className="container-fluid mt-3">
          {categoryData?.map((eachCategory, index) => (
            <div
              key={index}
              droppable="true"
              onDragOver={(e) => onDragging(e)}
              onDrop={(e) => onvideoDrop(e, eachCategory)}
              className="border rounded p-3"
            >
              <div className="d-flex justify-content-between">
                <h3>{eachCategory.categoryName}</h3>
                <button
                  onClick={() => onDeleteClick(eachCategory.id)}
                  className="btn"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              <div className="row me-2">
                {eachCategory?.videos?.map((eachVideos) => (
                  <div className="col-4 mt-2 ">
                    <VideoCard videos={eachVideos} insideAllCategory={true} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>no categories found</div>
      )}

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
              <Form.Control
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                placeholder="Category name"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={onCategoryClick} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Allcategories;
