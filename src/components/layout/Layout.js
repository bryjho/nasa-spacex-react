import React from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Experience from "../../pages/experience/Experience";
import Footer from "../footer/Footer";
import MyModal from "../modal/Modal";
import NasaLogo from "../../images/nasa-vector-logo.png";
import SpaceXLogo from "../../images/spacex-vector-logo.png";
import "./layout.scss";

function Layout() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Router>
      <Container fluid>
        <Container className="sticky-top navbar-container" fluid>
          <Container>
            <Navbar bg="dark" variant="dark" expand="md">
              <NavLink to="/" exact>
                <Navbar.Brand className="nasa-logo-container">
                  <Image src={NasaLogo} alt="NASA Logo" className="d-inline-block align-top nasa-logo" />
                </Navbar.Brand>
                <Navbar.Brand className="spacex-logo-container">
                  <Image src={SpaceXLogo} alt="NASA Logo" className="d-inline-block align-bottom spacex-logo" />
                </Navbar.Brand>
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav ml-auto">
                  <NavLink to="/" exact className="nav-link ml-auto">
                    Home
                  </NavLink>
                  <NavLink to="/experience" className="nav-link ml-auto">
                    Experience Space
                  </NavLink>
                  <NavLink to="/about" className="nav-link ml-auto">
                    About
                  </NavLink>
                  <Button variant="link" className="nav-link ml-auto" onClick={() => setModalShow(true)}>Contact Us</Button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </Container>

        <MyModal 
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
        </Switch>
      </Container>

      <Footer />
    </Router>
  );
}

export default Layout;
