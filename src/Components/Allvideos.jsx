import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { Col, Row } from "react-bootstrap";
import { getvideoApi } from "../services/allApi";
import { useEffect } from "react";

const Allvideos = ({ addVideoResponse }) => {
  const [videosData, setVideosData] = useState([]);
  const [deleteVideoResponse, setDeleteVideoResponse] = useState([]);
  useEffect(() => {
    getvideos();
  }, [addVideoResponse, deleteVideoResponse]);
  const getvideos = async () => {
    let result = await getvideoApi();
    if (result.status >= 200 && result.status <= 300) {
      setVideosData(result.data);
    } else {
      alert("Error fetching video data");
    }
    console.log(result);
  };

  return (
    <>
      <h1>All videos</h1>

      <Row>
        {videosData?.map((eachVideos, index) => (
          <Col key={index} className="m-3" lg={4} md={6} sm={12}>
            <VideoCard
              videos={eachVideos}
              setDeleteVideoResponse={setDeleteVideoResponse}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Allvideos;
