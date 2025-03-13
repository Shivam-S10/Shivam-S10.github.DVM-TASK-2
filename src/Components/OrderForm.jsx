import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderForm = ({ order, onOrderSubmit }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    item: order?.title || '',
    quantity: 1,
    orderDate: new Date().toISOString(),
    status: 'Pending',
    image: order?.image || ''  // Include image if available
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://httpbin.org/post', formData);
      
      // Create the final order object
      const finalOrder = {
        ...formData,
        orderDate: new Date().toISOString(),
        status: 'Confirmed',
        id: Date.now()  // Add unique ID
      };

      // Update orders through the passed function
      onOrderSubmit(finalOrder);

      alert('Order placed successfully!');
      // Navigate to past orders page
      navigate('/past-orders');
      
    } catch (error) {
      alert('Error placing order. Please try again.');
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="order-form-container" style={{ padding: '20px' }}>
      <Button 
        variant="secondary" 
        onClick={handleBack}
        style={{ marginBottom: '20px' }}
      >
        ← Back
      </Button>
      
      <form onSubmit={handleSubmit} className="order-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="address" 
          placeholder="Address" 
          value={formData.address} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="item" 
          placeholder="Selected Item" 
          value={formData.item} 
          readOnly 
        />
        <input 
          type="number" 
          name="quantity" 
          placeholder="Quantity" 
          value={formData.quantity} 
          onChange={handleChange} 
          required 
          min="1"
        />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
