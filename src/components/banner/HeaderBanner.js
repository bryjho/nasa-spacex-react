import React from 'react';
import { Container } from 'react-bootstrap';
import './header-banner.scss';

export function HeaderBanner() {
  return (
      <Container className="header-banner" fluid>
        <Container>
          <h1 className="text-light">EXPLORING NEW HEIGHTS AND THE UNKNOWN</h1>
          <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Container>
      </Container>
  );
}

export default HeaderBanner;