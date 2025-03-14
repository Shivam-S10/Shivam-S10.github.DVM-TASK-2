import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './MerchCarousel.css';
// Import images from assets
import bitsTShirt from '../assets/BITS_TShirt.jpg';
import iitkHoodie from '../assets/IITK_Hoodie.jpg';
import iitbHoodie from '../assets/IITB_Hoodie.jpg';

const MerchCarousel = ({ addToWishlist, orderNow }) => {
  const navigate = useNavigate();

  return (
    <Container className="py-4">
      {/* Navigation Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <Button 
          variant="info" 
          onClick={() => navigate('/past-orders')}
        >
          Past Orders
        </Button>
        <Button 
          variant="primary" 
          onClick={() => navigate('/wishlist')}
        >
          Wishlist
        </Button>
      </div>

      {/* Bootstrap Carousel */}
      <div 
        id="merchCarousel" 
        className="carousel slide" 
        data-bs-ride="carousel"
        data-bs-interval="false"  // Disable auto-sliding
        data-bs-touch="true"      // Enable touch swiping
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#merchCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#merchCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#merchCarousel" data-bs-slide-to="2"></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* BITS T-Shirt Slide */}
          <div className="carousel-item active">
            <div className="card text-center">
              <div className="image-container">
                <img 
                  src={bitsTShirt} 
                  className="card-img-top" 
                  alt="BITS T-Shirt"
                  style={{ 
                    maxHeight: '600px',  // Increased height
                    width: 'auto',      // Maintain aspect ratio
                    objectFit: 'contain' // Show full image without cropping
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">BITS MERCH T-SHIRT</h5>
                <p className="card-text">₹1800</p>
                <div className="d-flex justify-content-center gap-2">
                  <Button 
                    variant="outline-primary" 
                    onClick={() => addToWishlist({
                      id: 1,
                      title: 'BITS MERCH T-SHIRT',
                      price: '₹1800',
                      image: bitsTShirt
                    })}
                  >
                    Add to Wishlist
                  </Button>
                  <Button 
                    variant="success" 
                    onClick={() => orderNow({
                      id: 1,
                      title: 'BITS MERCH T-SHIRT',
                      price: '₹1800',
                      image: bitsTShirt
                    })}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* IIT Kanpur Slide */}
          <div className="carousel-item">
            <div className="card text-center">
              <div className="image-container">
                <img 
                  src={iitkHoodie} 
                  className="card-img-top" 
                  alt="IIT Kanpur Hoodie"
                  style={{ 
                    maxHeight: '600px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">IIT KANPUR MERCH HOODIE</h5>
                <p className="card-text">₹2000</p>
                <div className="d-flex justify-content-center gap-2">
                  <Button 
                    variant="outline-primary" 
                    onClick={() => addToWishlist({
                      id: 2,
                      title: 'IIT KANPUR MERCH HOODIE',
                      price: '₹2000',
                      image: iitkHoodie
                    })}
                  >
                    Add to Wishlist
                  </Button>
                  <Button 
                    variant="success" 
                    onClick={() => orderNow({
                      id: 2,
                      title: 'IIT KANPUR MERCH HOODIE',
                      price: '₹2000',
                      image: iitkHoodie
                    })}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* IIT Bombay Slide */}
          <div className="carousel-item">
            <div className="card text-center">
              <div className="image-container">
                <img 
                  src={iitbHoodie} 
                  className="card-img-top" 
                  alt="IIT Bombay Hoodie"
                  style={{ 
                    maxHeight: '600px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">IIT BOMBAY MERCH HOODIE</h5>
                <p className="card-text">₹2400</p>
                <div className="d-flex justify-content-center gap-2">
                  <Button 
                    variant="outline-primary" 
                    onClick={() => addToWishlist({
                      id: 3,
                      title: 'IIT BOMBAY MERCH HOODIE',
                      price: '₹2400',
                      image: iitbHoodie
                    })}
                  >
                    Add to Wishlist
                  </Button>
                  <Button 
                    variant="success" 
                    onClick={() => orderNow({
                      id: 3,
                      title: 'IIT BOMBAY MERCH HOODIE',
                      price: '₹2400',
                      image: iitbHoodie
                    })}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        {/*<button className="carousel-control-prev" type="button" data-bs-target="#merchCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#merchCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>*/}
      </div>
    </Container>
  );
};

export default MerchCarousel;
