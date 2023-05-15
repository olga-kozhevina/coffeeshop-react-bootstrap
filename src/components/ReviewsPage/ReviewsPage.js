import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './ReviewsPage.css';
import { reviews } from '../../utils/constants';

const ReviewsPage = () => {
  const [visibleReviews, setVisibleReviews] = useState(3); 

  const loadMoreReviews = () => {
    setVisibleReviews(visibleReviews + 2); 
  };

  return (
    <Container>
      <h1>Reviews Page</h1>
      {reviews.slice(0, visibleReviews).map(review => (
        <Card key={review.id} className="mb-3 review-card">
          <Card.Body>
            <div className="d-flex align-items-center">
              <img className="review-avatar" src={review.image} alt={review.author} />
              <div>
                <Card.Title>{review.author}</Card.Title>
                <div className="review-rating">{`⭐️`.repeat(review.rating)}</div>
              </div>
            </div>
            <Card.Text>{review.content}</Card.Text>
            <div className="review-date">{new Date(review.date).toLocaleDateString()}</div>
          </Card.Body>
        </Card>
      ))}
      {visibleReviews < reviews.length && (
        <Button variant="light" className="load-more-button mb-4" onClick={loadMoreReviews}>Load More</Button>
      )}
    </Container>
  );
}

export default ReviewsPage;
