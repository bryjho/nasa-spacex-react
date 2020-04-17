import React from 'react';
import { Container, ResponsiveEmbed, Row } from 'react-bootstrap';
import './iss-banner.scss';

export function ISSBanner() {
  return (
    <Container fluid className="iss-banner-container">
      <Container>
        <h2 className="text-light">High Definition Earth-Viewing System (HDEV)</h2>
        <p className="lead text-light">The High Definition Earth Viewing (HDEV) experiment mounted on the ISS External Payload Facility of the European Space Agency’s Columbus module was activated April 30, 2014 and after 5 years and 79 days was viewed by more than 318 million viewers across the globe on USTREAM alone.</p>
        <p className="lead text-light">To learn more about the HDEV experiment, visit <a href="https://www.nasa.gov/mission_pages/station/research/experiments/explorer/Investigation.html?#id=892">HDEV's experiment investigation page</a>.</p>
        <Row className="embed-container">
          <ResponsiveEmbed aspectRatio="16by9">
            <embed src="https://ustream.tv/embed/9408562" />
          </ResponsiveEmbed>
        </Row>
      </Container>
    </Container>
  )
}

export default ISSBanner;