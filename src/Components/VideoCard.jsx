import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addHistory, deleteVideosApi } from "../services/allApi";

const VideoCard = ({ videos, setDeleteVideoResponse,insideAllCategory }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const currentDate = new Date();
    const caption = videos.caption;
    const link = videos.youtubeLink;
    const reqObj = {
      currentDate,
      caption,
      link,
    };
    let result = await addHistory(reqObj);
    console.log(result);

    setShow(true);
  };
  console.log(videos);

  const deleteVideos = async (id) => {
    let result = await deleteVideosApi(id);
    console.log(result);
    setDeleteVideoResponse(result)
  };
  const videoDrag= (e,id)=>{
    console.log(e)
    console.log(id)
    e.dataTransfer.setData('videoId',id)
  }
  return (
    <>
      <Card draggable="true" onDragStart={(e)=>videoDrag(e,videos?.id)} className="m-3" style={{ width: "12rem", height: "15rem" }}>
        <Card.Img onClick={handleShow} variant="top" src={videos?.imageUrl} />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center ">
            <h4>{videos?.caption}</h4>
            {
             insideAllCategory?<span></span>:
             <button onClick={() => deleteVideos(videos?.id)} className="btn">
             <i style={{color:'black'}} className="fa-solid fa-trash text-danger fw-bolder fs-2"></i>
           </button>
              }
            
           
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        keyboard={true}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{videos?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${videos?.youtubeLink}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoCard;
