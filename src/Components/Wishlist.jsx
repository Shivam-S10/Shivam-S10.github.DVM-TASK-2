import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';

const Wishlist = ({ wishlist, setWishlist }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const removeFromWishlist = (indexToRemove) => {
    const newWishlist = wishlist.filter((_, index) => index !== indexToRemove);
    setWishlist(newWishlist);
  };

  return (
    <Container>
      <div className="wishlist" style={{ padding: '20px' }}>
        <Button 
          variant="secondary" 
          onClick={handleBack}
          style={{ marginBottom: '20px' }}
        >
          ← Back
        </Button>

        <h2 style={{ marginBottom: '30px' }}>My Wishlist</h2>
        
        {wishlist.length === 0 ? (
          <div className="text-center">
            <p>Your wishlist is empty.</p>
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {wishlist.map((item, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={item.image} 
                    alt={item.title}
                    style={{ 
                      height: '250px',
                      objectFit: 'cover',
                      borderBottom: '1px solid #eee'
                    }} 
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-3">{item.title}</Card.Title>
                    <Card.Text className="text-primary fw-bold">
                      {item.price}
                    </Card.Text>
                    <Button 
                      variant="outline-danger" 
                      className="mt-auto"
                      onClick={() => removeFromWishlist(index)}
                    >
                      Remove from Wishlist
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default Wishlist;
