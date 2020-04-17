import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './modal.scss';
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  yourName: yup.string()
    .required("Please input your name.")
    .min(2, 'Input is too short - should be at least 2 characters.'),
  email: yup.string()
    .email("This is not a valid email address.")
    .required("Please input your email address."),
  message: yup.string()
    .required("Please leave us your message.")
    .min(10, 'Input is too short - should be at least 10 characters.')
});

function MyModal(props) {
  const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

  function onSubmit(data) {
      console.log("data", data);
  }

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>NEED SOME ANSWERS?</h3>
          <h6>Feel free to contact us and send in your questions.</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Control type="text" name="yourName" placeholder="Enter your name" ref={register} />
            {errors.yourName && <p className="text-danger"><small>{errors.yourName.message}</small></p>}
          </Form.Group>

          <Form.Group>
            <Form.Control type="email" name="email" placeholder="Enter email address" ref={register} />
            {errors.email && <p className="text-danger"><small>{errors.email.message}</small></p>}
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" name="message" rows="3" placeholder="Write your message here." ref={register} />
            {errors.message && <p className="text-danger"><small>{errors.message.message}</small></p>}
          </Form.Group>

          <Button type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MyModal;