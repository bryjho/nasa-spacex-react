import React from 'react';
import HeaderBanner from "../../components/banner/HeaderBanner";
import ISSBanner from "../../components/banner/ISSBanner";
import Gallery from "../../components/gallery/Gallery";
import { Container, Row, Col, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import './home.scss';
import Meteor from '../../images/icons/meteor-solid.svg';
import Rocket from '../../images/icons/rocket-solid.svg';
import Shuttle from '../../images/icons/space-shuttle-solid.svg';
import Astronaut from '../../images/icons/user-astronaut-solid.svg';
import Satellite from '../../images/icons/satellite-solid.svg';
import Astro from '../../images/photos/image002.png';
import LaunchRocket from '../../images/photos/image004.png';

export function Home() {
  return (
    <>
      <HeaderBanner />

      <Container className="icon-section-container" fluid>
        <Container className="section-header-container">
          <h2 className="text-center text-light">REVOLUTIONIZING SPACE TECHNOLOGY</h2>
          <p className="lead text-center text-light">For the benefit of all mankind.</p>
          <Row className="justify-content-center icons-container">
            <Col xs={6} sm={4} md={2} className="text-center">
              <Image src={Astronaut} alt="Astronaut Icon" />
              <h4 className="text-light">HUMANS</h4>
              <p className="text-light">IN SPACE</p>
            </Col>
            <Col xs ={6} sm={4} md={2} className="text-center">
              <Image src={Rocket} alt="Rocket" className="text-center" />
              <h4 className="text-light">ROCKET</h4>
              <p className="text-light">FLIGHT</p>
            </Col>
            <Col xs ={6} sm={4} md={2} className="text-center">
              <Image src={Satellite} alt="Meteor" className="text-center" />
              <h4 className="text-light">SPACE</h4>
              <p className="text-light">TECHNOLOGY</p>
            </Col>
            <Col xs ={6} sm={4} md={2} className="text-center">
              <Image src={Shuttle} alt="Shuttle" className="text-center" />
              <h4 className="text-light">MOON</h4>
              <p className="text-light">TO MARS</p>
            </Col>
            <Col xs ={6} sm={4} md={2} className="text-center">
              <Image src={Meteor} alt="Meteor" className="text-center" />
              <h4 className="text-light">BEYOND</h4>
              <p className="text-light">THE UNKNOWN</p>
            </Col>
          </Row>
          <Row className="text-center anchor-button-container">
            <Col md={12}>
              <svg className="bi bi-chevron-down text-light" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"/>
              </svg>
            </Col>
            <Col>
              <p className="text-light">DISCOVER MORE</p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="section-container">
        <Container>
            <Row className="row-eq-height align-items-center">
              <Col md={6} className="image-container">
                <Image src={Astro} alt="Astronaut" />
              </Col>
              <Col md={6} className="text-container">
                <h2 className="text-dark">JOIN OUR MEN AND WOMEN INTO DEEP SPACE</h2>
                <hr />
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus.</p>
                <Button>GET INVOLVED</Button>
              </Col>
            </Row>
          </Container>
      </Container>

      <ISSBanner />
      
      <Container fluid className="section-container">
        <Container className="section-more" fluid>
          <Container>
            <Row className="row-eq-height align-items-center">
              <Col md={12}>
                <h2 className="text-dark">WANT TO KNOW MORE ABOUT SPACE EXPLORATION?</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus.</p>
                <Button>CONTACT US</Button>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="section-update">
          <Row className="row-eq-height align-items-center">
            <Col md={5} className="text-center">
              <Image src={LaunchRocket} alt="Rocket Launch"></Image>
            </Col>
            <Col md={7}>
              <h2 className="text-dark">DON'T MISS OUT ON THE LATEST UPDATES AND LAUNCHES</h2>
              <hr></hr>
              <InputGroup className="mb-3">
                <FormControl placeholder="Enter your email" />
                <InputGroup.Append>
                  <Button variant="outline-secondary" className="text-light input-group-button">SUBSCRIBE</Button>
                </InputGroup.Append>
              </InputGroup>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus.</p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Gallery />

      <Container className="icon-section-container" fluid>
        <Container className="section-header-container text-center">
          <h2 className="text-center text-light">YOU'RE NOW JUST A FEW MOMENTS AWAY FROM OUR NEXT MISSION</h2>
          <p className="lead text-center text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>CONTACT US</Button>
        </Container>
      </Container>
    </>
  );
}

export default Home;