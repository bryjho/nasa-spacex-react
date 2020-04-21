import React from "react";
import { Container, Row, Col, InputGroup, FormControl, Button, ResponsiveEmbed, Accordion } from 'react-bootstrap';
import './spacex-tech.scss';
import Gallery from '../gallery/Gallery';
import SpacexRocket from './SpacexRocket';
import SpacexDragon from './SpacexDragon';
import SpacexRoadster from './SpacexRoadster';

export function SpacexTech() {
  return (
    <>
      <Container fluid className="spacex-container">
        <Container className="spacex-content">
          <Row>
            <Col md={6} className="subscribe-container">
              <h2 className="text-dark">SPACEX ROCKET TECHNOLOGY</h2>
              <hr></hr>
              <InputGroup className="mb-3">
                <FormControl placeholder="Enter your email" />
                <InputGroup.Append>
                  <Button variant="outline-secondary" className="text-light input-group-button">SUBSCRIBE</Button>
                </InputGroup.Append>
              </InputGroup>
              <p className="lead text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus.</p>
            </Col>

            <Col md={6}>
              <div>
                <h2 className="text-dark">FALCON ROCKETS</h2>
                <div className="embed-container">
                  <ResponsiveEmbed aspectRatio="16by9">
                    <embed src="https://www.youtube.com/embed/Z4TXCZG_NEY" />
                  </ResponsiveEmbed>
                </div>
                <p className="lead text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus.</p>
                <Accordion>
                  <Accordion.Toggle as={Button} eventKey="0">VIEW MORE</Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <SpacexRocket />
                  </Accordion.Collapse>
                </Accordion>
                <hr></hr>
              </div>

              <div>
                <h2 className="text-dark">DRAGON SPACECRAFTS</h2>
                <div className="embed-container">
                  <ResponsiveEmbed aspectRatio="16by9">
                    <embed src="https://www.youtube.com/embed/78ATfCaBn6E" />
                  </ResponsiveEmbed>
                </div>
                <p className="lead text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus.</p>
                <Accordion>
                  <Accordion.Toggle as={Button} eventKey="0">VIEW MORE</Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <SpacexDragon />
                  </Accordion.Collapse>
                </Accordion>
                <hr></hr>
              </div>

              <div>
                <h2 className="text-dark">TESLA ROADSTER</h2>
                <div className="embed-container">
                  <ResponsiveEmbed aspectRatio="16by9">
                    <embed src="https://www.youtube.com/embed/A0FZIwabctw" />
                  </ResponsiveEmbed>
                </div>
                <p className="lead text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus.</p>
                <Accordion>
                  <Accordion.Toggle as={Button} eventKey="0">VIEW MORE</Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <SpacexRoadster />
                  </Accordion.Collapse>
                </Accordion>
                <hr></hr>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="icon-section-container" fluid>
        <Container className="section-header-container text-center">
          <h2 className="text-center text-light">NASA AND SPACEX IMAGE GALLERY</h2>
          <p className="lead text-center text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Container>
      </Container>

      <Gallery />
    </>
  );
}

export default SpacexTech;