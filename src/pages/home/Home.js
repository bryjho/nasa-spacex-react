import React from 'react';
import HeaderBanner from "../../components/banner/HeaderBanner";
import { Container } from 'react-bootstrap';

export function Home() {
  return (
    <>
      <HeaderBanner />
      <Container>
        <h2 className>REVOLUTIONIZING SPACE TECHNOLOGY</h2>
        <p className="lead">For the benefit of all mankind.</p>
      </Container>
    </>
  );
}

export default Home;