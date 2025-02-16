import React from 'react';

const Wishlist = ({ wishlist = [] }) => {  // ✅ Default value to prevent errors
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>  // ✅ Show a message when no items are saved
      ) : (
        <ul>
          {wishlist.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - <span>{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
