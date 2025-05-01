import React from "react";
import { Link } from "react-router-dom";
import musicImg from "../assets/Music-gif.gif";
import Card from "react-bootstrap/Card";
import img1 from "../assets/manage-videos.jpg";
import img2 from "../assets/categorize.jpeg";
import img3 from "../assets/history.jpeg";
const Landing = () => {
  return (
    <div className="container">
      {/* welcome section  */}
      <div className="row align-items-center ">
        <div className="col-lg-4">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }} className=" mt-3">
            Media Player App will allow user to add or remove their uploaded
            videos from youTube and also allow them to arrange it in different
            categories by drag and drop. User can also have the provision to
            manage their watch history as well. What are you waiting for, let
            starts exploring our site!!!
          </p>
          <Link className="btn btn-primary" to={"/home"}>
            Get Started
          </Link>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <img src={musicImg} alt="" />
        </div>
      </div>
      {/* features section  */}
      <div className="my-3">
        <h3 className="text-center">Features</h3>
        <div className="row text-center">
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>Users can upload ,view and remove videos</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>categorize Videos </Card.Title>
                <Card.Text>categorize videos</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* info section */}
      <div style={{border:'1px solid '}} className="row rounded mt-4 p-4">
        <div className="col-lg-4">
          <h2 className="text-warning text-center">simple,Fast and Powerful</h2>
          <h5 className="mt-3">
            Play Everything:{" "}
            <span  style={{fontSize:'15px', fontWeight:'normal'}} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              tempore consequatur? Aliquid, animi? Ipsum harum temporibus
            </span>
          </h5>
          <h5 className="mt-3">
            Play Everything:{" "}
            <span  style={{fontSize:'15px', fontWeight:'normal'}} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              tempore consequatur? Aliquid, animi? Ipsum harum temporibus 
            </span>
          </h5>
          <h5 className="mt-3">
            Play Everything:{" "}
            <span style={{fontSize:'15px', fontWeight:'normal'}} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              tempore consequatur? Aliquid, animi? Ipsum harum temporibus
            </span>
          </h5>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZdMZ40GSVmc?si=hEmGE7ui5PzyBM1K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      
     
    </div>
  );
};

export default Landing;
