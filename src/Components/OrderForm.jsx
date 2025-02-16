import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderForm = ({ order }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    item: order?.title || '',  // ✅ Avoids errors if `order` is null
    quantity: 1
  });

  useEffect(() => {
    // ✅ Update formData when `order` changes
    if (order) {
      setFormData((prev) => ({ ...prev, item: order.title }));
    }
  }, [order]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://httpbin.org/post', formData);
      alert('Order placed successfully!');
      console.log(response.data);
    } catch (error) {
      alert('Error placing order. Please try again.');
      console.error('Error placing order:', error);
    }
  };

  return (
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
  );
};

export default OrderForm;
