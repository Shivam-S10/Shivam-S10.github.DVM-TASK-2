import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MerchCarousel from './Components/MerchCarousel';
import OrderForm from './Components/OrderForm';
import PastOrders from './Components/PastOrders';
import Wishlist from './Components/Wishlist';

const App = () => {
  // Initialize state with localStorage data if it exists
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  // Update localStorage when orders change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Update localStorage when wishlist changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item) => {
    // Check if item already exists in wishlist
    const exists = wishlist.some(wishlistItem => wishlistItem.id === item.id);
    
    if (exists) {
      alert('Item already in wishlist!');
      return;
    }

    setWishlist(prevWishlist => {
      const updatedWishlist = [...prevWishlist, item];
      // Update localStorage
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
    
    alert('Item added to wishlist successfully!');
  };

  const orderNow = (item) => {
    setSelectedItem(item);
    navigate('/order');
  };

  const handleOrderSubmit = (newOrder) => {
    setOrders(prevOrders => {
      const updatedOrders = [...prevOrders, newOrder];
      // Update localStorage
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return updatedOrders;
    });
  };

  return (
    <Routes>
      <Route path="/" element={<MerchCarousel addToWishlist={addToWishlist} orderNow={orderNow} />} />
      <Route path="/order" element={<OrderForm order={selectedItem} onOrderSubmit={handleOrderSubmit} />} />
      <Route path="/past-orders" element={<PastOrders orders={orders} />} />
      <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />
    </Routes>
  );
};

export default App;