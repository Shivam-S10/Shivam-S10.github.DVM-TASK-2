import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const PastOrders = ({ orders }) => {
  const navigate = useNavigate();

  return (
    <Container className="py-4">
      <Button 
        variant="secondary" 
        onClick={() => navigate(-1)}
        className="mb-4"
      >
        ← Back
      </Button>

      <h2 className="mb-4">Past Orders</h2>
      
      {orders.length === 0 ? (
        <div className="text-center">
          <p>No orders placed yet.</p>
        </div>
      ) : (
        <Row xs={1} md={2} className="g-4">
          {orders.map((order, index) => (
            <Col key={order.id || index}>
              <Card className="h-100">
                {order.image && (
                  <Card.Img 
                    variant="top" 
                    src={order.image} 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                )}
                <Card.Body>
                  <Card.Title>{order.item}</Card.Title>
                  <Card.Text>
                    <strong>Order Date:</strong>{' '}
                    {new Date(order.orderDate).toLocaleDateString()}<br/>
                    <strong>Quantity:</strong> {order.quantity}<br/>
                    <strong>Status:</strong>{' '}
                    <span className={`text-${order.status === 'Confirmed' ? 'success' : 'warning'}`}>
                      {order.status}
                    </span><br/>
                    <strong>Shipping To:</strong><br/>
                    {order.name}<br/>
                    {order.address}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Order #{order.id || index + 1}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default PastOrders;
