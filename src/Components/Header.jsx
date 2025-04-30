import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{zIndex:"1"}} className="bg-primary fw-bolder sticky-top w-100  ">
        <Container>
          <Navbar.Brand >
<Link style={{textDecoration:'none'}} to={'/'}>
<i class="fa-solid fa-music"></i> {" "}
Media Player
</Link>



          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header