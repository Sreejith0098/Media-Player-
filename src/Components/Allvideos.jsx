import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { Col, Row } from "react-bootstrap";
import { getvideoApi, uploadVideoAPI } from "../services/allApi";
import { useEffect } from "react";

const Allvideos = ({ addVideoResponse, deleteVideoResponse }) => {
  const [videosData, setVideosData] = useState([]);
  const [deleteVideoResp, setDeleteVideoResp] = useState([]);
  useEffect(() => {
    getvideos();
  }, [addVideoResponse, deleteVideoResp, deleteVideoResponse]);
  const getvideos = async () => {
    let result = await getvideoApi();
    if (result.status >= 200 && result.status <= 300) {
      setVideosData(result.data);
    } else {
      alert("Error fetching video data");
    }
    console.log(result);
  };
  const onDragVideo = (e) => {
    e.preventDefault;
  };
  const onVideoDrop =async (e) => {
    console.log(e);
    let videosData = JSON.parse(e.dataTransfer.getData('videoFromCat'));
    console.log(videosData)
    await uploadVideoAPI(videosData)
    await getvideos()
  };
  return (
    <>
      <h1>All videos</h1>

      <Row
        className="rounded border p-5"
        droppable="true"
        onDragOver={(e) => onDragVideo(e)}
        onDrop={(e) => onVideoDrop(e)}
      >
        {videosData?.map((eachVideos, index) => (
          <Col key={index} className="m-3" lg={4} md={6} sm={12}>
            <VideoCard
              videos={eachVideos}
              setDeleteVideoResp={setDeleteVideoResp}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Allvideos;
