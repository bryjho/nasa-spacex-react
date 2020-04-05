import React from 'react';
import HeaderBanner from "../../components/banner/HeaderBanner";
import { Container, Row, Col, Image, } from 'react-bootstrap';
import './home.scss';
import Meteor from '../../images/icons/meteor-solid.svg';
import Rocket from '../../images/icons/rocket-solid.svg';
import Shuttle from '../../images/icons/space-shuttle-solid.svg';
import Astronaut from '../../images/icons/user-astronaut-solid.svg';
import Satellite from '../../images/icons/satellite-solid.svg';

export function Home() {
  return (
    <>
      <HeaderBanner />
      <Container className="section-container" fluid>
        <Container className="section-header-container">
          <h2 className="text-center text-light">REVOLUTIONIZING SPACE TECHNOLOGY</h2>
          <p className="lead text-center text-light">For the benefit of all mankind.</p>
          <Row className="justify-content-center icons-container">
            <Col xs={6} sm={4} md={2} className="text-center">
              <Image src={Astronaut} alt="Astronaut" />
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
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
              </svg>
            </Col>
            <Col>
              <p className="text-light">DISCOVER MORE</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;