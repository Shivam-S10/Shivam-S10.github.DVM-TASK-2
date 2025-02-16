import React from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
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

const MerchCarousel = ({ addToWishlist, setSelectedItem }) => {
  const navigate = useNavigate();

  const orderNow = (item) => {
    setSelectedItem(item);
    navigate('/order');
  };

  return (
    <Carousel>
      {merchItems.map((item) => (
        <Carousel.Item key={item.id}>
          <Card className="text-center p-2">
            <Card.Img variant="top" src={item.image} style={{ height: '250px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
              <Button variant="outline-primary" onClick={() => addToWishlist(item)}>Add to Wishlist</Button>{' '}
              <Button variant="success" onClick={() => orderNow(item)}>Order Now</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MerchCarousel;
