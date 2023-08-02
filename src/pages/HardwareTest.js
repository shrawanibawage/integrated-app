// src/ResourceCheckout.js

import React, { useState } from 'react';

const ResourceCheckout = ({ capacity }) => {
  const [availability, setAvailability] = useState(capacity);
  const [checkoutValue, setCheckoutValue] = useState(0);

  const handleCheckout = () => {
    if (checkoutValue > 0 && checkoutValue <= availability) {
      setAvailability((prevAvailability) => prevAvailability - checkoutValue);
      setCheckoutValue(0);
    } else {
      alert('Invalid checkout value. Please enter a valid value.');
    }
  };

  const handleChange = (e) => {
    setCheckoutValue(parseInt(e.target.value));
  };

  return (
    <div>
      <h2>Resource Checkout</h2>
      <p>
        Capacity: {capacity} | Availability: {availability}
      </p>
      <label>
        Enter Checkout Value:
        <input
          type="number"
          value={checkoutValue}
          onChange={handleChange}
          min="0"
          max={availability}
        />
      </label>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default ResourceCheckout;
