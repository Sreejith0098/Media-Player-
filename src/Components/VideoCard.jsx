import React from 'react'
import { Card } from 'react-bootstrap'

const VideoCard = ({videos}) => {
    console.log(videos)
  return (
    <>
         <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={videos.imageUrl} />
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center ">
                <h4>{videos.caption}</h4>
                <button className="btn">
                  <i className="fa-solid fa-trash text-danger fw-bolder fs-5"></i>
                </button>
              </div>
            </Card.Body>
          </Card>
    </>
  )
}

export default VideoCard