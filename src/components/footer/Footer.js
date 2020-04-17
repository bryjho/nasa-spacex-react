import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Phone from '../../images/icons/countdownAsset6.svg';
import Mail from '../../images/icons/countdownAsset1.svg';
import Map from '../../images/icons/countdownAsset2.svg';
import Sms from '../../images/icons/countdownAsset5.svg';
import './footer.scss';

function Footer() {
  return (
    <Container className="footer-container" fluid>
      <Container className="footer-icon-container">
        <Row>
          <Col md={3} xs={6} className="text-center icon-container">
            <Image src={Phone} alt="Phone" />
            <h6 className="text-light">CALL US</h6>
            <p className="small text-light">Message us (24/7):</p>
            <p className="small btn-link">(202) 358-0001 (Office)</p>
          </Col>
          <Col md={3} xs={6} className="text-center icon-container">
            <Image src={Sms} alt="SMS" />
            <h6 className="text-light">MESSAGE US</h6>
            <p className="small text-light">Call us on:</p>
            <p className="small btn-link">(202) 358-0001 (Office)</p>
          </Col>
          <Col md={3} xs={6} className="text-center icon-container">
            <Image src={Map} alt="Map" />
            <h6 className="text-light">FIND US</h6>
            <p className="small text-light">Visit our facilities</p>
            <p className="small text-light">in many locations</p>
          </Col>
          <Col md={3} xs={6} className="text-center icon-container">
            <Image src={Mail} alt="Mail" />
            <h6 className="text-light">MAIL US</h6>
            <p className="small text-light">Send us an email at:</p>
            <p className="small btn-link">email@nasa.gov</p>
          </Col>
        </Row>
      </Container>
      <Row className="justify-content-center copyright-container">
        <p className="small text-light">© 2020 Noroff ■ PORTFOLIO 2 ■ Bryan Luis Villafuerte</p>
      </Row>
    </Container>
  );
}

export default Footer;