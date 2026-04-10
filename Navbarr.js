import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";
import './cssfiles/Navbarr.css';
import softechlogo from './pictures/softechlogo.png';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';


export default function Navbarr () {
  return (
    
      <Navbar expand="lg" className="custom-navbar">
        
        <Container>
          
          {/* Logo / Brand (Left Side) */}
          <Navbar.Brand as={Link} to="/home" className="brand-text"><Image src={softechlogo} alt="softechlogo" className="imglogo"></Image></Navbar.Brand>

          {/* Toggle Button (3 lines) */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible Menu */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/login"><button className="mybutton">Login</button></Nav.Link>
              <Nav.Link as={Link} to="/sdatatable"><button className="mybutton">STUDENT DATA</button></Nav.Link>
              <Nav.Link as={Link} to="/cdatatable"><button className="mybutton">COURSE DATA</button></Nav.Link>
              <Nav.Link as={Link} to="/tdatatable"><button className="mybutton">TEACHER DATA</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>


   
  );
}
