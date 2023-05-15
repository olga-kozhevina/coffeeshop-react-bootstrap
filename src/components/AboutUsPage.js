import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import coffeeImage from '../img/about-coffee.jpg'; 
import teamImage from '../img/about-team.jpg'; 

const AboutUsPage = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate('/subscribe');
  };

  return (
    <Container>
      <Row className="my-4 align-items-center">
        <Col md={6}>
          <h1>About Us</h1>
          <p>We are a coffee shop passionate about delivering quality coffee to our customers. We source our beans from the best farms around the world, and our baristas are trained to extract the perfect cup every time. Come and experience the difference.</p>
        </Col>
        <Col md={6} className="text-center">
          <Image src={coffeeImage} alt="Coffee" fluid rounded />
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h2>Our Story</h2>
          <p>From humble beginnings in a small town, we've grown to become a favorite spot for coffee lovers in our city. Our commitment to quality has been our guiding principle from day one.</p>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h2>Our Team</h2>
          <p>We are a diverse team of coffee enthusiasts, dedicated to providing the best possible experience for our customers.</p>
          <Image src={teamImage} alt="Our Team" fluid rounded />
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h2>Our Values</h2>
          <Card>
            <Card.Body>
              <Card.Title>Quality</Card.Title>
              <Card.Text>
                We never compromise on the quality of our coffee.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Service</Card.Title>
              <Card.Text>
                We strive to deliver the best service to our customers.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Sustainability</Card.Title>
              <Card.Text>
                We are committed to sourcing our coffee in a responsible and sustainable manner.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-4">
        <Col className="text-center">
          <Button variant="outline-dark" size="lg" onClick={handleSubscribe}>Subscribe to our coffee community!</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsPage;
