import React from 'react';

const PastOrders = ({ orders = [] }) => {  // ✅ Default value to prevent errors
  return (
    <div className="past-orders">
      <h2>Past Orders</h2>
      {orders.length === 0 ? (  
        <p>No past orders yet.</p>  // ✅ Display message when no orders
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <strong>{order.name}</strong> ordered <em>{order.item}</em> to <span>{order.address}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PastOrders;
