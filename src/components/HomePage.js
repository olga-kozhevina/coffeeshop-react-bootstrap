import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import homepageImage from '../img/homepage-bg.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <Container fluid className="text-center p-5" 
               style={{ backgroundImage: `url(${homepageImage})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        color: 'white', 
                        height: '100vh',
                        width: '100vw' }}>
      <h1>Welcome to Our Coffee Shop!</h1>
      <p>
        <Button variant="light" onClick={handleLearnMore}>Learn more</Button>
      </p>
    </Container>
  );
}

export default HomePage;
