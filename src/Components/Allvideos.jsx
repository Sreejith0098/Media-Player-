import React from "react";
import { Card } from "react-bootstrap";
import img2 from "../assets/history.jpeg";


const Allvideos = () => {
  return (
    <>
      <h1>All videos</h1>
      <div className="row">
        <div className="col-lg-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center ">
                <h4>title</h4>
                <button className="btn">
                  <i className="fa-solid fa-trash text-danger fw-bolder fs-5"></i>
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Allvideos;
