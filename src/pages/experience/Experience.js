import React from 'react';
import { Container } from 'react-bootstrap';
import './experience.scss';
import NasaApod from '../../components/apod/NasaApod';
import SpacexTech from '../../components/spacex/SpacexTech';

export function Experience() {
  return (
    <>
      <Container className="icon-section-container" fluid>
        <Container className="section-header-container text-center">
          <h2 className="text-center text-light">EXPERIENCE SPACE</h2>
          <p className="lead text-center text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui sed mauris molestie varius. Nunc euismod, dui non ullamcorper finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Container>
      </Container>

      <NasaApod />

      <SpacexTech />
    </>
  );
}

export default Experience;