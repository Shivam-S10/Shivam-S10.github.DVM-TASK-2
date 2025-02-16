import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MerchCarousel from './Components/MerchCarousel';
import OrderForm from './Components/OrderForm';
import PastOrders from './Components/PastOrders';
import Wishlist from './Components/Wishlist';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate(); // ✅ Now safe to use

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const orderNow = (item) => {
    setSelectedItem(item);
    navigate('/order');
  };

  const handleOrderSubmit = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <Routes>
      <Route path="/" element={<MerchCarousel addToWishlist={addToWishlist} orderNow={orderNow} />} />
      <Route path="/order" element={<OrderForm order={selectedItem} onSubmit={handleOrderSubmit} />} />
      <Route path="/past-orders" element={<PastOrders orders={orders} />} />
      <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
    </Routes>
  );
};

export default App;
