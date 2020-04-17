import React from "react";
import { Container, Image } from 'react-bootstrap';
import './gallery.scss';
import photos from '../../images/photos/photos';

function Gallery() {
  return (
    <Container fluid className="gallery-container d-flex flex-row flex-wrap justify-content-center">
      { photos.map(({id, src, description}) => 
        <div key={id}>
          <Image src={src} alt={description} className="img-fluid" />
        </div>) 
      }
    </Container>
  );
}

export default Gallery;