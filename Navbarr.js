import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './cssfiles/Navbarr.css';
import softechlogo from './pictures/softechlogo.png';
import Image from 'react-bootstrap/Image';

export default function Navbarr(props) {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>

        <Navbar.Brand as={Link} to="/home" className="brand-text">
          <Image src={softechlogo} alt="logo" className="imglogo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {props.isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                <Nav.Link as={Link} to="/sdatatable">
                  <button className="mybutton">STUDENT DATA</button>
                </Nav.Link>

                <Nav.Link as={Link} to="/cdatatable">
                  <button className="mybutton">COURSE DATA</button>
                </Nav.Link>

                <Nav.Link as={Link} to="/tdatatable">
                  <button className="mybutton">TEACHER DATA</button>
                </Nav.Link>

                {/* ✅ LOGOUT */}
                <Nav.Link onClick={() => {
                  sessionStorage.removeItem("token");
                  props.setIsLoggedIn(false);
                  props.openLogin();
                }}>
                  <button className="mybutton">Logout</button>
                </Nav.Link>
              </>
            )}

            {/* ❌ LOGIN BUTTON (only when not logged in) */}
            {!props.isLoggedIn && (
              <Nav.Link onClick={props.openLogin}>
                <button className="mybutton">Login</button>
              </Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}