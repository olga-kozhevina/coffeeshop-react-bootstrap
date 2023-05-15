import React from 'react';
import { events } from '../../utils/constants';
import './EventsPage.css';
import { useState } from 'react';
import { Container, Card, Button, Row, Col, Modal } from 'react-bootstrap';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <Container>
      <h1>Events Page</h1>
      <Row className="justify-content-md-center">
        {events.map((event) => (
          <Col xs={12} sm={6} md={4} lg={3} key={event.id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={event.image} className='img-fluid w-100 event-img'/>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{event.title}</Card.Title>
                <Button variant="outline-dark" onClick={() => openModal(event)} className="mt-auto">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedEvent && (
        <Modal show={true} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p>{selectedEvent.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default EventsPage;