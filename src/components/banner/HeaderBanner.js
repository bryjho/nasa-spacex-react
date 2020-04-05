import React from 'react';
import { Container } from 'react-bootstrap';
import './header-banner.scss';

export function HeaderBanner() {
  return (
      <Container className="header-banner" fluid>
        <Container className="banner-header-container"> 
          <h1 className="display-4 text-light text-md-right text-center">EXPLORING NEW HEIGHTS AND THE UNKNOWN</h1>
          <p className="lead text-light text-md-right text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Container>
      </Container>
  );
}

export default HeaderBanner;