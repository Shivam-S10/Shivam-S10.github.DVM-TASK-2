import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './MerchCarousel.css';
// Import images from assets
import bitsTShirt from '../assets/BITS_TShirt.jpg';
import iitkHoodie from '../assets/IITK_Hoodie.jpg';
import iitbHoodie from '../assets/IITB_Hoodie.jpg';

const MerchCarousel = ({ addToWishlist, orderNow }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const items = [
    {
      id: 1,
      image: bitsTShirt,
      title: 'BITS MERCH T-SHIRT',
      price: '₹1800',
    },
    {
      id: 2,
      image: iitkHoodie,
      title: 'IIT KANPUR MERCH HOODIE',
      price: '₹2000',
    },
    {
      id: 3,
      image: iitbHoodie,
      title: 'IIT BOMBAY MERCH HOODIE',
      price: '₹2400',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) > 50) { // minimum swipe distance
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container className="py-4">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <Button variant="info" onClick={() => navigate('/past-orders')}>
          Past Orders
        </Button>
        <Button variant="primary" onClick={() => navigate('/wishlist')}>
          Wishlist
        </Button>
      </div>

      {/* Custom Carousel */}
      <div 
        className="custom-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-content">
          <button className="arrow-btn prev" onClick={prevSlide}>❮</button>
          
          <div className="slide-container">
            <div 
              className="slides"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)` 
              }}
            >
              {items.map((item, index) => (
                <div key={item.id} className="slide">
                  <div className="merch-card">
                    <div className="image-wrapper">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="card-content">
                      <h3>{item.title}</h3>
                      <p className="price">{item.price}</p>
                      <div className="action-buttons">
                        <Button 
                          variant="outline-primary"
                          onClick={() => addToWishlist(item)}
                        >
                          Add to Wishlist
                        </Button>
                        <Button 
                          variant="success"
                          onClick={() => orderNow(item)}
                        >
                          Order Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow-btn next" onClick={nextSlide}>❯</button>
        </div>

        <div className="carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MerchCarousel;
