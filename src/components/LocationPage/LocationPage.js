import './LocationPage.css';
import React from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const LocationPage = () => {
  return (
    <Container>
      <h1 className="mt-5">Location</h1>
      <div className="map-container mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d331636.3463074693!2d69.4644426!3d-49.5051133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb36cabf2d157c333%3A0x61519604daf263f0!2sMont%20Ross!5e0!3m2!1sen!2sth!4v1684161246940!5m2!1sen!2sth"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ListGroup className='my-5'>
        <ListGroup.Item>Address: 123 Coffee Street, City</ListGroup.Item>
        <ListGroup.Item>
          Phone: <a href="tel:(123) 456-7890" className="social-icon">(123) 456-7890</a>
        </ListGroup.Item>
        <ListGroup.Item>
          Email: <a href="mailto:info@coffeeshop.com" className="social-icon">info@coffeeshop.com</a>
        </ListGroup.Item>
        <ListGroup.Item className='pb-0'>
  <Row>
    <Col xs={2} lg={1}>Hours:</Col>
    <Col>
      <Row>Mon-Fri: 8am - 6pm</Row>
      <Row>Sat-Sun: 9am - 5pm</Row>
    </Col>
  </Row>
</ListGroup.Item>


      </ListGroup>
      <h2>Follow Us</h2>
      <div className="social-icons mb-2">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-icon">
          <FaFacebook size={24} className="mr-3" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-icon">
          <FaInstagram size={24} className="mr-3" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="social-icon">
          <FaTwitter size={24} className="mr-3" />
        </a>
      </div>
    </Container>
  );
}

export default LocationPage;
