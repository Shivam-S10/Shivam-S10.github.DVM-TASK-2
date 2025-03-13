import React from 'react';
import { Carousel, Button, Card, Container, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Import images from assets
import bitsTShirt from '../assets/BITS_TShirt.jpg';
import iitkHoodie from '../assets/IITK_Hoodie.jpg';
import iitbHoodie from '../assets/IITB_Hoodie.jpg';

const merchItems = [
  { id: 1, title: 'BITS MERCH T-SHIRT', price: '₹1800', image: bitsTShirt },
  { id: 2, title: 'IIT KANPUR MERCH HOODIE', price: '₹2000', image: iitkHoodie },
  { id: 3, title: 'IIT BOMBAY MERCH HOODIE', price: '₹2400', image: iitbHoodie }
];

const MerchCarousel = ({ addToWishlist, orderNow }) => {
  const navigate = useNavigate();

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
  };

  return (
    <Container className="py-3">
      {/* Navigation buttons */}
      <Stack 
        direction="horizontal" 
        gap={2} 
        className="mb-4 flex-wrap justify-content-center"
      >
        <Button 
          variant="info" 
          onClick={() => navigate('/past-orders')}
          className="w-100 w-md-auto"
          style={{ maxWidth: '200px' }}
        >
          Past Orders
        </Button>
        <Button 
          variant="primary" 
          onClick={() => navigate('/wishlist')}
          className="w-100 w-md-auto"
          style={{ maxWidth: '200px' }}
        >
          Wishlist
        </Button>
      </Stack>

      {/* Existing Carousel code */}
      <Carousel>
        {merchItems.map((item) => (
          <Carousel.Item key={item.id}>
            <Card className="text-center p-2">
              <Card.Img 
                variant="top" 
                src={item.image} 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Stack 
                  direction="horizontal" 
                  gap={2} 
                  className="justify-content-center flex-wrap"
                >
                  <Button 
                    variant="outline-primary" 
                    onClick={() => handleAddToWishlist(item)}
                    className="w-100 w-md-auto"
                    style={{ maxWidth: '200px' }}
                  >
                    Add to Wishlist
                  </Button>
                  <Button 
                    variant="success" 
                    onClick={() => orderNow(item)}
                    className="w-100 w-md-auto"
                    style={{ maxWidth: '200px' }}
                  >
                    Order Now
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default MerchCarousel;
