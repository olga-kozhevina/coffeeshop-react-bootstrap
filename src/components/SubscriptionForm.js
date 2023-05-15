import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';

const SubscriptionForm = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setSubscriptionType("");
    setValidated(false); // reset form validation state
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      handleShow();
    }

    setValidated(true);
  }

  return (
    <Container className="mt-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Subscription Type</Form.Label>
          <Form.Control
            as="select"
            required
            value={subscriptionType}
            onChange={e => setSubscriptionType(e.target.value)}
          >
            <option value="">Choose...</option>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select a subscription type.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="light" type="submit">
          Subscribe
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscription Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully subscribed. Welcome to our coffee community!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default SubscriptionForm;
