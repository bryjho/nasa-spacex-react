import React, { useState, useEffect } from "react";
import { NASA_APOD_URL } from "../../constants/api";
import { Spinner, Container, Button, Modal, Image } from "react-bootstrap";
import './nasa-apod.scss';

function Apod(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const detailUrl = NASA_APOD_URL;

  useEffect(() => {
    fetch(detailUrl)
      .then(response => response.json())
      .then(json => setDetail(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [detailUrl]);

  if (loading) {
    return <div className="h-100 align-middle text-center"><Spinner animation="border" variant="primary" /></div>
  }

  return (
    <>
      <Container fluid className="apod-container" style={{ background: `-webkit-linear-gradient(bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${detail.hdurl})` }}>
        <Container className="apod-info">
          <h2 className="text-light">{detail.title}</h2>
          <hr></hr>
          <p className="lead text-light">{detail.explanation}</p>
          <Button onClick={handleShow}>VIEW PHOTO</Button>
        </Container>
      </Container>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show} onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={detail.url} alt="NASA APOD" className="w-100" />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Apod;