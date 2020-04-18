import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import './gallery.scss';
import photos from '../../images/photos/photos';

function Gallery() {
  return (
    <Container fluid className="gallery-container"> 
      <Row>
        { photos.map(({id, src, description}) =>
          <Col md={3} xs={6} key={id} className="gallery-image">
            <Image src={src} alt={description} />
          </Col>)
        }
      </Row>
    </Container>
  );
}

export default Gallery;