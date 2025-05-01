import React from "react";
import "react-bootstrap";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }} className=" container-fluid row mt-4 p-4 w-100">
        <div className="col-lg-5">
          <h4> <i class="fa-solid fa-music"></i>{" "} Media Player</h4>
          <p>
            Designed and build with all the love in the world by the Luminar
            team with the help of our contributors.
          </p>
          <p>Code licenced Luminar, docs CC BY 3.o.</p>
          <p>Currently v5.3.2.0</p>
        </div>
        <div className="col-lg-2">
          <h4>Links</h4>
          <Link to={"./"} style={{ textDecoration: "none" }}>Landing Page</Link>
          <br />
          <Link to={"./home"} style={{ textDecoration: "none" }}>Home Page</Link>
          <br />
          <Link to={"./history"} style={{ textDecoration: "none" }}>History Page </Link>
        </div>
        <div className="col-lg-2">
          <h4>Guides</h4>
          <p>React</p>
          <p>React Router</p>
          <p>React Bootstrap</p>
        </div>
        <div className="col-lg-3">
          <h4>contacts</h4>
          <input style={{ height: "43px" }} type="text" />{" "}
          <button
            style={{
              backgroundColor: "violet ",
              height: "30px",
              paddingBottom: "33px",
              fontWeight: "800",
            }}
            className="btn text-center "
          >
            &rarr;
          </button>
          <br />
          <i
            style={{ fontSize: "19px" }}
            class="fa-brands fa-twitter  me-2 mt-1 "
          ></i>
          <i
            style={{ fontSize: "19px" }}
            class="fa-brands fa-instagram me-2 mt-1"
          ></i>
          <i
            style={{ fontSize: "19px" }}
            class="fa-brands fa-facebook me-2 mt-1"
          ></i>
          <i
            style={{ fontSize: "19px" }}
            class="fa-brands fa-linkedin me-2 mt-1"
          ></i>
          <i
            style={{ fontSize: "19px" }}
            class="fa-brands fa-github me-2 mt-1"
          ></i>
          <i
            style={{ fontSize: "19px" }}
            class="fa-solid fa-phone me-2 mt-1"
          ></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
